"""样例数据模块."""

from functools import lru_cache

import netCDF4 as nc
import numpy as np

from .provider import get_data_provider

BASE_DATA_DIR = get_data_provider().get_dataset_root("sample")


@lru_cache(maxsize=3)
def _load_dataset_arrays(filename, data_var, provider_name=None):
    ds = nc.Dataset(get_data_provider(provider_name).get_sample_path(filename))
    lon = ds.variables["lon"][:]
    lat = ds.variables["lat"][:]
    lons, lats = np.meshgrid(lon, lat)
    data = ds.variables[data_var][:]
    return lons, lats, data


def load_dem(provider: str = None):
    """
    加载海拔高度样例数据。

    Args:
        provider (str, optional): 数据提供者名称。默认为当前默认 provider。

    Returns:
        tuple[np.ndarray, np.ndarray, np.ndarray]:
            `(lons, lats, dem)` 二维网格经纬度与高程数据。
    """
    return _load_dataset_arrays("china-dem.nc", "dem", provider_name=provider)


def load_wind(provider: str = None):
    """
    加载风矢样例数据。

    Args:
        provider (str, optional): 数据提供者名称。默认为当前默认 provider。

    Returns:
        tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
            `(lons, lats, u, v)` 二维网格经纬度与风场分量。
    """
    lons, lats, u = _load_dataset_arrays("china-wind.nc", "u", provider_name=provider)
    _, _, v = _load_dataset_arrays("china-wind.nc", "v", provider_name=provider)
    return lons, lats, u, v


def load_temp(provider: str = None):
    """
    加载气温样例数据。

    Args:
        provider (str, optional): 数据提供者名称。默认为当前默认 provider。

    Returns:
        tuple[np.ndarray, np.ndarray, np.ndarray]:
            `(lons, lats, temp)` 二维网格经纬度与气温数据。
    """
    return _load_dataset_arrays("china-temp.nc", "temp", provider_name=provider)
