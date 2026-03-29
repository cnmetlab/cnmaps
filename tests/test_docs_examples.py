import os

import cartopy.crs as ccrs
import matplotlib.pyplot as plt
import numpy as np

from cnmaps import (
    clip_clabels_by_map,
    clip_contours_by_map,
    clip_pcolormesh_by_map,
    clip_quiver_by_map,
    clip_scatter_by_map,
    draw_map,
    draw_maps,
    get_adm_maps,
    get_adm_names,
)
from cnmaps.sample import load_dem, load_temp, load_wind


DOCSAMPLE_DIR = "./tmp/docsample"
MASKOUT_GRID_SIZE = 200


def _ensure_docsample_dir(*parts):
    output_dir = os.path.join(DOCSAMPLE_DIR, *parts)
    os.makedirs(output_dir, exist_ok=True)
    return output_dir


def _savefig(fig, *parts):
    output_dir = _ensure_docsample_dir(*parts[:-1]) if len(parts) > 1 else _ensure_docsample_dir()
    savefp = os.path.join(output_dir, parts[-1])
    fig.savefig(savefp, bbox_inches="tight")
    plt.close(fig)
    return savefp


def test_docs_query_examples():
    """覆盖 usage.rst 中的查询与名称示例。"""

    beijing = get_adm_maps(city="北京市")
    assert beijing[0]["市"] == "北京市"

    haidian = get_adm_maps(district="海淀区")
    assert haidian[0]["区/县"] == "海淀区"

    shanxi = get_adm_maps(province="山西省")
    assert shanxi[0]["省/直辖市"] == "山西省"

    shanxi_cities = get_adm_maps(province="山西省", level="市")
    assert len(shanxi_cities) == 11
    assert shanxi_cities[0]["市"] == "太原市"

    shanxi_cities_gdf = get_adm_maps(province="山西省", level="市", engine="geopandas")
    assert len(shanxi_cities_gdf) == 11

    provinces = get_adm_names(level="省")
    assert "北京市" in provinces and "香港特别行政区" in provinces

    sichuan_cities = get_adm_names(province="四川省", level="市")
    assert "成都市" in sichuan_cities and "阿坝藏族羌族自治州" in sichuan_cities

    chengdu_districts = get_adm_names(province="四川省", city="成都市", level="区县")
    assert "锦江区" in chengdu_districts and "简阳市" in chengdu_districts


def test_docs_draw_boundary_examples():
    """覆盖 usage.rst 中的行政边界绘制示例。"""

    draw_cases = [
        ("country-level.png", {"level": "国"}, {"linewidth": 1.0}),
        ("province-level.png", {"level": "省"}, {"linewidth": 0.8, "color": "r"}),
        ("city-level.png", {"level": "市"}, {"linewidth": 0.5, "color": "g"}),
        ("district-level.png", {"level": "区县"}, {"linewidth": 0.3, "color": "b"}),
    ]

    for filename, query_kwargs, draw_kwargs in draw_cases:
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        draw_maps(get_adm_maps(**query_kwargs), ax=ax, **draw_kwargs)
        _savefig(fig, "usage", filename)


def test_docs_union_example():
    """覆盖 usage.rst 中的边界合并示例。"""

    beijing = get_adm_maps(province="北京市", only_polygon=True, record="first")
    tianjin = get_adm_maps(province="天津市", only_polygon=True, record="first")
    hebei = get_adm_maps(province="河北省", only_polygon=True, record="first")
    jingjinji = beijing + tianjin + hebei

    fig = plt.figure(figsize=(5, 5))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    draw_map(jingjinji, ax=ax)
    _savefig(fig, "usage", "jingjinji.png")


def test_docs_clip_examples():
    """覆盖 usage.rst 中 contourf、pcolormesh、quiver、scatter、clabel 裁剪示例。"""

    china = get_adm_maps(country="中华人民共和国", record="first", only_polygon=True)

    lons_dem, lats_dem, dem = load_dem()
    lons_temp, lats_temp, temp = load_temp()
    lons_wind, lats_wind, u, v = load_wind()

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    cs = ax.contourf(
        lons_dem,
        lats_dem,
        dem,
        cmap=plt.cm.terrain,
        levels=np.linspace(-2800, dem.max(), 10),
        transform=ccrs.PlateCarree(),
    )
    clip_contours_by_map(cs, china, ax=ax)
    draw_map(china, ax=ax, color="k", linewidth=1)
    _savefig(fig, "usage", "clip-china-contourf.png")

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    mesh = ax.pcolormesh(
        lons_dem,
        lats_dem,
        dem,
        cmap=plt.cm.terrain,
        vmin=-2800,
        transform=ccrs.PlateCarree(),
        shading="auto",
    )
    clip_pcolormesh_by_map(mesh, china, ax=ax)
    draw_map(china, ax=ax, color="k")
    ax.set_extent(china.get_extent())
    _savefig(fig, "usage", "clip-china-pcolormesh.png")

    spd = (u ** 2 + v ** 2) ** 0.5
    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    qv = ax.quiver(lons_wind, lats_wind, u, v, transform=ccrs.PlateCarree(), zorder=2)
    cs = ax.contourf(
        lons_wind,
        lats_wind,
        spd,
        cmap=plt.cm.RdYlBu_r,
        levels=np.linspace(spd.min(), spd.max(), 50),
        transform=ccrs.PlateCarree(),
        zorder=1,
    )
    clip_contours_by_map(cs, china, ax=ax)
    clip_quiver_by_map(qv, china, ax=ax)
    draw_map(china, ax=ax, color="k", linewidth=1)
    _savefig(fig, "usage", "clip-china-quiver.png")

    data = list(zip(lons_wind.flatten(), lats_wind.flatten(), spd.flatten()))
    x = [s[0] for s in data]
    y = [s[1] for s in data]
    z = [s[2] for s in data]
    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    scatter = ax.scatter(
        x,
        y,
        s=np.array(z) * 10,
        c=z,
        cmap=plt.cm.RdYlBu_r,
        transform=ccrs.PlateCarree(),
    )
    clip_scatter_by_map(scatter, china, ax=ax)
    draw_map(china, ax=ax, linewidth=1)
    ax.set_extent(china.get_extent(buffer=1))
    _savefig(fig, "usage", "clip-china-scatter.png")

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    contours = ax.contour(
        lons_dem,
        lats_dem,
        dem,
        cmap=plt.cm.terrain,
        levels=np.linspace(-2500, dem.max(), 20),
        transform=ccrs.PlateCarree(),
    )
    clip_contours_by_map(contours, china, ax=ax)
    clabels = ax.clabel(contours, levels=contours.levels, colors="k", fmt="%i", inline=True)
    clip_clabels_by_map(clabels, china, ax=ax)
    draw_map(china, ax=ax, color="k")
    _savefig(fig, "usage", "clip-china-clabels.png")


def test_docs_projection_example():
    """覆盖 usage.rst 中的多投影示例。"""

    lons, lats, dem = load_dem()
    projections = [
        ("Mercator", ccrs.Mercator(central_longitude=100)),
        ("Mollweide", ccrs.Mollweide(central_longitude=100)),
        ("Orthographic", ccrs.Orthographic(central_longitude=100)),
        ("Robinson", ccrs.Robinson(central_longitude=100)),
    ]

    fig = plt.figure(figsize=(16, 12))
    fig.tight_layout()
    china = get_adm_maps(country="中华人民共和国", record="first", only_polygon=True)

    for i, projection in enumerate(projections):
        ax = fig.add_subplot(2, 2, i + 1, projection=projection[1])
        cs = ax.contourf(lons, lats, dem, cmap=plt.cm.terrain, transform=ccrs.PlateCarree())
        clip_contours_by_map(cs, china, ax=ax)
        draw_map(china, ax=ax, color="k")
        ax.set_extent(china.get_extent(buffer=3))
        ax.set_global()
        ax.coastlines()
        plt.title(projection[0])

    _savefig(fig, "usage", "china-clip-projections.png")


def test_docs_maskout_examples():
    """覆盖 usage.rst 中的遮罩示例。"""

    lon = np.linspace(60, 150, MASKOUT_GRID_SIZE)
    lat = np.linspace(0, 60, MASKOUT_GRID_SIZE)
    lons, lats = np.meshgrid(lon, lat)
    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=True)

    mask_array = china.make_mask_array(lons, lats)
    fig = plt.figure(figsize=(10, 6))
    plt.imshow(mask_array, cmap="binary", origin="lower")
    _savefig(fig, "usage", "china-maskout-array.png")

    data = np.random.random(lons.shape)
    maskout_data = china.maskout(lons, lats, data)
    fig = plt.figure(figsize=(20, 8))
    plt.subplot(121)
    plt.pcolormesh(lons, lats, data)
    plt.title("no maskout")
    plt.subplot(122)
    plt.pcolormesh(lons, lats, maskout_data)
    plt.title("maskout")
    _savefig(fig, "usage", "china-maskout-data-compare.png")


def test_docs_export_example():
    """覆盖 usage.rst 中的矢量文件导出示例。"""

    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=True)
    output_dir = _ensure_docsample_dir("usage")
    china.to_file(os.path.join(output_dir, "china.geojson"))
    china.to_file(os.path.join(output_dir, "china.shp"), engine="ESRI Shapefile")


def test_docs_examples_rst_examples():
    """覆盖 examples.rst 中的综合示例。"""

    fig = plt.figure(figsize=(5, 5))
    proj = ccrs.Orthographic(central_longitude=100.0, central_latitude=30)
    ax = fig.add_subplot(111, projection=proj)
    china, south_sea = get_adm_maps(level="国", only_polygon=True)
    ax.set_global()
    ax.add_geometries(china, crs=ccrs.PlateCarree(), edgecolor="r", facecolor="r")
    ax.add_geometries(south_sea, crs=ccrs.PlateCarree(), edgecolor="r")
    if hasattr(ax, "outline_patch"):
        ax.outline_patch.set_edgecolor("white")
    _savefig(fig, "examples", "logo-base.png")

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    beijing = get_adm_maps(city="北京市", record="first", only_polygon=True)
    chaoyang = get_adm_maps(district="朝阳区", level="区县", record="first", only_polygon=True)
    ax.add_geometries(beijing, crs=ccrs.PlateCarree(), edgecolor="#D0D0D0", facecolor="#D0D0D0")
    draw_maps(get_adm_maps(city="北京市", level="区县"), ax=ax, color="k", linewidth=0.8)
    ax.add_geometries(chaoyang, crs=ccrs.PlateCarree(), edgecolor="r", facecolor="r")
    ax.set_extent(chaoyang.get_extent(buffer=0.1))
    _savefig(fig, "examples", "chaoyang-district.png")

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    province = get_adm_maps(province="河南省", record="first", only_polygon=True)
    city = get_adm_maps(city="南阳市", record="first", only_polygon=True)
    ax.add_geometries(province, crs=ccrs.PlateCarree(), edgecolor="grey", facecolor="grey")
    ax.add_geometries(city, crs=ccrs.PlateCarree(), edgecolor="r", facecolor="r")
    draw_maps(get_adm_maps(province="河南省", level="市"), ax=ax, color="w", linewidth=0.8)
    ax.set_extent(province.get_extent(buffer=0.5))
    _savefig(fig, "examples", "henan-nanyang.png")
