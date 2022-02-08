import os
import json

import matplotlib.pyplot as plt
from matplotlib.path import Path
from matplotlib.patches import PathPatch

import cartopy.crs as ccrs
from shapely.geometry import Polygon, Point
import netCDF4 as nc
import numpy as np

import matplotlib
import cartopy

print('matplotlib version', matplotlib.__version__)
print('cartopy version', cartopy.__version__)


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data', 'geojson.min')
NAME_MAPPING = {
    frozenset(['安徽', '安徽省', 'Anhui']): 'Anhui',
    frozenset(['北京', '北京市', 'Beijing']): 'Beijing',
    frozenset(['重庆', '重庆市', 'Chongqing']): 'Chongqing',
    frozenset(['福建', '福建省', 'Fujian']): 'Fujian',
    frozenset(['甘肃', '甘肃省', 'Gansu']): 'Gansu',
    frozenset(['广东', '广东省', 'Guangdong']): 'Guangdong',
    frozenset(['广西', '广西省', 'Guangxi']): 'Guangxi',
    frozenset(['贵州', '贵州省', 'Guizhou']): 'Guizhou',
    frozenset(['海南', '海南省', 'Hainan']): 'Hainan',
    frozenset(['河北', '河北省', 'Hebei']): 'Hebei',
    frozenset(['黑龙江', '黑龙江省', 'Heilongjiang']): 'Heilongjiang',
    frozenset(['河南', '河南省', 'Henan']): 'Henan',
    frozenset(['香港', '香港特别行政区', 'HongKong']): 'HongKong',
    frozenset(['湖北', '湖北省', 'Hubei']): 'Hubei',
    frozenset(['湖南', '湖南省', 'Hunan']): 'Hunan',
    frozenset(['内蒙古', '内蒙古自治区', 'InnerMongolia']): 'InnerMongolia',
    frozenset(['江苏', '江苏省', 'Jiangsu']): 'Jiangsu',
    frozenset(['江西', '江西省', 'Jiangxi']): 'Jiangxi',
    frozenset(['吉林', '吉林省', 'Jilin']): 'Jilin',
    frozenset(['辽宁', '辽宁省', 'Liaoning']): 'Liaoning',
    frozenset(['澳门', '澳门特别行政区','Macao']): 'Macao',
    frozenset(['九段线', '南海','MaritimeBoundary']): 'MaritimeBoundary',
    frozenset(['国界线', '中国', 'NationalBoundary']): 'NationalBoundary',
    frozenset(['宁夏', '宁夏回族自治区', 'Ningxia']): 'Ningxia',
    frozenset(['青海', '青海省', 'Qinghai']): 'Qinghai',
    frozenset(['陕西', '陕西省', 'Shaanxi']): 'Shaanxi',
    frozenset(['山东', '山东省', 'Shandong']): 'Shandong',
    frozenset(['上海', '上海市', 'Shanghai']): 'Shanghai',
    frozenset(['山西', '山西省', 'Shanxi']): 'Shanxi',
    frozenset(['四川', '四川省', 'Sichuan']): 'Sichuan',
    frozenset(['天津', '天津市', 'Tianjin']): 'Tianjin',
    frozenset(['西藏', '西藏自治区', 'Tibet']): 'Tibet',
    frozenset(['新疆', '新疆维吾尔自治区', 'Xinjiang']): 'Xinjiang',
    frozenset(['云南', '云南省', 'Yunnan']): 'Yunnan',
    frozenset(['浙江', '浙江省', 'Zhejiang']): 'Zhejiang',
    frozenset(['台湾', '台湾省', 'Taiwan']): 'Taiwan'
}


def get_coords(name='NationalBoundary'):
    for _key_set, prov_name in NAME_MAPPING.items():
        if name in _key_set:
            break
    else:
        raise Exception('未找到指定省市名称')

    fp = os.path.join(DATA_DIR, f'{prov_name}.geojson')
    with open(fp) as f:
        nb_json = json.load(f)
    polygons = []
    for _coords in nb_json['geometry']['coordinates']:
        for __coords in _coords:
            coords = __coords
            polygons.append(coords)

    return polygons


def clip_contours_by_polygons(cs, polygons: list):
    vertices = []
    codes = []
    ax = plt.gca()
    for coords in polygons:
        prt = len(coords)
        for coord in coords:
            try:
                trans_coord = ax.projection.transform_point(
                    *coord, src_crs=ccrs.PlateCarree())
            except AttributeError:
                trans_coord = coord
            vertices.append(trans_coord)
        codes += [Path.MOVETO]
        codes += [Path.LINETO] * (prt - 2)
        codes += [Path.CLOSEPOLY]
        clip = Path(vertices, codes)
        clip = PathPatch(clip, transform=ax.transData)

        for contour in cs.collections:
            contour.set_clip_path(clip)


def clip_clabels_by_polygons(clb, polygons):
    vertices = []
    ax = plt.gca()
    
    for cb in clb:
        cb.set_visible(False)
    
    for coords in polygons:
        for coord in coords:
            try:
                trans_coord = ax.projection.transform_point(*coord, src_crs=ccrs.PlateCarree())
            except AttributeError:
                trans_coord = coord
            vertices.append(trans_coord)

        polygon = Polygon(vertices)
    
        for cb in clb:
            if polygon.contains(Point(cb.get_position())):
                cb.set_visible(True)


def draw_polygons(polygons: list, **kwargs):
    ax = plt.gca()
    for coords in polygons:
        xs = []
        ys = []
        prt = len(coords)
        for coord in coords:
            try:
                x, y = ax.projection.transform_point(
                    *coord, src_crs=ccrs.PlateCarree())
            except AttributeError:
                x, y = coord
            xs.append(x)
            ys.append(y)
        ax.plot(xs, ys, **kwargs)

if __name__ == '__main__':
    ds = nc.Dataset('../ASTGTMV003_cldasgrid_dem.nc')
    
    lon = np.arange(70,140.0, 0.01)[::20]
    lat = ds.variables['lat'][::20]
    lons, lats = np.meshgrid(lon, lat)

    dem = ds.variables['elevation'][::20,::20]

    for name in NAME_MAPPING.values():
        print('name',name)
        polygons = get_coords(name)
        
        fig = plt.figure(figsize=(20,20))
        ax = fig.add_subplot(1, 1, 1, projection=ccrs.Miller())
        cs = ax.contourf(lons, lats, dem,levels=np.linspace(-2800, dem.max(), 20), 
                        cmap=plt.cm.terrain, transform=ccrs.PlateCarree())

        clip_contours_by_polygons(cs, polygons)
        draw_polygons(polygons, color='k', linewidth=1.5)

        cs2 = ax.contour(lons, lats, dem, levels=np.linspace(-2800, dem.max(), 4), 
                        colors='k', transform=ccrs.PlateCarree())
        clb = ax.clabel(cs2, cs2.levels, inline=True, fontsize=10)
        clip_contours_by_polygons(cs2, polygons)
        if clb:
            clip_clabels_by_polygons(clb, polygons)
        else:
            print('no clb', clb)

        ax.coastlines()

        savefp = f'./result/{name}.png'
        os.makedirs(os.path.dirname(savefp), exist_ok=True)

        plt.savefig(savefp, bbox_inches='tight')
        
        plt.close()