import os

import netCDF4 as nc
import numpy as np

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, 'data', 'sample')


def load_dem():
    ds = nc.Dataset(os.path.join(BASE_DATA_DIR, 'china_dem.nc'))
    data = ds.variables['dem'][:]
    lon = ds.variables['lon'][:]
    lat = ds.variables['lat'][:]
    lons, lats = np.meshgrid(lon, lat)

    return lons, lats, data
