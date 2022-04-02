# import os
# import re
# import shutil

# import numpy as np
# import matplotlib.pyplot as plt
# import cartopy.crs as ccrs

# from cnmaps import (get_map, clip_clabels_by_map, clip_contours_by_map,
#                     draw_map, clip_pcolormesh_by_map)
# from cnmaps.names import NAMES
# from cnmaps.sample import load_dem

# map_args = []
# for map_set, maps in NAMES.items():
#     for keys in maps.keys():
#         if keys[0] == '南海':
#             continue
#         map_args.append({'source': keys[0], 'map_set': map_set})


# def test_clip_pcolormesh():
#     lons, lats, data = load_dem()

#     for map_arg in map_args:
#         name = map_arg['source']

#         fig = plt.figure(figsize=(10, 10))
#         ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
#         map_polygon = get_map(**map_arg)

#         mesh = ax.pcolormesh(lons,
#                              lats,
#                              data,
#                              cmap=plt.cm.terrain,
#                              transform=ccrs.PlateCarree())

#         clip_pcolormesh_by_map(mesh, map_polygon)
#         draw_map(map_polygon, color='k', linewidth=1)
#         ax.set_extent(map_polygon.get_extent(buffer=1))
#         savefp = os.path.join('./tmp', f'{name}.png')
#         os.makedirs(os.path.dirname(savefp), exist_ok=True)
#         plt.savefig(savefp, bbox_inches='tight')
#         plt.close()

#     shutil.rmtree('./tmp')


# def test_clip_contour():
#     lons, lats, data = load_dem()

#     for map_arg in map_args:
#         name = map_arg['source']

#         fig = plt.figure(figsize=(10, 10))
#         ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
#         map_polygon = get_map(**map_arg)

#         cs = ax.contour(lons,
#                         lats,
#                         data,
#                         colors='b',
#                         levels=np.linspace(-2800, data.max(), 10),
#                         transform=ccrs.PlateCarree())

#         clip_contours_by_map(cs, map_polygon)
#         draw_map(map_polygon, color='k', linewidth=1)
#         ax.set_extent(map_polygon.get_extent(buffer=1))
#         savefp = os.path.join('./tmp', f'{name}.png')
#         os.makedirs(os.path.dirname(savefp), exist_ok=True)
#         plt.savefig(savefp, bbox_inches='tight')
#         plt.close()

#     shutil.rmtree('./tmp')


# def test_clip_contourf():
#     lons, lats, data = load_dem()

#     for map_arg in map_args:
#         name = map_arg['source']

#         fig = plt.figure(figsize=(10, 10))
#         ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
#         map_polygon = get_map(**map_arg)

#         cs = ax.contourf(lons,
#                          lats,
#                          data,
#                          cmap=plt.cm.terrain,
#                          levels=np.linspace(-2800, data.max(), 10),
#                          transform=ccrs.PlateCarree())

#         clip_contours_by_map(cs, map_polygon)
#         draw_map(map_polygon, color='k', linewidth=1)
#         ax.set_extent(map_polygon.get_extent(buffer=1))
#         savefp = os.path.join('./tmp', f'{name}.png')
#         os.makedirs(os.path.dirname(savefp), exist_ok=True)
#         plt.savefig(savefp, bbox_inches='tight')
#         plt.close()

#     shutil.rmtree('./tmp')


# def test_clip_clabel():
#     lons, lats, data = load_dem()

#     map_polygon = get_map('中国')
#     fig = plt.figure(figsize=(10, 10))
#     ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
#     contours = ax.contour(lons,
#                           lats,
#                           data,
#                           cmap=plt.cm.terrain,
#                           levels=np.linspace(-2500, data.max(), 20),
#                           transform=ccrs.PlateCarree())
#     clip_contours_by_map(contours, map_polygon)
#     clabels = ax.clabel(contours,
#                         levels=contours.levels,
#                         colors='k',
#                         fmt='%i',
#                         inline=True)
#     clip_clabels_by_map(clabels, map_polygon)
#     draw_map(map_polygon, color='k')
#     ax.coastlines()

#     savefp = os.path.join('./tmp', f'clipped_clabels.png')
#     os.makedirs(os.path.dirname(savefp), exist_ok=True)

#     plt.savefig(savefp, bbox_inches='tight')
#     plt.close()

#     shutil.rmtree('./tmp')


# def test_projection():
#     PROJECTIONS = [
#         ccrs.Orthographic(central_longitude=100),
#         ccrs.AlbersEqualArea(central_longitude=100),
#         ccrs.AzimuthalEquidistant(central_longitude=100),
#         ccrs.LambertConformal(central_longitude=100),
#         ccrs.LambertCylindrical(central_longitude=100),
#         ccrs.Mercator(central_longitude=100),
#         ccrs.Miller(central_longitude=100),
#         ccrs.Mollweide(central_longitude=100),
#         ccrs.Robinson(central_longitude=100),
#         ccrs.Sinusoidal(central_longitude=100),
#         ccrs.Stereographic(central_longitude=100),
#         ccrs.InterruptedGoodeHomolosine(central_longitude=100),
#         ccrs.Geostationary(central_longitude=100),
#         ccrs.NearsidePerspective(central_longitude=100),
#         ccrs.Gnomonic(central_longitude=100),
#         ccrs.LambertAzimuthalEqualArea(central_longitude=100),
#         ccrs.NorthPolarStereo(central_longitude=100)
#     ]

#     lons, lats, data = load_dem()

#     for projection in PROJECTIONS:
#         projection_name = re.search(r"(?<=\.)[A-Za-z]*(?=\ )",
#                                     str(projection)).group()
#         map_polygon = get_map('中国')
#         fig = plt.figure(figsize=(10, 10))
#         ax = fig.add_subplot(111, projection=projection)
#         contours = ax.contourf(lons,
#                                lats,
#                                data,
#                                cmap=plt.cm.terrain,
#                                levels=np.linspace(-2500, data.max(), 20),
#                                transform=ccrs.PlateCarree())
#         clip_contours_by_map(contours, map_polygon)
#         draw_map(map_polygon, color='r')
#         ax.coastlines()
#         ax.set_global()

#         savefp = os.path.join('./tmp', f'{projection_name}.png')
#         os.makedirs(os.path.dirname(savefp), exist_ok=True)

#         plt.savefig(savefp, bbox_inches='tight')
#         plt.close()

#     shutil.rmtree('./tmp')
