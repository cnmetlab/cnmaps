import os
import random
import uuid

import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
from matplotlib.patches import FancyArrowPatch

from cnmaps import (
    get_adm_maps,
    get_adm_names,
    clip_clabels_by_map,
    clip_contours_by_map,
    clip_streamplot_by_map,
    draw_map,
    draw_maps,
    clip_pcolormesh_by_map,
    clip_quiver_by_map,
    clip_scatter_by_map,
)
from cnmaps.sample import load_dem, load_temp, load_wind

provinces = get_adm_names(level="省")
cities = get_adm_names(level="市")
districts = get_adm_names(level="区县")
sample_districts = [random.choice(districts) for _ in range(100)]

map_args = [
    {
        "country": "中国",
        "level": "国",
        "only_polygon": True,
        "record": "first",
        "name": "中华人民共和国",
        "simplify": True,
    }
] + [
    {
        "province": p,
        "only_polygon": True,
        "record": "first",
        "name": p,
        "simplify": True,
    }
    for p in ["黑龙江省", "内蒙古自治区"]
]


def test_draw_maps():
    """测试多地图绘制功能"""
    map_args = (
        [{"country": "中国", "level": "国", "name": "中华人民共和国", "simplify": True}]
        + [{"level": "省", "name": "中华人民共和国-分省", "simplify": True}]
        + [{"country": "中国", "level": "国", "engine": "geopandas", "name": "中华人民共和国", "simplify": True}]
        + [
            {
                "level": "省",
                "engine": "geopandas",
                "name": "中华人民共和国-分省",
                "simplify": True,
            }
        ]
    )

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        draw_maps(map_polygon, linewidth=1)
        savefp = os.path.join("./tmp", "test_draw_maps", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_scatter():
    """测试剪切散点图."""

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        left, lower, right, upper = map_polygon.bounds

        lon = np.linspace(left, right, 50)
        lat = np.linspace(lower, upper, 50)

        _lons, _lats = np.meshgrid(lon, lat)

        lons = _lons.flatten()
        lats = _lats.flatten()

        data = np.random.random(lons.shape) * 10

        scatter = ax.scatter(lons, lats, s=data, transform=ccrs.PlateCarree())

        clip_scatter_by_map(scatter, map_polygon)
        draw_map(map_polygon, linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_scatter", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_streamplot():
    """测试剪切流线图."""

    lons, lats, u, v = load_wind()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        streamplot = ax.streamplot(
            lons[0, :],
            lats[:, 0],
            u,
            v,
            transform=ccrs.PlateCarree(),
            density=2.0,
            color="#1f77b4",
        )

        arrow_count = len(streamplot.arrows.get_paths())
        arrow_patches = [
            patch for patch in ax.patches if isinstance(patch, FancyArrowPatch)
        ][-arrow_count:]
        before_clip_paths = [patch.get_clip_path() for patch in arrow_patches]

        clip_streamplot_by_map(streamplot, map_polygon)

        after_clip_paths = [patch.get_clip_path() for patch in arrow_patches]
        assert arrow_patches
        assert all(clip_path is not None for clip_path in after_clip_paths)
        assert any(before is not after for before, after in zip(before_clip_paths, after_clip_paths))

        draw_map(map_polygon, linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_streamplot", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_pcolormesh():
    """测试剪切格点图."""

    lons, lats, data = load_dem()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        mesh = ax.pcolormesh(
            lons,
            lats,
            data,
            cmap=plt.cm.terrain,
            transform=ccrs.PlateCarree(),
            shading="auto",
        )

        clip_pcolormesh_by_map(mesh, map_polygon)
        draw_map(map_polygon, linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_pcolormesh", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_contour():
    """测试剪切等值线."""

    lons, lats, data = load_temp()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        cs = ax.contour(
            lons,
            lats,
            data,
            colors="b",
            levels=np.linspace(-30, 40, 10),
            transform=ccrs.PlateCarree(),
        )

        clip_contours_by_map(cs, map_polygon)
        draw_map(map_polygon, color="k", linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_contour", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_contourf():
    """测试切割填色等值线."""

    lons, lats, data = load_temp()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        cs = ax.contourf(
            lons,
            lats,
            data,
            cmap=plt.cm.terrain,
            levels=np.linspace(-30, 40, 10),
            transform=ccrs.PlateCarree(),
        )

        clip_contours_by_map(cs, map_polygon)
        draw_map(map_polygon, color="k", linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_contourf", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_contourf_with_extent():
    """测试 extent 参数可直接限制裁剪范围并同步设置坐标范围."""

    lons, lats, data = load_temp()
    extent = [70, 140, 40, 55]

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    map_polygon = get_adm_maps(country="中国", level="国", only_polygon=True, record="first", simplify=True)

    cs = ax.contourf(
        lons,
        lats,
        data,
        cmap=plt.cm.terrain,
        levels=np.linspace(-30, 40, 10),
        transform=ccrs.PlateCarree(),
    )

    clip_contours_by_map(cs, map_polygon, ax=ax, extent=extent, set_extent=True)
    draw_map(map_polygon, color="k", linewidth=1)

    assert tuple(round(v, 6) for v in ax.get_extent(crs=ccrs.PlateCarree())) == (70.0, 140.0, 40.0, 55.0)


def test_clip_contourf_uses_artist_axes_when_ax_is_omitted():
    """测试多子图下不传 ax 时，仍会使用 contourf 自身所属的 Axes."""

    dem_lons, dem_lats, dem = load_dem()
    temp_lons, temp_lats, temp = load_temp()
    map_polygon = get_adm_maps(city="北京市", only_polygon=True, record="first")
    extent = map_polygon.get_extent(buffer=0.15)

    fig, axes = plt.subplots(
        1, 2, figsize=(10, 4.6), subplot_kw={"projection": ccrs.PlateCarree()}
    )
    panels = [
        ("Beijing DEM", dem_lons, dem_lats, dem, plt.cm.terrain, np.linspace(-200, dem.max(), 10)),
        ("Beijing Temperature", temp_lons, temp_lats, temp, plt.cm.coolwarm, np.linspace(-20, 36, 10)),
    ]

    for ax, (title, lons, lats, data, cmap, levels) in zip(axes, panels):
        cs = ax.contourf(
            lons,
            lats,
            data,
            cmap=cmap,
            levels=levels,
            transform=ccrs.PlateCarree(),
        )
        clip_contours_by_map(cs, map_polygon, extent=extent, set_extent=True)
        draw_map(map_polygon, ax=ax, color="black", linewidth=1.0)
        ax.set_title(title)

    ax1, ax2 = axes
    expected_extent = tuple(round(v, 6) for v in extent)
    assert tuple(round(v, 6) for v in ax1.get_extent(crs=ccrs.PlateCarree())) == expected_extent
    assert tuple(round(v, 6) for v in ax2.get_extent(crs=ccrs.PlateCarree())) == expected_extent

    savefp = os.path.join("./tmp", "test_clip_contourf", "auto_axes_multi_panel.png")
    os.makedirs(os.path.dirname(savefp), exist_ok=True)
    plt.tight_layout()
    plt.savefig(savefp, bbox_inches="tight")
    plt.close()


def test_clip_scatter_sets_clip_box():
    """测试裁剪时同时设置 clip_box，避免对象绘制超出当前 Axes。"""

    fig = plt.figure(figsize=(6, 6))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    map_polygon = get_adm_maps(country="中国", level="国", only_polygon=True, record="first", simplify=True)

    scatter = ax.scatter([80, 120], [25, 45], transform=ccrs.PlateCarree())
    clip_scatter_by_map(scatter, map_polygon, ax=ax, extent=[70, 140, 15, 55], set_extent=True)

    assert scatter.get_clip_path() is not None
    assert scatter.get_clip_box() is not None


def test_clip_quiver():
    """测试切割箭矢簇."""

    lons, lats, u, v = load_wind()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        quiver = ax.quiver(
            lons, lats, u, v, transform=ccrs.PlateCarree(), units="inches", scale=10
        )

        clip_quiver_by_map(quiver, map_polygon)
        draw_map(map_polygon, color="k", linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", "test_clip_quiver", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_clip_clabel():
    """测试切割等值线标签."""

    lons, lats, data = load_dem()

    map_polygon = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)
    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    contours = ax.contour(
        lons,
        lats,
        data,
        cmap=plt.cm.terrain,
        levels=np.linspace(-2500, data.max(), 5),
        transform=ccrs.PlateCarree(),
    )
    clip_contours_by_map(contours, map_polygon)
    clabels = ax.clabel(
        contours, levels=contours.levels, colors="k", fmt="%i", inline=True
    )
    clip_clabels_by_map(clabels, map_polygon)
    draw_map(map_polygon, color="k")

    savefp = os.path.join("./tmp", "test_clip_clabel", "clipped_clabels.png")
    os.makedirs(os.path.dirname(savefp), exist_ok=True)

    plt.savefig(savefp, bbox_inches="tight")
    plt.close()


def test_projection():
    """测试不同投影."""
    PROJECTIONS = [
        ccrs.Orthographic(central_longitude=100),
        ccrs.AlbersEqualArea(central_longitude=100),
        ccrs.AzimuthalEquidistant(central_longitude=100),
        ccrs.LambertConformal(central_longitude=100),
        ccrs.LambertCylindrical(central_longitude=100),
        ccrs.Mercator(central_longitude=100),
        ccrs.Miller(central_longitude=100),
        ccrs.Mollweide(central_longitude=100),
        ccrs.Robinson(central_longitude=100),
        ccrs.Sinusoidal(central_longitude=100),
        ccrs.Stereographic(central_longitude=100),
        ccrs.InterruptedGoodeHomolosine(central_longitude=100),
        ccrs.Geostationary(central_longitude=100),
        ccrs.NearsidePerspective(central_longitude=100),
        ccrs.Gnomonic(central_longitude=100),
        ccrs.LambertAzimuthalEqualArea(central_longitude=100),
        ccrs.NorthPolarStereo(central_longitude=100),
    ]

    lons, lats, data = load_dem()

    for projection in PROJECTIONS:
        map_polygon = get_adm_maps(province="河南省", record="first", only_polygon=True)
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=projection)
        contours = ax.contourf(
            lons,
            lats,
            data,
            cmap=plt.cm.terrain,
            levels=np.linspace(-2500, data.max(), 5),
            transform=ccrs.PlateCarree(),
        )
        clip_contours_by_map(contours, map_polygon)
        draw_map(map_polygon, color="r")
        ax.coastlines()
        ax.set_global()

        savefp = os.path.join("./tmp", "test_projection", f"{uuid.uuid4().hex}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)

        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


def test_city_centroid_examples():
    """绘制城市质心示例图，便于人工检查常见城市与多多边形城市."""

    city_cases = [
        ("Beijing", "北京市"),
        ("Shanghai", "上海市"),
        ("Zhoushan", "舟山市"),
        ("Sansha", "三沙市"),
    ]

    for english_name, city_name in city_cases:
        row = get_adm_maps(city=city_name, record="first")
        geom = row["geometry"]
        assert round(row.longitude, 6) == round(geom.centroid.x, 6)
        assert round(row.latitude, 6) == round(geom.centroid.y, 6)

        fig = plt.figure(figsize=(6, 5), dpi=200)
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        draw_map(geom, ax=ax, color="#2a6fdb", linewidth=1.0)
        ax.scatter(
            [row.longitude],
            [row.latitude],
            color="#d62828",
            s=28,
            transform=ccrs.PlateCarree(),
            zorder=5,
        )
        ax.set_title(f"{english_name} centroid", fontsize=12)
        ax.set_extent(geom.get_extent(buffer=0.8), crs=ccrs.PlateCarree())
        ax.gridlines(draw_labels=False, linewidth=0.4, color="#999999", alpha=0.4, linestyle="--")

        savefp = os.path.join("./tmp", "test_city_centroids", f"{english_name.lower()}-centroid.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()


if __name__ == "__main__":
    pass
