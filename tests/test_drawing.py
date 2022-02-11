import os
import re
import json
from hashlib import md5
import shutil

import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs

from cnmaps import get_map, clip_clabels_by_map, clip_contours_by_map, draw_map
from cnmaps.names import NAMES
from cnmaps.sample import load_dem

map_args = []
for map_set, maps in NAMES.items():
    for keys in maps.keys():
        if keys[0] == '南海':
            continue
        map_args.append({'source': keys[0], 'map_set': map_set})


def get_md5(fp):
    with open(fp, 'rb') as f:
        return md5(f.read()).hexdigest()


def test_clip_contour():
    lons, lats, data = load_dem()

    for map_arg in map_args:
        name = map_arg['source']
        map_set = map_arg['map_set']
        md5_fp = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                              'case', map_set, 'clip_contour', 'md5.json')
        with open(md5_fp) as f:
            md5s = json.load(f)
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_map(**map_arg)

        cs = ax.contour(
            lons,
            lats,
            data,
            colors='b',
            levels=np.linspace(-2800, data.max(), 10),
            transform=ccrs.PlateCarree())

        clip_contours_by_map(cs, map_polygon)
        draw_map(map_polygon, color='k', linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join('./tmp', f'{name}.png')
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches='tight')
        plt.close()

        mymd5 = get_md5(savefp)
        assert mymd5 == md5s[name]
    shutil.rmtree('./tmp')


def test_clip_contourf():
    lons, lats, data = load_dem()

    for map_arg in map_args:
        name = map_arg['source']
        map_set = map_arg['map_set']
        md5_fp = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                              'case', map_set, 'clip_contourf', 'md5.json')
        with open(md5_fp) as f:
            md5s = json.load(f)
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
        map_polygon = get_map(**map_arg)

        cs = ax.contourf(lons,
                         lats,
                         data,
                         cmap=plt.cm.terrain,
                         levels=np.linspace(-2800, data.max(), 10),
                         transform=ccrs.PlateCarree())

        clip_contours_by_map(cs, map_polygon)
        draw_map(map_polygon, color='k', linewidth=1)
        ax.set_extent(map_polygon.get_extent(buffer=1))
        savefp = os.path.join('./tmp', f'{name}.png')
        os.makedirs(os.path.dirname(savefp), exist_ok=True)
        plt.savefig(savefp, bbox_inches='tight')
        plt.close()

        mymd5 = get_md5(savefp)
        assert mymd5 == md5s[name]
    shutil.rmtree('./tmp')


def test_clip_clabel():
    lons, lats, data = load_dem()

    md5_fp = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'case',
                          'clip_clabel', 'md5.json')
    with open(md5_fp) as f:
        md5s = json.load(f)

    map_polygon = get_map('中国')
    fig = plt.figure(figsize=(10, 10))
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
    contours = ax.contour(lons,
                          lats,
                          data,
                          cmap=plt.cm.terrain,
                          levels=np.linspace(-2500, data.max(), 20),
                          transform=ccrs.PlateCarree())
    clip_contours_by_map(contours, map_polygon)
    clabels = ax.clabel(contours,
                        levels=contours.levels,
                        colors='k',
                        fmt='%i',
                        inline=True)
    clip_clabels_by_map(clabels, map_polygon)
    draw_map(map_polygon, color='k')
    ax.coastlines()

    savefp = os.path.join('./tmp', f'clipped_clabels.png')
    os.makedirs(os.path.dirname(savefp), exist_ok=True)

    plt.savefig(savefp, bbox_inches='tight')
    plt.close()

    mymd5 = get_md5(savefp)
    assert mymd5 == md5s['clipped_clabels']
    shutil.rmtree('./tmp')


def test_projection():
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
        ccrs.NorthPolarStereo(central_longitude=100)
    ]

    lons, lats, data = load_dem()

    md5_fp = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'case',
                          'projections', 'md5.json')
    with open(md5_fp) as f:
        md5s = json.load(f)

    for projection in PROJECTIONS:
        projection_name = re.search(r"(?<=\.)[A-Za-z]*(?=\ )",
                                    str(projection)).group()
        map_polygon = get_map('中国')
        fig = plt.figure(figsize=(10, 10))
        ax = fig.add_subplot(111, projection=projection)
        contours = ax.contourf(lons,
                               lats,
                               data,
                               cmap=plt.cm.terrain,
                               levels=np.linspace(-2500, data.max(), 20),
                               transform=ccrs.PlateCarree())
        clip_contours_by_map(contours, map_polygon)
        draw_map(map_polygon, color='r')
        ax.coastlines()
        ax.set_global()

        savefp = os.path.join('./tmp', f'{projection_name}.png')
        os.makedirs(os.path.dirname(savefp), exist_ok=True)

        plt.savefig(savefp, bbox_inches='tight')
        plt.close()

        mymd5 = get_md5(savefp)
        assert mymd5 == md5s[projection_name]
    shutil.rmtree('./tmp')
