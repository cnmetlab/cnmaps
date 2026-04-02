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
DEFAULT_DATA_PROVIDER = "cnmaps-data"


@dataclass(frozen=True)
class FileSystemDataProvider:
    """文件系统型 `cnmaps` 数据提供者。

    该对象描述一个已安装数据包的根目录及其 `manifest.json` 元信息，
    用于解析行政区边界索引、GeoJSON 数据文件和样例数据文件。
    用户通常通过 :func:`get_data_provider` 获取该对象，而不是手动实例化。
    """

    root_dir: Path
    manifest_path: Path
    name: str
    version: str

    @cached_property
    def manifest(self) -> dict:
        """返回 provider 的 `manifest.json` 内容。"""
        with self.manifest_path.open(encoding="utf-8") as f:
            return json.load(f)

    def _dataset_meta(self, dataset: str) -> dict:
        return self.manifest["datasets"][dataset]

    def get_dataset_root(self, dataset: str) -> str:
        """返回指定数据集根目录的绝对路径。"""
        dataset_meta = self._dataset_meta(dataset)
        return str((self.root_dir / dataset_meta["root"]).resolve())

    def get_index_db(self, dataset: str = "administrative") -> str:
        """返回指定数据集索引数据库的绝对路径。"""
        dataset_meta = self._dataset_meta(dataset)
        index_db = dataset_meta.get("index_db")
        if index_db is None:
            raise KeyError(f"dataset {dataset!r} does not define index_db")
        return str((self.root_dir / index_db).resolve())

    def resolve_dataset_path(self, dataset: str, relative_path: str) -> str:
        """将数据集内相对路径解析为绝对路径。"""
        relative = Path(relative_path)
        relative_parts = relative.parts
        if relative_parts and relative_parts[0] == dataset:
            relative = Path(*relative_parts[1:])
        return str((Path(self.get_dataset_root(dataset)) / relative).resolve())

    def get_sample_path(self, filename: str) -> str:
        """返回样例数据文件的绝对路径。"""
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


def _load_provider_from_entry_point(entry_point):
    provider_factory = entry_point.load()
    return provider_factory()


def _iter_entry_points():
    entry_points = metadata.entry_points()
    if hasattr(entry_points, "select"):
        return entry_points.select(group=CNMAPS_DATA_PROVIDER_GROUP)
    return entry_points.get(CNMAPS_DATA_PROVIDER_GROUP, [])


def _load_provider_from_entry_points():
    for entry_point in _iter_entry_points():
        try:
            provider = _load_provider_from_entry_point(entry_point)
        except Exception as exc:  # pragma: no cover - defensive for third-party plugins
            warnings.warn(f"加载 cnmaps 数据提供者 {entry_point.name} 失败: {exc}")
            continue

        if provider is not None:
            yield provider


def _provider_name(provider) -> str:
    return str(getattr(provider, "name"))


def _load_provider_from_package_import():
    try:
        provider_module = import_module("cnmaps_data.provider")
        provider_factory = getattr(provider_module, "get_provider")
        return provider_factory()
    except Exception:
        return None


@lru_cache(maxsize=1)
def _discover_data_providers():
    providers = {}

    for provider in _load_provider_from_entry_points():
        name = _provider_name(provider)
        if name in providers:
            warnings.warn(f"发现重复的 cnmaps 数据提供者名称 {name!r}，将优先使用先加载的提供者")
            continue
        providers[name] = provider

    provider = _load_provider_from_package_import()
    if provider is not None:
        providers.setdefault(_provider_name(provider), provider)

    return providers


def get_available_data_providers():
    """返回当前环境中已发现的 `cnmaps` 数据提供者名称。

    Returns:
        tuple[str, ...]: provider 名称元组，按名称排序。
    """

    return tuple(sorted(_discover_data_providers()))


def get_data_provider(provider: str = None):
    """返回指定名称的数据提供者对象。

    Args:
        provider (str, optional): provider 名称。默认为官方 `cnmaps-data`。

    Returns:
        FileSystemDataProvider | object: 匹配到的 provider 对象。

    Raises:
        ImportError: 当前环境中未发现对应名称的 provider。
    """

    provider_name = provider or DEFAULT_DATA_PROVIDER
    providers = _discover_data_providers()
    matched_provider = providers.get(provider_name)
    if matched_provider is not None:
        return matched_provider

    raise ImportError(
        f"未找到名为 {provider_name!r} 的 cnmaps 数据提供者。"
        f" 当前已发现的 provider: {', '.join(get_available_data_providers()) or '无'}。"
        " 请先安装官方数据包 `cnmaps-data`，或安装实现了 "
        "`cnmaps.data_providers` entry point 的第三方数据包。"
    )
