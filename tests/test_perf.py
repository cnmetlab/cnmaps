import os
import shutil
import random
import uuid
import pytest

import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs


from cnmaps import (
    get_adm_maps,
    get_adm_names,
    clip_clabels_by_map,
    clip_contours_by_map,
    draw_map,
    clip_pcolormesh_by_map,
    clip_quiver_by_map,
    clip_scatter_by_map,
)
from cnmaps.sample import load_dem, load_temp, load_wind

MAPCASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mapcase")


provinces = get_adm_names(level="省")
cities = get_adm_names(level="市")
districts = get_adm_names(level="区县")
sample_districts = [random.choice(districts) for _ in range(100)]


map_arg = {
    "only_polygon": True,
    "record": "first",
    "name": "中华人民共和国",
    "simplify": True,
}


def test_draw_maps(benchmark):
    """测试多地图绘制功能（简化后）"""

    def inner():
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        draw_map(map_polygon, linewidth=1)
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_scatter(benchmark):
    """测试剪切散点图."""

    def inner():
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
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_pcolormesh(benchmark):
    """测试剪切格点图."""

    def inner():
        lons, lats, data = load_dem()

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
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_contour(benchmark):
    """测试剪切等值线."""

    def inner():
        lons, lats, data = load_temp()

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
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_contourf(benchmark):
    """测试切割填色等值线."""

    def inner():
        lons, lats, data = load_temp()

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
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_quiver(benchmark):
    """测试切割箭矢簇."""

    def inner():
        lons, lats, u, v = load_wind()

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
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_clabel(benchmark):
    """测试切割等值线标签."""

    def inner():
        lons, lats, data = load_dem()

        map_polygon = get_adm_maps(record="first", only_polygon=True, simplify=True)
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

        savefp = os.path.join("./tmp", "clipped_clabels.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)

        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_projection(benchmark):
    """测试投影."""

    def inner():
        lons, lats, data = load_dem()

        map_polygon = get_adm_maps(record="first", only_polygon=True, simplify=True)
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.Orthographic(central_longitude=100))
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

        savefp = os.path.join("./tmp", f"{uuid.uuid4().hex}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)

        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

        shutil.rmtree("./tmp")

    benchmark(inner)


def test_maskout(benchmark):
    """测试maskout方法"""

    def inner():
        casefp = os.path.join(MAPCASE_DIR, "ningxia-maskout-gcj02.npy")
        mask_array = np.load(casefp)

        map_polygon = get_adm_maps(
            province="宁夏回族自治区", only_polygon=True, record="first", wgs84=False
        )

        lons, lats, data = load_dem()
        data = data[100:150, 150:200]
        lons = lons[100:150, 150:200]
        lats = lats[100:150, 150:200]

        ndata = map_polygon.maskout(lons, lats, data)
        assert (ndata.mask == mask_array).all()

        ndata = map_polygon.maskout(lons, lats, data.data)
        assert (ndata.mask == mask_array).all()

        casefp = os.path.join(MAPCASE_DIR, "ningxia-maskout-wgs84.npy")
        mask_array = np.load(casefp)

        map_polygon = get_adm_maps(
            province="宁夏回族自治区", only_polygon=True, record="first", wgs84=True
        )

        lons, lats, data = load_dem()
        data = data[100:150, 150:200]
        lons = lons[100:150, 150:200]
        lats = lats[100:150, 150:200]

        ndata = map_polygon.maskout(lons, lats, data)
        assert (ndata.mask == mask_array).all()

        ndata = map_polygon.maskout(lons, lats, data.data)
        assert (ndata.mask == mask_array).all()

    benchmark(inner)


def test_make_maskout_array(benchmark):
    """测试make_maskout_array方法"""

    def inner():
        casefp = os.path.join(MAPCASE_DIR, "china-maskout-gcj02.npy")
        mask_array = np.load(casefp)

        lon = np.linspace(60, 150, 1000)
        lat = np.linspace(0, 60, 1000)
        lons, lats = np.meshgrid(lon, lat)

        china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=False)
        china_maskout_array = china.make_mask_array(lons, lats)

        assert (china_maskout_array == mask_array).all()

        casefp = os.path.join(MAPCASE_DIR, "china-maskout-wgs84.npy")
        mask_array = np.load(casefp)

        lon = np.linspace(60, 150, 1000)
        lat = np.linspace(0, 60, 1000)
        lons, lats = np.meshgrid(lon, lat)

        china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=True)
        china_maskout_array = china.make_mask_array(lons, lats)

        assert (china_maskout_array == mask_array).all()

        with pytest.raises(ValueError):
            china.make_mask_array(lon, lat)

        with pytest.raises(ValueError):
            china.make_mask_array(lons, lats[:-1])

    benchmark(inner)


if __name__ == "__main__":
    pass
