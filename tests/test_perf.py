import os
import shutil

import pytest

pytest.importorskip("pytest_benchmark", reason="pytest-benchmark not installed (dev dependency)")

import numpy as np  # noqa: E402
import matplotlib.pyplot as plt  # noqa: E402
import cartopy.crs as ccrs  # noqa: E402

from cnmaps import (  # noqa: E402
    get_adm_maps,
    clip_contours_by_map,
    draw_map,
)
from cnmaps.sample import load_dem, load_temp  # noqa: E402

MAPCASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mapcase")
MAKE_MASKOUT_FAST_GRID_SIZE = 100


def test_query_country_boundary(benchmark):
    """中国国界查询性能。"""

    benchmark(lambda: get_adm_maps(country="中国", level="国", record="first", only_polygon=True))


def test_query_foreign_country_boundary(benchmark):
    """外国国家边界查询性能。"""

    benchmark(lambda: get_adm_maps(country="法国", level="国", record="first", only_polygon=True))


def test_query_province_boundary(benchmark):
    """省级边界查询性能。"""

    benchmark(lambda: get_adm_maps(province="北京市", record="first", only_polygon=True))


def test_draw_map_country(benchmark):
    """中国边界绘制性能。"""
    map_polygon = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, simplify=True)

    def inner():
        fig = plt.figure(figsize=(10, 10))
        fig.add_subplot(111, projection=ccrs.PlateCarree())
        draw_map(map_polygon, linewidth=1)
        savefp = os.path.join("./tmp", "benchmark-draw-map-country.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()
        shutil.rmtree("./tmp")

    benchmark(inner)


def test_clip_contourf_country(benchmark):
    """中国边界裁剪 contourf 性能。"""
    lons, lats, data = load_temp()
    map_polygon = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, simplify=True)

    def inner():
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
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
        savefp = os.path.join("./tmp", "benchmark-clip-contourf-country.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()
        shutil.rmtree("./tmp")

    benchmark(inner)


def test_maskout_core(benchmark):
    """只测 maskout 核心路径。"""
    mask_array_gcj02 = np.load(os.path.join(MAPCASE_DIR, "ningxia-maskout-gcj02.npy"))
    map_polygon_gcj02 = get_adm_maps(
        province="宁夏回族自治区", only_polygon=True, record="first", wgs84=False
    )
    mask_array_wgs84 = np.load(os.path.join(MAPCASE_DIR, "ningxia-maskout-wgs84.npy"))
    map_polygon_wgs84 = get_adm_maps(
        province="宁夏回族自治区", only_polygon=True, record="first", wgs84=True
    )

    lons, lats, data = load_dem()
    data = data[100:150, 150:200]
    lons = lons[100:150, 150:200]
    lats = lats[100:150, 150:200]

    def inner():
        ndata = map_polygon_gcj02.maskout(lons, lats, data)
        assert (ndata.mask == mask_array_gcj02).all()

        ndata = map_polygon_gcj02.maskout(lons, lats, data.data)
        assert (ndata.mask == mask_array_gcj02).all()

        ndata = map_polygon_wgs84.maskout(lons, lats, data)
        assert (ndata.mask == mask_array_wgs84).all()

        ndata = map_polygon_wgs84.maskout(lons, lats, data.data)
        assert (ndata.mask == mask_array_wgs84).all()

    benchmark(inner)


def test_make_maskout_array_core(benchmark):
    """只测 make_mask_array 核心路径。"""
    n = MAKE_MASKOUT_FAST_GRID_SIZE
    lon = np.linspace(60, 150, n)
    lat = np.linspace(0, 60, n)
    lons, lats = np.meshgrid(lon, lat)
    mask_array_gcj02 = np.load(os.path.join(MAPCASE_DIR, "china-maskout-gcj02-fast.npy"))
    mask_array_wgs84 = np.load(os.path.join(MAPCASE_DIR, "china-maskout-wgs84-fast.npy"))
    china_gcj02 = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=False)
    china_wgs84 = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)

    def inner():
        china_maskout_array = china_gcj02.make_mask_array(lons, lats)
        assert (china_maskout_array == mask_array_gcj02).all()

        china_maskout_array = china_wgs84.make_mask_array(lons, lats)
        assert (china_maskout_array == mask_array_wgs84).all()

        with pytest.raises(ValueError):
            china_wgs84.make_mask_array(lon, lat)

        with pytest.raises(ValueError):
            china_wgs84.make_mask_array(lons, lats[:-1])

    benchmark(inner)


@pytest.mark.heavy
def test_make_maskout_array_full(benchmark):
    """全分辨率 make_mask_array 基准；默认 CI 不跑。"""
    lon = np.linspace(60, 150, 1000)
    lat = np.linspace(0, 60, 1000)
    lons, lats = np.meshgrid(lon, lat)
    mask_array_gcj02 = np.load(os.path.join(MAPCASE_DIR, "china-maskout-gcj02.npy"))
    mask_array_wgs84 = np.load(os.path.join(MAPCASE_DIR, "china-maskout-wgs84.npy"))
    china_gcj02 = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=False)
    china_wgs84 = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)

    def inner():
        china_maskout_array = china_gcj02.make_mask_array(lons, lats)
        assert (china_maskout_array == mask_array_gcj02).all()

        china_maskout_array = china_wgs84.make_mask_array(lons, lats)
        assert (china_maskout_array == mask_array_wgs84).all()

    benchmark(inner)


if __name__ == "__main__":
    pass
