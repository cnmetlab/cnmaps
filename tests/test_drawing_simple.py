import os
import shutil

import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs

from cnmaps import (
    get_adm_maps,
    get_adm_names,
    clip_contours_by_map,
    draw_map,
    clip_pcolormesh_by_map,
)
from cnmaps.sample import load_dem

provinces = get_adm_names(level="省")

map_args = [
    {"province": p, "only_polygon": True, "record": "first", "name": p}
    for p in provinces[:1]
]


def test_clip_pcolormesh():
    """测试剪切格点图."""
    lons, lats, data = load_dem()

    for map_arg in map_args:
        name = map_arg["name"]

        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_adm_maps(**map_arg)

        mesh = ax.pcolormesh(
            lons, lats, data, cmap=plt.cm.terrain, transform=ccrs.PlateCarree()
        )

        clip_pcolormesh_by_map(mesh, map_polygon)
        draw_map(map_polygon, linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join("./tmp", f"{name}.png")
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches="tight")
        plt.close()

    shutil.rmtree("./tmp")


def test_clip_contour():
    """测试剪切等值线."""
    lons, lats, data = load_dem()

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
            levels=np.linspace(-2800, data.max(), 5),
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


def test_clip_contourf():
    """测试切割填色等值线."""
    lons, lats, data = load_dem()

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
            levels=np.linspace(-2800, data.max(), 5),
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


if __name__ == "__main__":
    pass
