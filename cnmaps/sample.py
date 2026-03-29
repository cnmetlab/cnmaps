"""样例数据模块."""

from functools import lru_cache

import netCDF4 as nc
import numpy as np

from .provider import get_data_provider

BASE_DATA_DIR = get_data_provider().get_dataset_root("sample")


@lru_cache(maxsize=3)
def _load_dataset_arrays(filename, data_var):
    ds = nc.Dataset(get_data_provider().get_sample_path(filename))
    lon = ds.variables["lon"][:]
    lat = ds.variables["lat"][:]
    lons, lats = np.meshgrid(lon, lat)
    data = ds.variables[data_var][:]
    return lons, lats, data


def load_dem():
    """
    加载海拔高度样例数据

    返回值:
        tuple: (lons, lats, data)
    """
    return _load_dataset_arrays("china-dem.nc", "dem")


def load_wind():
    """
    加载风矢样例数据

    返回值:
        tuple: (lons, lats, u, v)
    """
    lons, lats, u = _load_dataset_arrays("china-wind.nc", "u")
    _, _, v = _load_dataset_arrays("china-wind.nc", "v")
    return lons, lats, u, v


def load_temp():
    """
    加载气温样例数据

    返回值:
        tuple: (lons, lats, temp)
    """
    return _load_dataset_arrays("china-temp.nc", "temp")
