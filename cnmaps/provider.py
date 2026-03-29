"""Data-provider discovery and path resolution for cnmaps."""

from __future__ import annotations

import json
import os
import warnings
from dataclasses import dataclass
from functools import cached_property, lru_cache
from importlib import import_module
from importlib import metadata
from pathlib import Path


CNMAPS_DATA_PROVIDER_GROUP = "cnmaps.data_providers"
CNMAPS_DATA_DIR_ENV = "CNMAPS_DATA_DIR"

_LEGACY_DATASETS = {
    "administrative": {
        "index_db": "index.db",
        "root": os.path.join("geojson.min", "administrative"),
    },
    "geography": {
        "root": os.path.join("geojson.min", "geography"),
    },
    "sample": {
        "root": "sample",
    },
}


@dataclass(frozen=True)
class FileSystemDataProvider:
    """File-system backed data provider."""

    root_dir: Path
    manifest_path: Path | None = None
    name: str = "cnmaps-builtin-data"
    version: str = "builtin"

    @cached_property
    def manifest(self) -> dict:
        if self.manifest_path is None:
            return {}
        with self.manifest_path.open(encoding="utf-8") as f:
            return json.load(f)

    def _dataset_meta(self, dataset: str) -> dict:
        if self.manifest:
            return self.manifest["datasets"][dataset]
        return _LEGACY_DATASETS[dataset]

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


def _provider_from_legacy_root(root_dir: Path) -> FileSystemDataProvider | None:
    if not (root_dir / "index.db").exists():
        return None
    if not (root_dir / "geojson.min" / "administrative").exists():
        return None
    if not (root_dir / "sample").exists():
        return None
    return FileSystemDataProvider(root_dir=root_dir)


def _provider_from_candidate(candidate: Path | None) -> FileSystemDataProvider | None:
    if candidate is None:
        return None

    candidate = candidate.expanduser().resolve()
    if not candidate.exists():
        return None

    manifest_candidate = candidate / "manifest.json"
    if manifest_candidate.exists():
        return _provider_from_manifest_root(candidate)

    package_manifest_candidate = candidate / "cnmaps_data" / "manifest.json"
    if package_manifest_candidate.exists():
        return _provider_from_manifest_root(package_manifest_candidate.parent)

    if candidate.is_dir():
        return _provider_from_legacy_root(candidate)

    return None


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


def _load_provider_from_env() -> FileSystemDataProvider | None:
    env_dir = os.environ.get(CNMAPS_DATA_DIR_ENV)
    if not env_dir:
        return None
    return _provider_from_candidate(Path(env_dir))


def _load_provider_from_sibling_checkout() -> FileSystemDataProvider | None:
    repo_root = Path(__file__).resolve().parents[2]
    return _provider_from_candidate(repo_root / "cnmaps-data")


def _load_builtin_provider() -> FileSystemDataProvider:
    builtin_root = Path(__file__).resolve().parent / "data"
    provider = _provider_from_legacy_root(builtin_root)
    if provider is None:  # pragma: no cover - would indicate a broken package build
        raise FileNotFoundError(f"未找到内置 cnmaps 数据目录: {builtin_root}")
    return provider


@lru_cache(maxsize=1)
def get_data_provider():
    """Return the active data provider for cnmaps."""

    provider = _load_provider_from_env()
    if provider is not None:
        return provider

    provider = _load_provider_from_entry_points()
    if provider is not None:
        return provider

    provider = _load_provider_from_package_import()
    if provider is not None:
        return provider

    provider = _load_provider_from_sibling_checkout()
    if provider is not None:
        return provider

    return _load_builtin_provider()
