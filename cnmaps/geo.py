# The MIT License (MIT)

# Copyright (c) 2015 WangMing

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from math import sqrt, fabs, sin, atan2, cos

import numpy as np
from numba import jit


X_PI = np.pi * 3000.0 / 180.0
PI = np.pi  # π
SMA = 6378245.0  # 长半轴
EER = 0.00669342162296594323  # 偏心率平方


@jit(nopython=True)
def transform(lon: float, lat: float):
    lon -= 105
    lat -= 35

    nlat = (
        -100.0
        + 2.0 * lon
        + 3.0 * lat
        + 0.2 * lat * lat
        + 0.1 * lon * lat
        + 0.2 * sqrt(fabs(lon))
    )
    nlat += (20.0 * sin(6.0 * lon * PI) + 20.0 * sin(2.0 * lon * PI)) * 2.0 / 3.0
    nlat += (20.0 * sin(lat * PI) + 40.0 * sin(lat / 3.0 * PI)) * 2.0 / 3.0
    nlat += (160.0 * sin(lat / 12.0 * PI) + 320 * sin(lat * PI / 30.0)) * 2.0 / 3.0

    nlon = (
        300.0
        + lon
        + 2.0 * lat
        + 0.1 * lon * lon
        + 0.1 * lon * lat
        + 0.1 * sqrt(fabs(lon))
    )
    nlon += (20.0 * sin(6.0 * lon * PI) + 20.0 * sin(2.0 * lon * PI)) * 2.0 / 3.0
    nlon += (20.0 * sin(lon * PI) + 40.0 * sin(lon / 3.0 * PI)) * 2.0 / 3.0
    nlon += (150.0 * sin(lon / 12.0 * PI) + 300.0 * sin(lon / 30.0 * PI)) * 2.0 / 3.0

    return nlon, nlat


@jit(nopython=True)
def gcj02_to_bd09(lon: float, lat: float) -> tuple:
    """火星坐标系(GCJ-02)转百度坐标系(BD-09)

    Args:
        lon (float): 火星坐标经度
        lat (float): 火星坐标纬度

    Returns:
        tuple: 百度坐标 (经度, 纬度)
    """
    z = sqrt(lon * lon + lat * lat) + 0.00002 * sin(lat * X_PI)
    theta = atan2(lat, lon) + 0.000003 * cos(lon * X_PI)
    bd_lon = z * cos(theta) + 0.0065
    bd_lat = z * sin(theta) + 0.006
    return bd_lon, bd_lat


@jit(nopython=True)
def bd09_to_gcj02(lon: float, lat: float) -> tuple:
    """百度坐标系(BD-09)转火星坐标系(GCJ-02)

    Args:
        lon (float): 百度坐标经度
        lat (float): 百度坐标纬度

    Returns:
        tuple: 火星坐标 (经度, 纬度)
    """
    x = lon - 0.0065
    y = lat - 0.006
    z = sqrt(x * x + y * y) - 0.00002 * sin(y * X_PI)
    theta = atan2(y, x) - 0.000003 * cos(x * X_PI)
    gcj_lon = z * cos(theta)
    gcj_lat = z * sin(theta)
    return gcj_lon, gcj_lat


@jit(nopython=True)
def wgs84_to_gcj02(lon: float, lat: float) -> tuple:
    """WGS84转GCJ02(火星坐标系)

    Args:
        lon (float): WGS84 经度
        lat (float): WGS84 纬度

    Returns:
        tuple: 火星坐标系 （经度, 纬度）
    """
    dlon, dlat = transform(lon, lat)
    radlat = lat / 180.0 * PI
    magic = sin(radlat)
    magic = 1 - EER * magic * magic
    sqrtmagic = sqrt(magic)
    dlat = (dlat * 180.0) / ((SMA * (1 - EER)) / (magic * sqrtmagic) * PI)
    dlon = (dlon * 180.0) / (SMA / sqrtmagic * cos(radlat) * PI)

    gcj_lat = lat + dlat
    gcj_lon = lon + dlon

    return gcj_lon, gcj_lat


@jit(nopython=True)
def gcj02_to_wgs84(lon: float, lat: float) -> tuple:
    """GCJ02(火星坐标系)转 WGS84

    Args:
        lon (float): 火星坐标经度
        lat (float): 火星坐标纬度

    Returns:
        tuple: WGS84 （经度, 纬度）
    """

    dlon, dlat = transform(lon, lat)
    radlat = lat / 180.0 * PI
    magic = sin(radlat)
    magic = 1 - EER * magic * magic
    sqrtmagic = sqrt(magic)
    dlat = (dlat * 180.0) / ((SMA * (1 - EER)) / (magic * sqrtmagic) * PI)
    dlon = (dlon * 180.0) / (SMA / sqrtmagic * cos(radlat) * PI)
    mglat = lat + dlat
    mglon = lon + dlon

    new_lon = lon * 2 - mglon
    new_lat = lat * 2 - mglat

    return new_lon, new_lat


@jit(nopython=True)
def bd09_to_wgs84(lon: float, lat: float) -> tuple:
    """百度坐标转 WGS84

    Args:
        lon (float): 百度坐标经度
        lat (float): 百度坐标纬度

    Returns:
        tuple: WGS84 （经度, 纬度）
    """
    lon, lat = bd09_to_gcj02(lon, lat)
    return gcj02_to_wgs84(lon, lat)


@jit(nopython=True)
def wgs84_to_bd09(lon: float, lat: float) -> tuple:
    """WGS84 转百度坐标

    Args:
        lon (float): WGS84 经度
        lat (float): WGS84 纬度

    Returns:
        tuple: 百度坐标（经度, 纬度）
    """
    lon, lat = wgs84_to_gcj02(lon, lat)
    return gcj02_to_bd09(lon, lat)


if __name__ == "__main__":
    pass
