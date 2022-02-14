import os
import re
import json
import warnings
from typing import Union

import matplotlib
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.path as mpath

import cartopy
import cartopy.crs as ccrs
import shapely.geometry as sgeom

from .names import NAMES

CARTOPY_DIGIT_VERSION = re.match(r'(\d*\.\d*\.\d*)',
                                 cartopy.__version__).group(1)
if CARTOPY_DIGIT_VERSION < '0.19.0':
    warnings.warn(('由于Cartopy的版本低于0.19.0, '
                   '因此clip_clabels_by_polygons函数将无法使用, 其他函数不受影响, '
                   '若需要使用clip_clabels_by_polygons函数, '
                   '请将Cartopy的版本升级到0.19.0及以上.'))

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, 'data', 'geojson.min')


class MapNotFoundError(Exception):
    pass


class MapPolygon(sgeom.MultiPolygon):
    """地图多边形类, 该是基于shapely.geometry.MultiPolygon的自定义类, 并实现了对于加号操作符的支持"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __add__(self, other):
        return self.union(other)

    def __and__(self, other):
        return self.intersection(other)

    def __sub__(self, other):
        return self.difference(other)

    def union(self, other):
        union_result = super().union(other)
        if isinstance(union_result, sgeom.Polygon):
            return MapPolygon([union_result])
        elif isinstance(union_result, sgeom.MultiPolygon):
            return MapPolygon(union_result)

    def difference(self, other):
        difference_result = super().difference(other)
        if isinstance(difference_result, sgeom.Polygon):
            return MapPolygon([difference_result])
        elif isinstance(difference_result, sgeom.MultiPolygon):
            return MapPolygon(difference_result)

    def intersection(self, other):
        intersection_result = super().intersection(other)
        if isinstance(intersection_result, sgeom.Polygon):
            return MapPolygon([intersection_result])
        elif isinstance(intersection_result, sgeom.MultiPolygon):
            return MapPolygon(intersection_result)
        else:
            return MapPolygon()

    def get_extent(self, buffer=2):
        """获取范围坐标

        参数:
            buffer (int, 可选): 外扩缓冲边缘, 单位为°, 该值越大, 所取的范围越大. 默认为 2.

        返回值:
            tuple: 坐标范围点, 该值可直接传入ax.set_extent使用
        """
        left, lower, right, upper = self.buffer(buffer).bounds
        return (left, right, lower, upper)


def get_map(source='中国', map_set='default'):
    """根据名称读取地图

    参数:
        source (str, 可选): 地图名称. 默认为 '中国'.
        map_set (str, 可选): 地图集名称. 默认为 'default'.

    异常:
        MapNotFoundError: 地图未找到

    返回值:
        MapPolygon: 地图边界对象
    """
    for _key_set, prov_name in NAMES[map_set].items():
        if source in _key_set:
            fp = os.path.join(BASE_DATA_DIR, map_set, f'{prov_name}.geojson')
            break
    else:
        if os.path.exists(source):
            fp = source
        else:
            raise MapNotFoundError(f'未找到指定地图: {source}')

    with open(fp) as f:
        map_json = json.load(f)
    polygon_list = []
    if 'Polygon' in map_json['geometry']['type']:
        for _coords in map_json['geometry']['coordinates']:
            for coords in _coords:
                polygon_list.append(sgeom.Polygon(coords))

        return MapPolygon(polygon_list)

    elif map_json['geometry']['type'] == 'MultiLineString':
        return sgeom.MultiLineString(map_json['geometry']['coordinates'])


def clip_contours_by_map(contours, map_polygon: sgeom.MultiPolygon):
    """使用地图边界对象对等值线对象进行裁剪

    参数:
        contours (cartopy.mpl.contour.GeoContourSet): 等值线对象, 该对象是调用ax.contour()或ax.contourf()方法的返回值
                                                      注意: 对象须带有投影信息
        map_polygon (sgeom.MultiPolygon): 地图边界对象, 可以通过get_map()获取
    """
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
            codes += [mpath.Path.MOVETO]
            codes += [mpath.Path.LINETO] * (exterior_prt - 2)
            codes += [mpath.Path.CLOSEPOLY]
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
                codes += [mpath.Path.MOVETO]
                codes += [mpath.Path.LINETO] * (interior_prt - 2)
                codes += [mpath.Path.CLOSEPOLY]

            clip = mpath.Path(vertices, codes)
        else:
            prt = len(coords)
            for coord in coords:
                try:
                    trans_coord = ax.projection.transform_point(
                        *coord, src_crs=ccrs.PlateCarree())
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            codes += [mpath.Path.MOVETO]
            codes += [mpath.Path.LINETO] * (prt - 2)
            codes += [mpath.Path.CLOSEPOLY]
            clip = mpath.Path(vertices, codes)
        clip = mpatches.PathPatch(clip, transform=ax.transData)

        for contour in contours.collections:
            contour.set_clip_path(clip)


def clip_pcolormesh_by_map(mesh, map_polygon: MapPolygon):
    """使用地图边界对象对填色网格线对象进行裁剪

    参数:
        contours (cartopy.mpl.contour.GeoContourSet): GeoQuadMesh对象, 该对象是调用ax.pcolormesh()方法的返回值
                                                      注意: 对象须带有投影信息
        map_polygon (sgeom.MultiPolygon): 地图边界对象, 可以通过get_map()获取
    """
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
            codes += [mpath.Path.MOVETO]
            codes += [mpath.Path.LINETO] * (exterior_prt - 2)
            codes += [mpath.Path.CLOSEPOLY]
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
                codes += [mpath.Path.MOVETO]
                codes += [mpath.Path.LINETO] * (interior_prt - 2)
                codes += [mpath.Path.CLOSEPOLY]

            clip = mpath.Path(vertices, codes)
        else:
            prt = len(coords)
            for coord in coords:
                try:
                    trans_coord = ax.projection.transform_point(
                        *coord, src_crs=ccrs.PlateCarree())
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            codes += [mpath.Path.MOVETO]
            codes += [mpath.Path.LINETO] * (prt - 2)
            codes += [mpath.Path.CLOSEPOLY]
            clip = mpath.Path(vertices, codes)
        clip = mpatches.PathPatch(clip, transform=ax.transData)

        mesh.set_clip_path(clip)


def clip_clabels_by_map(clabel_text: matplotlib.text.Text,
                        map_polygon: MapPolygon):
    """剪切clabel文本, 一般配合contour函数使用

    注意: 该函数仅对于cartopy>=0.19.0版本有效

    参数:
        clabel_text (matplotlib.text.Text): matplotlib.text.Text对象, 由clabel函数返回
        map_polygon (MapPolygon): 地图多边形边界对象
    """
    ax = plt.gca()

    for cbt in clabel_text:
        cbt.set_visible(False)

    for polygon in map_polygon:
        vertices = []
        try:
            coords = polygon.boundary.coords
        except NotImplementedError:
            holes = []
            # 针对图形中出现了洞的情况的处理
            exterior_coords = polygon.exterior.coords
            interiors = polygon.interiors
            for coord in exterior_coords:
                try:
                    trans_coord = ax.projection.transform_point(
                        *coord, src_crs=ccrs.PlateCarree())
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            for interior in interiors:
                hole = []
                interior_coords = interior.coords
                for coord in interior_coords:
                    try:
                        trans_coord = ax.projection.transform_point(
                            *coord, src_crs=ccrs.PlateCarree())
                    except AttributeError:
                        trans_coord = coord
                    hole.append(trans_coord)
                holes.append(hole)
            _polygon = sgeom.Polygon(vertices, holes=holes)
        else:
            for coord in coords:
                try:
                    trans_coord = ax.projection.transform_point(
                        *coord, src_crs=ccrs.PlateCarree())
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)

            _polygon = sgeom.Polygon(vertices)

        for cbt in clabel_text:
            if _polygon.contains(sgeom.Point(cbt.get_position())):
                cbt.set_visible(True)


def draw_map(_map: Union[MapPolygon, sgeom.MultiPolygon,
                         sgeom.MultiLineString], **kwargs):
    """绘制地图边界线

    参数:
        _map (Union[MapPolygon, sgeom.MultiPolygon, sgeom.MultiLineString]): 地图边界线对象
    """
    ax = plt.gca()
    for geomestry in _map:
        if isinstance(_map, sgeom.MultiPolygon):
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
        elif isinstance(_map, sgeom.MultiLineString):
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
