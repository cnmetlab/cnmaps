"""绘图类模块."""

from typing import Union

import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.path as mpath
import cartopy.crs as ccrs
import shapely.geometry as sgeom
from shapely.ops import transform
from geopandas import GeoDataFrame
from pyproj import Transformer

from .maps import MapPolygon, _get_geom

try:
    from cartopy.mpl.path import shapely_to_path as _shapely_to_path
except ImportError:
    _shapely_to_path = None
    from cartopy.mpl.patch import geos_to_path as _geos_to_path


def _transform_polygon(map_polygon, crs_from, crs_to):
    if crs_from == crs_to:
        return map_polygon
    is_mappolygon = isinstance(map_polygon, MapPolygon)
    geom = _get_geom(map_polygon)
    transformer = Transformer.from_crs(crs_from, crs_to, always_xy=True)
    result = transform(transformer.transform, geom)
    if is_mappolygon and isinstance(result, (sgeom.MultiPolygon, sgeom.Polygon)):
        return MapPolygon(result)
    return result


def _iter_geoms(map_polygon):
    """Yield native geometries from a MapPolygon, list, or GeoDataFrame."""
    if isinstance(map_polygon, GeoDataFrame):
        for geom in map_polygon.geometry:
            yield from _iter_geoms(geom)
        return

    if isinstance(map_polygon, list):
        for geom in map_polygon:
            yield from _iter_geoms(geom)
        return

    geom = _get_geom(map_polygon)
    if geom is not None:
        yield geom


def _clip_geoms_by_extent(geoms, extent=None):
    if extent is None:
        return [geom for geom in geoms if geom is not None and not geom.is_empty]

    left, right, lower, upper = extent
    bbox = sgeom.box(left, lower, right, upper)
    clipped_geoms = []
    for geom in geoms:
        if geom is None or geom.is_empty:
            continue
        clipped = geom.intersection(bbox)
        if clipped is None or clipped.is_empty:
            continue
        clipped_geoms.append(clipped)
    return clipped_geoms


def _geom_to_path(geom):
    """Convert a Shapely geometry to a Matplotlib path across Cartopy versions."""
    if _shapely_to_path is not None:
        return _shapely_to_path(geom)

    paths = _geos_to_path(geom)
    return mpath.Path.make_compound_path(*paths)


def _make_clip_path(map_polygon, ax=None, extent=None):
    if ax is None:
        ax = plt.gca()

    geoms = [
        _get_geom(_transform_polygon(geom, ccrs.PlateCarree(), ax.projection))
        for geom in _iter_geoms(map_polygon)
    ]
    geoms = _clip_geoms_by_extent(geoms, extent=extent)
    paths = [_geom_to_path(geom) for geom in geoms]
    path = mpath.Path.make_compound_path(*paths)
    clip = mpatches.PathPatch(path, transform=ax.transData)

    return clip


def _set_extent_if_needed(ax, extent=None, set_extent=False):
    if set_extent and extent is not None:
        ax.set_extent(extent, crs=ccrs.PlateCarree())


def _set_clip_box_if_possible(artist, ax):
    if hasattr(artist, "set_clip_box"):
        artist.set_clip_box(ax.bbox)


def _resolve_streamplot_arrow_patches(streamplot, ax):
    arrow_patches = getattr(streamplot, "_cnmaps_arrow_patches", None)
    if arrow_patches is not None:
        return arrow_patches

    arrows = getattr(streamplot, "arrows", None)
    arrow_count = len(arrows.get_paths()) if arrows is not None else 0
    if arrow_count <= 0:
        return []

    candidates = [patch for patch in ax.patches if isinstance(patch, mpatches.FancyArrowPatch)]
    if len(candidates) < arrow_count:
        return []

    arrow_patches = candidates[-arrow_count:]
    streamplot._cnmaps_arrow_patches = arrow_patches
    return arrow_patches


def _resolve_axes(artist=None, ax=None):
    if ax is not None:
        return ax

    artist_axes = getattr(artist, "axes", None)
    if artist_axes is not None:
        return artist_axes

    return plt.gca()


def clip_contours_by_map(contours, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.contour()` 或 `ax.contourf()` 生成的等值线对象。

    参数:
        contours: `ax.contour()` 或 `ax.contourf()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴；不传时优先从 artist 反查。
        extent (tuple, 可选): `(left, right, lower, upper)`，可先按范围裁掉几何再制作裁剪路径。
        set_extent (bool, 可选): 是否同时对 `ax` 调用 `set_extent(extent, ...)`。
    """
    ax = _resolve_axes(contours, ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    collections = getattr(contours, "collections", None)
    if collections is None:
        contours.set_clip_path(clip)
        _set_clip_box_if_possible(contours, ax)
        return

    for contour in collections:
        contour.set_clip_path(clip)
        _set_clip_box_if_possible(contour, ax)


def clip_pcolormesh_by_map(mesh, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.pcolormesh()` 返回的网格对象。

    参数:
        mesh: `ax.pcolormesh()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
        set_extent (bool, 可选): 是否同步设置坐标轴范围。
    """
    ax = _resolve_axes(mesh, ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    mesh.set_clip_path(clip)
    _set_clip_box_if_possible(mesh, ax)


def clip_imshow_by_map(image, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.imshow()` 返回的图像对象。

    参数:
        image: `ax.imshow()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
        set_extent (bool, 可选): 是否同步设置坐标轴范围。
    """
    ax = _resolve_axes(image, ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    image.set_clip_path(clip)
    _set_clip_box_if_possible(image, ax)


def clip_quiver_by_map(quiver, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.quiver()` 返回的箭矢对象。

    参数:
        quiver: `ax.quiver()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
        set_extent (bool, 可选): 是否同步设置坐标轴范围。
    """
    ax = _resolve_axes(quiver, ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    quiver.set_clip_path(clip)
    _set_clip_box_if_possible(quiver, ax)


def clip_scatter_by_map(scatter, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.scatter()` 返回的散点对象。

    参数:
        scatter: `ax.scatter()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
        set_extent (bool, 可选): 是否同步设置坐标轴范围。
    """
    ax = _resolve_axes(scatter, ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    scatter.set_clip_path(clip)
    _set_clip_box_if_possible(scatter, ax)


def clip_streamplot_by_map(streamplot, map_polygon: MapPolygon, ax=None, extent=None, set_extent=False):
    """
    使用边界几何裁剪 `ax.streamplot()` 返回的流线对象。

    参数:
        streamplot: `ax.streamplot()` 的返回对象。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
        set_extent (bool, 可选): 是否同步设置坐标轴范围。
    """
    ax = _resolve_axes(getattr(streamplot, "lines", None), ax=ax)

    clip = _make_clip_path(map_polygon, ax=ax, extent=extent)
    _set_extent_if_needed(ax, extent=extent, set_extent=set_extent)

    lines = getattr(streamplot, "lines", None)
    arrows = getattr(streamplot, "arrows", None)

    if lines is not None:
        lines.set_clip_path(clip)
        _set_clip_box_if_possible(lines, ax)

    if arrows is not None:
        arrows.set_clip_path(clip)
        _set_clip_box_if_possible(arrows, ax)

    for arrow_patch in _resolve_streamplot_arrow_patches(streamplot, ax):
        arrow_patch.set_clip_path(clip)
        _set_clip_box_if_possible(arrow_patch, ax)


def clip_clabels_by_map(
    clabel_text: matplotlib.text.Text, map_polygon: MapPolygon, ax=None, extent=None
):
    """
    裁掉边界外的 contour label 文本，一般配合 `ax.clabel()` 使用。

    注意:
        该函数操作的是文本对象可见性，而不是 path 级别的真正裁剪。

    参数:
        clabel_text (list[matplotlib.text.Text]): `ax.clabel()` 返回的文本对象列表。
        map_polygon (MapPolygon): 地图边界对象。
        ax (GeoAxes, 可选): 目标坐标轴。
        extent (tuple, 可选): 可选裁剪范围。
    """
    artist = clabel_text[0] if clabel_text else None
    ax = _resolve_axes(artist, ax=ax)
    geoms = [
        _get_geom(_transform_polygon(geom, ccrs.PlateCarree(), ax.projection))
        for geom in _iter_geoms(map_polygon)
    ]
    geoms = _clip_geoms_by_extent(geoms, extent=extent)
    if not geoms:
        return

    if len(geoms) == 1:
        map_polygon = geoms[0]
    else:
        map_polygon = sgeom.GeometryCollection(geoms)

    for cbt in clabel_text:
        point = sgeom.Point(cbt.get_position())
        if not map_polygon.contains(point):
            cbt.set_visible(False)


def draw_map(map_polygon: Union[MapPolygon, sgeom.MultiLineString], ax=None, **kwargs):
    """
    在 Cartopy GeoAxes 上绘制单个边界几何。

    参数:
        map_polygon (MapPolygon | shapely geometry): 单个边界几何。
            常见输入包括 `MapPolygon`、`Polygon`、`MultiPolygon`、
            `LineString`、`MultiLineString`，或 `MapRecord.geometry`。
        ax (GeoAxes, 可选): 目标坐标轴；不传时使用当前坐标轴。
        **kwargs: 透传给 `ax.add_geometries(...)` 的绘图参数。

    说明:
        未显式传 `color` 时默认使用黑色边界线，且 `facecolor` 默认为 `none`。
    """
    if ax is None:
        ax = plt.gca()

    if "color" not in kwargs and "c" not in kwargs:
        kwargs["color"] = "k"
    geom = _get_geom(map_polygon)
    if geom is None or geom.is_empty:
        return

    autoscale = kwargs.pop("autoscale", True)
    color = kwargs.pop("c", kwargs.pop("color"))
    collection_kwargs = dict(kwargs)
    collection_kwargs.setdefault("edgecolor", color)
    collection_kwargs.setdefault("facecolor", "none")

    if isinstance(geom, sgeom.MultiPolygon):
        geoms = list(geom.geoms)
    elif isinstance(geom, sgeom.Polygon):
        geoms = [geom]
    elif isinstance(geom, sgeom.MultiLineString):
        geoms = list(geom.geoms)
    elif isinstance(geom, sgeom.LineString):
        geoms = [geom]
    else:
        return

    ax.add_geometries(geoms, ccrs.PlateCarree(), **collection_kwargs)

    if autoscale:
        projected_geom = _transform_polygon(map_polygon, ccrs.PlateCarree(), ax.projection)
        projected_geom = _get_geom(projected_geom)
        if projected_geom is not None and not projected_geom.is_empty:
            minx, miny, maxx, maxy = projected_geom.bounds
            ax.update_datalim(np.array([[minx, miny], [maxx, maxy]]))
            ax.autoscale_view()


def draw_maps(maps: Union[list, GeoDataFrame], ax=None, **kwargs):
    """
    绘制多个边界对象。

    参数:
        maps (list | GeoDataFrame | MapRecord | MapPolygon): 多个边界对象，
            可以是 `get_adm_maps` 返回的记录列表、`GeoDataFrame`、
            几何列表，或单个记录/单个几何。
        ax (GeoAxes, 可选): 目标坐标轴。
        **kwargs: 透传给 :func:`draw_map`。

    说明:
        当输入为记录列表或 `GeoDataFrame` 时，会自动提取其中的 `geometry` 字段。
    """
    if isinstance(maps, list):
        try:
            geometries = [m["geometry"] for m in maps]
        except TypeError:
            geometries = maps

    elif isinstance(maps, GeoDataFrame):
        geometries = [m["geometry"] for _, m in maps.iterrows()]
    else:
        geometries = [maps]

    for gm in geometries:
        draw_map(gm, ax=ax, **kwargs)


if __name__ == "__main__":
    pass
