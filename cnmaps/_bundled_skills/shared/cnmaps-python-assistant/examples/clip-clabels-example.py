import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import clip_clabels_by_map, clip_contours_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_dem

lons, lats, dem = load_dem()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
contours = ax.contour(
    lons,
    lats,
    dem,
    levels=np.linspace(-2500, dem.max(), 20),
    cmap=plt.cm.terrain,
    transform=ccrs.PlateCarree(),
)

clip_contours_by_map(contours, china)
clabels = ax.clabel(contours, levels=contours.levels, colors="k", fmt="%i", inline=True)
clip_clabels_by_map(clabels, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
plt.show()
