import os

import netCDF4 as nc
import numpy as np

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, 'data', 'sample')


def load_dem(area_name=None):
    """加载海拔高度样例数据

    参数:
        area_name (str, 可选): 区域名称, 若为None则取全国. 默认为 None.

    返回值:
        tuple: (lons, lats, data)
    """
    SUB_AREA = {'京津冀': np.s_[95:149, 207:259]}
    ds = nc.Dataset(os.path.join(BASE_DATA_DIR, 'china_dem.nc'))
    lon = ds.variables['lon'][:]
    lat = ds.variables['lat'][:]
    lons, lats = np.meshgrid(lon, lat)
    if area_name:
        data = ds.variables['dem'][SUB_AREA[area_name]]
        lons = lons[SUB_AREA[area_name]]
        lats = lats[SUB_AREA[area_name]]
    else:
        data = ds.variables['dem'][:]

    return lons, lats, data
