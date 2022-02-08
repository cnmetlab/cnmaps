import os
import json
import warnings
from typing import Union

import matplotlib.pyplot as plt
from matplotlib.path import Path
from matplotlib.patches import PathPatch

import cartopy
import cartopy.crs as ccrs
from shapely.geometry import (
    Polygon, Point, MultiPolygon, LineString, MultiLineString)


if int(cartopy.__version__.split('.')[1]) < 19:
    warnings.warn(
        f'由于Cartopy的版本低于0.19.0, 因此clip_clabels_by_polygons函数将无法使用，'
        '其他函数不受影响，若需要使用clip_clabels_by_polygons函数，'
        '请将Cartopy的版本升级到0.19.0及以上')


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data', 'geojson.min')
NAMES = {
    ('安徽', '安徽省', 'Anhui'): 'Anhui',
    ('北京', '北京市', 'Beijing'): 'Beijing',
    ('重庆', '重庆市', 'Chongqing'): 'Chongqing',
    ('福建', '福建省', 'Fujian'): 'Fujian',
    ('甘肃', '甘肃省', 'Gansu'): 'Gansu',
    ('广东', '广东省', 'Guangdong'): 'Guangdong',
    ('广西', '广西省', 'Guangxi'): 'Guangxi',
    ('贵州', '贵州省', 'Guizhou'): 'Guizhou',
    ('海南', '海南省', 'Hainan'): 'Hainan',
    ('河北', '河北省', 'Hebei'): 'Hebei',
    ('黑龙江', '黑龙江省', 'Heilongjiang'): 'Heilongjiang',
    ('河南', '河南省', 'Henan'): 'Henan',
    ('香港', '香港特别行政区', 'HongKong'): 'HongKong',
    ('湖北', '湖北省', 'Hubei'): 'Hubei',
    ('湖南', '湖南省', 'Hunan'): 'Hunan',
    ('内蒙古', '内蒙古自治区', 'InnerMongolia'): 'InnerMongolia',
    ('江苏', '江苏省', 'Jiangsu'): 'Jiangsu',
    ('江西', '江西省', 'Jiangxi'): 'Jiangxi',
    ('吉林', '吉林省', 'Jilin'): 'Jilin',
    ('辽宁', '辽宁省', 'Liaoning'): 'Liaoning',
    ('澳门', '澳门特别行政区', 'Macao'): 'Macao',
    ('南海', '九段线', 'MaritimeBoundary'): 'MaritimeBoundary',
    ('中国', '简版陆地国界线',  'ChinaLand'): 'ChinaLand',
    ('宁夏', '宁夏回族自治区', 'Ningxia'): 'Ningxia',
    ('青海', '青海省', 'Qinghai'): 'Qinghai',
    ('陕西', '陕西省', 'Shaanxi'): 'Shaanxi',
    ('山东', '山东省', 'Shandong'): 'Shandong',
    ('上海', '上海市', 'Shanghai'): 'Shanghai',
    ('山西', '山西省', 'Shanxi'): 'Shanxi',
    ('四川', '四川省', 'Sichuan'): 'Sichuan',
    ('天津', '天津市', 'Tianjin'): 'Tianjin',
    ('西藏', '西藏自治区', 'Tibet'): 'Tibet',
    ('新疆', '新疆维吾尔自治区', 'Xinjiang'): 'Xinjiang',
    ('云南', '云南省', 'Yunnan'): 'Yunnan',
    ('浙江', '浙江省', 'Zhejiang'): 'Zhejiang',
    ('台湾', '台湾省', 'Taiwan'): 'Taiwan'
}


class PuzzlePolygon(MultiPolygon):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __add__(self, other):
        union_result = self.union(other)
        if isinstance(union_result, Polygon):
            return PuzzlePolygon([union_result])
        elif isinstance(union_result, MultiPolygon):
            return PuzzlePolygon(union_result)


def get_map(name='NationalBoundary', interval=1):
    if name == '中国2':
        # 这里使用现场拼图的方式生成全中国地图，是因为在将shape对象进行序列化的时候，坐标点会出现不准的情况
        # 对于需要精密拼图的场景，就无法满足使用。
        provs = list(NAMES.values())
        provs.remove('MaritimeBoundary')
        provs.remove('ChinaLand')

        china = get_map('Anhui')

        for p in provs:
            china = china.union(get_map(p))

        # 针对陆地有一块缺失的补救方法
        patch = Polygon([[103.958663, 28.833736],
                         [103.461936, 24.504563],
                         [112.881352, 26.043558],
                         [110.029771, 33.003883]])
        china = china.union(patch)
        return china
    for _key_set, prov_name in NAMES.items():
        if name in _key_set:
            break
    else:
        raise Exception('未找到指定省市名称')

    fp = os.path.join(DATA_DIR, f'{prov_name}.geojson')
    with open(fp) as f:
        nb_json = json.load(f)
    polygon_list = []
    if 'Polygon' in nb_json['geometry']['type']:
        for _coords in nb_json['geometry']['coordinates']:
            for coords in _coords:
                icoords = coords[::interval]
                if icoords[0] != icoords[-1]:
                    icoords += icoords[0]
                polygon_list.append(Polygon(icoords))

        return PuzzlePolygon(polygon_list)

    elif nb_json['geometry']['type'] == 'MultiLineString':
        return MultiLineString(nb_json['geometry']['coordinates'])


def clip_contours_by_map(contours, map_polygon: MultiPolygon):
    vertices = []
    codes = []
    ax = plt.gca()

    for polygon in map_polygon:
        try:
            coords = polygon.boundary.coords
        except NotImplementedError:
            # 针对图形中出现了洞的情况的处理
            exterior_coords = polygon.exterior.coords
            interiors = polygon.interiors
            exterior_prt = len(exterior_coords)
            for coord in exterior_coords:
                try:
                    trans_coord = ax.projection.transform_point(
                        *coord, src_crs=ccrs.PlateCarree())
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            codes += [Path.MOVETO]
            codes += [Path.LINETO] * (exterior_prt - 2)
            codes += [Path.CLOSEPOLY]
            for interior in interiors:
                interior_coords = interior.coords
                interior_prt = len(interior_coords)
                for coord in interior_coords:
                    try:
                        trans_coord = ax.projection.transform_point(
                            *coord, src_crs=ccrs.PlateCarree())
                    except AttributeError:
                        trans_coord = coord
                    vertices.append(trans_coord)
                codes += [Path.MOVETO]
                codes += [Path.LINETO] * (interior_prt - 2)
                codes += [Path.CLOSEPOLY]

            clip = Path(vertices, codes)
        else:
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

        for contour in contours.collections:
            contour.set_clip_path(clip)


def clip_clabels_by_map(clabel_text, map_polygon: MultiPolygon):
    vertices = []
    ax = plt.gca()

    for cbt in clabel_text:
        cbt.set_visible(False)

    for polygon in map_polygon:
        coords = polygon.boundary.coords
        for coord in coords:
            try:
                trans_coord = ax.projection.transform_point(
                    *coord, src_crs=ccrs.PlateCarree())
            except AttributeError:
                trans_coord = coord
            vertices.append(trans_coord)

        _polygon = Polygon(vertices)

        for cbt in clabel_text:
            if _polygon.contains(Point(cbt.get_position())):
                cbt.set_visible(True)


def draw_map(_map: Union[MultiPolygon, MultiLineString], **kwargs):
    ax = plt.gca()
    for geomestry in _map:
        if isinstance(_map, MultiPolygon):
            try:
                coords = geomestry.boundary.coords
            except NotImplementedError:
                exterior_coords = geomestry.exterior.coords
                interiors = geomestry.interiors
                xs = []
                ys = []
                for coord in exterior_coords:
                    try:
                        x, y = ax.projection.transform_point(
                            *coord, src_crs=ccrs.PlateCarree())
                    except AttributeError:
                        x, y = coord
                    xs.append(x)
                    ys.append(y)

                ax.plot(xs, ys, **kwargs)
                for interior in interiors:
                    interior_coords = interior.coords
                    xs = []
                    ys = []
                    for coord in interior_coords:
                        try:
                            x, y = ax.projection.transform_point(
                                *coord, src_crs=ccrs.PlateCarree())
                        except AttributeError:
                            x, y = coord
                        xs.append(x)
                        ys.append(y)
                    ax.plot(xs, ys, **kwargs)
                continue
        elif isinstance(_map, MultiLineString):
            coords = geomestry.coords
        xs = []
        ys = []
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
    pass
