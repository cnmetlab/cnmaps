import os
import random
import uuid

import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs

from cnmaps import (
    get_adm_maps,
    get_adm_names,
    clip_clabels_by_map,
    clip_contours_by_map,
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
    {"only_polygon": True, "record": "first", "name": "中华人民共和国", "simplify": True}
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
        [{"level": "国", "name": "中华人民共和国", "simplify": True}]
        + [{"level": "省", "name": "中华人民共和国-分省", "simplify": True}]
        + [{"level": "国", "engine": "geopandas", "name": "中华人民共和国", "simplify": True}]
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

    map_polygon = get_adm_maps(record="first", only_polygon=True)
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
    ax.coastlines()

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


if __name__ == "__main__":
    pass
