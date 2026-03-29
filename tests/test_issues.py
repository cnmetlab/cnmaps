import os
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import numpy as np

from cnmaps import get_adm_maps, clip_contours_by_map, draw_maps
from cnmaps.sample import load_temp
from cnmaps.sample import load_dem

TMP_ISSUES_DIR = "./tmp/issues"


def test_issue85():
    # https://github.com/cnmetlab/cnmaps/issues/85
    get_adm_maps(
        city="长春市", level="市", only_polygon=True, record="first"
    ) + get_adm_maps(city="吉林市", level="市", only_polygon=True, record="first")
    get_adm_maps(
        city="吉林市", level="市", only_polygon=True, record="first"
    ) + get_adm_maps(city="辽源市", level="市", only_polygon=True, record="first")


def test_issue97():
    # https://github.com/cnmetlab/cnmaps/issues/97
    fig = plt.figure(figsize=(6, 5), dpi=300)
    ax = fig.add_axes([0.1, 0.1, 0.8, 0.8], projection=ccrs.PlateCarree())
    lons, lats, data = load_temp()
    cs = ax.contourf(lons, lats, data)
    boundary = get_adm_maps(country="中华人民共和国", only_polygon=True, record="first")

    draw_maps(get_adm_maps(country="中华人民共和国"), ax)
    clip_contours_by_map(cs, boundary, ax=ax, extent=[70, 140, 40, 55], set_extent=True)
    assert tuple(round(v, 6) for v in ax.get_extent(crs=ccrs.PlateCarree())) == (70.0, 140.0, 40.0, 55.0)
    os.makedirs(TMP_ISSUES_DIR, exist_ok=True)
    fig.savefig(os.path.join(TMP_ISSUES_DIR, "test_issue97.png"), bbox_inches="tight")


def test_issue114():
    # https://github.com/cnmetlab/cnmaps/issues/114
    lons, lats, data = load_dem()

    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    map_polygon = get_adm_maps(
        country="中华人民共和国",
        province="山东省",
        level="市",
        record="all",
        only_polygon=True,
    )

    cs = ax.contourf(
        lons,
        lats,
        data,
        cmap=plt.cm.terrain,
        levels=np.linspace(-2800, data.max(), 10),
        transform=ccrs.PlateCarree(),
    )

    clip_contours_by_map(cs, map_polygon)
    draw_maps(map_polygon, color="black", linewidth=1)
    os.makedirs(TMP_ISSUES_DIR, exist_ok=True)
    fig.savefig(os.path.join(TMP_ISSUES_DIR, "test_issue114.png"), bbox_inches="tight")


if __name__ == "__main__":
    test_issue85()
