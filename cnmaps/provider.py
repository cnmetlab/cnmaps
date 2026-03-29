"""Data-provider discovery and path resolution for cnmaps."""

from __future__ import annotations

import json
import warnings
from dataclasses import dataclass
from functools import cached_property, lru_cache
from importlib import import_module
from importlib import metadata
from pathlib import Path


CNMAPS_DATA_PROVIDER_GROUP = "cnmaps.data_providers"


@dataclass(frozen=True)
class FileSystemDataProvider:
    """File-system backed data provider."""

    root_dir: Path
    manifest_path: Path
    name: str
    version: str

    @cached_property
    def manifest(self) -> dict:
        with self.manifest_path.open(encoding="utf-8") as f:
            return json.load(f)

    def _dataset_meta(self, dataset: str) -> dict:
        return self.manifest["datasets"][dataset]

    def get_dataset_root(self, dataset: str) -> str:
        dataset_meta = self._dataset_meta(dataset)
        return str((self.root_dir / dataset_meta["root"]).resolve())

    def get_index_db(self, dataset: str = "administrative") -> str:
        dataset_meta = self._dataset_meta(dataset)
        index_db = dataset_meta.get("index_db")
        if index_db is None:
            raise KeyError(f"dataset {dataset!r} does not define index_db")
        return str((self.root_dir / index_db).resolve())

    def resolve_dataset_path(self, dataset: str, relative_path: str) -> str:
        relative = Path(relative_path)
        relative_parts = relative.parts
        if relative_parts and relative_parts[0] == dataset:
            relative = Path(*relative_parts[1:])
        return str((Path(self.get_dataset_root(dataset)) / relative).resolve())

    def get_sample_path(self, filename: str) -> str:
        return str((Path(self.get_dataset_root("sample")) / filename).resolve())


def _provider_from_manifest_root(root_dir: Path) -> FileSystemDataProvider:
    manifest_path = root_dir / "manifest.json"
    with manifest_path.open(encoding="utf-8") as f:
        manifest = json.load(f)
    return FileSystemDataProvider(
        root_dir=root_dir,
        manifest_path=manifest_path,
        name=manifest["name"],
        version=manifest["version"],
    )


def _iter_entry_points():
    entry_points = metadata.entry_points()
    if hasattr(entry_points, "select"):
        return entry_points.select(group=CNMAPS_DATA_PROVIDER_GROUP)
    return entry_points.get(CNMAPS_DATA_PROVIDER_GROUP, [])


def _load_provider_from_entry_points():
    for entry_point in _iter_entry_points():
        try:
            provider_factory = entry_point.load()
            provider = provider_factory()
        except Exception as exc:  # pragma: no cover - defensive for third-party plugins
            warnings.warn(f"加载 cnmaps 数据提供者 {entry_point.name} 失败: {exc}")
            continue

        if provider is not None:
            return provider

    return None


def _load_provider_from_package_import():
    try:
        provider_module = import_module("cnmaps_data.provider")
        provider_factory = getattr(provider_module, "get_provider")
        return provider_factory()
    except Exception:
        return None


@lru_cache(maxsize=1)
def get_data_provider():
    """Return the active data provider for cnmaps."""

    provider = _load_provider_from_entry_points()
    if provider is not None:
        return provider

    provider = _load_provider_from_package_import()
    if provider is not None:
        return provider

    raise ImportError(
        "未找到可用的 cnmaps 数据提供者。请先安装官方数据包 `cnmaps-data`，"
        "或安装实现了 `cnmaps.data_providers` entry point 的第三方数据包。"
    )
