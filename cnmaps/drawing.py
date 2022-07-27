"""绘图类模块."""

from typing import Union

import matplotlib
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.path as mpath
import cartopy.crs as ccrs
import shapely.geometry as sgeom
from geopandas import GeoDataFrame
from pyproj import Transformer

from .maps import MapPolygon


def _make_clip_path(map_polygon):
    vertices = []
    codes = []
    ax = plt.gca()
    clips = []
    crs = ccrs.PlateCarree()
    transformer = Transformer.from_crs(crs, ax.projection, always_xy=True)

    for polygon in map_polygon.geoms:
        try:
            coords = polygon.boundary.coords
        except NotImplementedError:
            # 针对图形中出现了洞的情况的处理
            exterior_coords = polygon.exterior.coords
            interiors = polygon.interiors
            exterior_prt = len(exterior_coords)
            for coord in exterior_coords:
                try:
                    trans_coord = transformer.transform(*coord)
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
                        trans_coord = transformer.transform(*coord)
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
                    trans_coord = transformer.transform(*coord)
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            codes += [mpath.Path.MOVETO]
            codes += [mpath.Path.LINETO] * (prt - 2)
            codes += [mpath.Path.CLOSEPOLY]
            clip = mpath.Path(vertices, codes)
        clip = mpatches.PathPatch(clip, transform=ax.transData)

        clips.append(clip)

    return clips


def clip_contours_by_map(contours, map_polygon: MapPolygon):
    """
    使用地图边界对象对等值线对象进行裁剪

    参数:
        contours (cartopy.mpl.contour.GeoContourSet): 等值线对象,
                    该对象是调用ax.contour()或ax.contourf()方法的返回值
                    注意: 对象须带有投影信息
        map_polygon (MapPolygon): 地图边界对象, 可以通过get_map()获取

    示例:
        >>> from cnmaps import get_adm_maps, clip_contours_by_map, draw_map
        >>> from cnmaps.sample import load_dem

        >>> lons, lats, data = load_dem()

        >>> fig = plt.figure(figsize=(10, 10))
        >>> ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        >>> map_polygon = get_adm_maps(country='中华人民共和国', record='first',
            only_polygon=True)

        >>> cs = ax.contourf(lons,
                             lats,
                             data,
                             cmap=plt.cm.terrain,
                             levels=np.linspace(-2800, data.max(), 10),
                             transform=ccrs.PlateCarree())

        >>> clip_contours_by_map(cs, map_polygon)
        >>> draw_map(map_polygon, color='k', linewidth=1)
    """
    clips = _make_clip_path(map_polygon)

    for clip in clips:
        for contour in contours.collections:
            contour.set_clip_path(clip)


def clip_pcolormesh_by_map(mesh, map_polygon: MapPolygon):
    """
    使用地图边界对象对填色网格线对象进行裁剪

    参数:
        mesh (cartopy.mpl.geocollection.GeoQuadMesh): GeoQuadMesh对象,
                                                      该对象是调用ax.pcolormesh()方法的返回值
                                                      注意: 对象须带有投影信息
        map_polygon (MapPolygon): 地图边界对象, 可以通过get_map()获取

    示例:
    >>> from cnmaps import get_adm_maps, clip_pcolormesh_by_map, draw_map
    >>> from cnmaps.sample import load_dem

    >>> lons, lats, data = load_dem()

    >>> fig = plt.figure(figsize=(10, 10))
    >>> ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    >>> map_polygon = get_adm_maps(
        country='中华人民共和国', record='first', only_polygon=True)

    >>> mesh = ax.pcolormesh(lons,
                             lats,
                             data,
                             cmap=plt.cm.terrain,
                             transform=ccrs.PlateCarree())

    >>> clip_pcolormesh_by_map(mesh, map_polygon)
    >>> draw_map(map_polygon, linewidth=1)
    """
    clips = _make_clip_path(map_polygon)

    for clip in clips:
        mesh.set_clip_path(clip)


def clip_clabels_by_map(clabel_text: matplotlib.text.Text, map_polygon: MapPolygon):
    """
    剪切clabel文本, 一般配合contour函数使用

    注意: 该函数仅对于cartopy>=0.19.0版本有效

    参数:
        clabel_text (matplotlib.text.Text): matplotlib.text.Text对象, 由clabel函数返回
        map_polygon (MapPolygon): 地图多边形边界对象

    示例:
    >>> from cnmaps import (
        get_adm_maps,
        clip_clabels_by_map,
        clip_contours_by_map,
        draw_map)
    >>> from cnmaps.sample import load_dem

    >>> lons, lats, data = load_dem()

    >>> map_polygon = get_adm_maps(
        country='中华人民共和国', record='first', only_polygon=True)
    >>> fig = plt.figure(figsize=(10, 10))
    >>> ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    >>> contours = ax.contour(lons,
                              lats,
                              data,
                              cmap=plt.cm.terrain,
                              levels=np.linspace(-2500, data.max(), 20),
                              transform=ccrs.PlateCarree())
    >>> clip_contours_by_map(contours, map_polygon)
    >>> clabels = ax.clabel(contours,
                            levels=contours.levels,
                            colors='k',
                            fmt='%i',
                            inline=True)
    >>> clip_clabels_by_map(clabels, map_polygon)
    >>> draw_map(map_polygon, color='k')
    """
    ax = plt.gca()
    crs = ccrs.PlateCarree()
    transformer = Transformer.from_crs(crs, ax.projection, always_xy=True)

    for cbt in clabel_text:
        cbt.set_visible(False)

    for polygon in map_polygon.geoms:
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
                    trans_coord = transformer.transform(*coord)
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)
            for interior in interiors:
                hole = []
                interior_coords = interior.coords
                for coord in interior_coords:
                    try:
                        trans_coord = transformer.transform(*coord)
                    except AttributeError:
                        trans_coord = coord
                    hole.append(trans_coord)
                holes.append(hole)
            _polygon = sgeom.Polygon(vertices, holes=holes)
        else:
            for coord in coords:
                try:
                    trans_coord = transformer.transform(*coord)
                except AttributeError:
                    trans_coord = coord
                vertices.append(trans_coord)

            _polygon = sgeom.Polygon(vertices)

        for cbt in clabel_text:
            if _polygon.contains(sgeom.Point(cbt.get_position())):
                cbt.set_visible(True)


def draw_map(map_polygon: Union[MapPolygon, sgeom.MultiLineString], **kwargs):
    """
    绘制单个地图边界线

    参数:
        map_polygon (Union[MapPolygon,  sgeom.MultiLineString]): 地图边界线对象

    示例:
        >>> beijing = get_adm_maps(city='北京市', level='市')[0]
        >>> beijing
        {'国家': '中华人民共和国', '省/直辖市': '北京市', '市': '北京市', '区/县': None, '级别': '市', '来源': '高德', '类型': '陆地', 'geometry': <cnmaps.maps.MapPolygon object at 0x7f92fe514490>}

        >>> beijing_polygon = get_adm_maps(city='北京市', level='市')[0]['geometry']
        >>> beijing_polygon
        <cnmaps.maps.MapPolygon object at 0x7f92fe4fe410>

        >>> draw_map(beijing_polygon)

        >>> get_adm_maps(city='北京市', level='市')[0]['geometry'] == get_adm_maps(city='北京市', level='市', only_polygon=True, record='first')
        True
        >>> draw_map(get_adm_maps(city='北京市', level='市', only_polygon=True, record='first'))
    """
    ax = plt.gca()
    crs = ccrs.PlateCarree()
    transformer = Transformer.from_crs(crs, ax.projection, always_xy=True)
    for geometry in map_polygon.geoms:
        if isinstance(map_polygon, sgeom.MultiPolygon):
            try:
                coords = geometry.boundary.coords
            except NotImplementedError:
                exterior_coords = geometry.exterior.coords
                interiors = geometry.interiors
                xs = []
                ys = []
                for coord in exterior_coords:
                    try:
                        x, y = transformer.transform(*coord)
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
                            x, y = transformer.transform(*coord)
                        except AttributeError:
                            x, y = coord
                        xs.append(x)
                        ys.append(y)
                    ax.plot(xs, ys, **kwargs)
                continue
        elif isinstance(map_polygon, sgeom.MultiLineString):
            coords = geometry.coords
        xs = []
        ys = []
        for coord in coords:
            try:
                x, y = transformer.transform(*coord)
            except AttributeError:
                x, y = coord
            xs.append(x)
            ys.append(y)
        if kwargs.get("color"):
            ax.plot(xs, ys, **kwargs)
        else:
            ax.plot(xs, ys, color="k", **kwargs)


def draw_maps(maps: Union[list, GeoDataFrame], **kwargs):
    """
    绘制多个地图边界

    参数:
        maps (Union[list, GeoDataFrame]): 地图边界列表或GeoDataFrame对象

    示例:
        >>> from cnmaps import get_adm_maps, draw_maps
        >>> maps = get_adm_maps(city='北京市', level='区县')
        >>> maps[:3]
        [{'国家': '中华人民共和国', '省/直辖市': '北京市', '市': '北京市', '区/县': '东城区', '级别': '区县', '来源': '高德', '类型': '陆地', 'geometry': <cnmaps.maps.MapPolygon object at 0x7f92fe4676d0>}, {'国家': '中华人民共和国', '省/直辖市': '北京市', '市': '北京市', '区/县': '西城区', '级别': '区县', '来源': '高德', '类型': '陆地', 'geometry': <cnmaps.maps.MapPolygon object at 0x7f92fe467a50>}, {'国家': '中华人民共和国', '省/直辖市': '北京市', '市': '北京市', '区/县': '朝阳区', '级别': '区县', '来源': '高德', '类型': '陆地', 'geometry': <cnmaps.maps.MapPolygon object at 0x7f92fe467750>}]
        >>> draw_maps(map)

        >>> from cnmaps import get_adm_maps, draw_maps
        >>> maps = get_adm_maps(city='北京市', level='区县', engine='geopandas')
        >>> maps[:3]
                国家 省/直辖市    市  区/县  级别  来源  类型                                           geometry
        0  中华人民共和国   北京市  北京市  东城区  区县  高德  陆地  MULTIPOLYGON (((116.44364 39.87285, 116.44359 ...
        1  中华人民共和国   北京市  北京市  西城区  区县  高德  陆地  MULTIPOLYGON (((116.38091 39.97272, 116.38114 ...
        2  中华人民共和国   北京市  北京市  朝阳区  区县  高德  陆地  MULTIPOLYGON (((116.55172 40.05812, 116.55132 ...
    """
    if isinstance(maps, list):
        geometries = [m["geometry"] for m in maps]
    elif isinstance(maps, GeoDataFrame):
        geometries = [m["geometry"] for _, m in maps.iterrows()]

    for gm in geometries:
        draw_map(gm, **kwargs)


if __name__ == "__main__":
    pass
