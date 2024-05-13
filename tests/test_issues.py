import os
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import numpy as np

from cnmaps import get_adm_maps, clip_contours_by_map, draw_maps, MapPolygon
from cnmaps.sample import load_temp
from cnmaps.sample import load_dem
from shapely.geometry import Polygon


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

    boundary = MapPolygon(
        [Polygon([[70, 55], [140, 55], [140, 40], [70, 40], [70, 55]])]
    ) & get_adm_maps(country="中华人民共和国", only_polygon=True, record="first")

    draw_maps(get_adm_maps(country="中华人民共和国"), ax)
    clip_contours_by_map(cs, boundary, ax)
    ax.set_extent([70, 140, 40, 55], crs=ccrs.PlateCarree())
    fig.savefig("./test.png", bbox_inches="tight")
    os.remove("./test.png")


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


if __name__ == "__main__":
    test_issue85()
