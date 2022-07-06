import time

import shapely.geometry as sgeom
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
from cnmaps import get_adm_maps, draw_maps

def draw_map_new(map_polygon, **kwargs):
    '''提前创建crs后的draw_map函数.'''
    ax = plt.gca()
    crs = ccrs.PlateCarree()
    for geomestry in map_polygon:
        if isinstance(map_polygon, sgeom.MultiPolygon):
            try:
                coords = geomestry.boundary.coords
            except NotImplementedError:
                exterior_coords = geomestry.exterior.coords
                interiors = geomestry.interiors
                xs = []
                ys = []
                for coord in exterior_coords:
                    try:
                        x, y = ax.projection.transform_point(*coord, crs)
                    except AttributeError:
                        x, y = coord
                    xs.append(x)
                    ys.append(y)

                ax.plot(xs, ys, **kwargs)
                for interior in interiors:
                    interior_coords = interior.coords
                    xs = []
                    ys = []
                    for coord in interior_coords:
                        try:
                            x, y = ax.projection.transform_point(*coord, crs)
                        except AttributeError:
                            x, y = coord
                        xs.append(x)
                        ys.append(y)
                    ax.plot(xs, ys, **kwargs)
                continue
        elif isinstance(map_polygon, sgeom.MultiLineString):
            coords = geomestry.coords
        xs = []
        ys = []
        for coord in coords:
            try:
                x, y = ax.projection.transform_point(*coord, crs)
            except AttributeError:
                x, y = coord
            xs.append(x)
            ys.append(y)
        if kwargs.get('color'):
            ax.plot(xs, ys, **kwargs)
        else:
            ax.plot(xs, ys, color='k', **kwargs)

def runtime(func, *args, **kwargs):
    '''打印函数运行的时间.'''
    t0 = time.time()
    result = func(*args, **kwargs)
    t1 = time.time()
    print('>> Time used by', func.__name__, ':', t1 - t0, 's')

    return result

crs = ccrs.PlateCarree()
fig = plt.figure()
ax = fig.add_subplot(111, projection=crs)

hebei = get_adm_maps(province='河北省')
runtime(draw_maps, hebei)

hebei = hebei[0]['geometry']
runtime(draw_map_new, hebei)

plt.show()