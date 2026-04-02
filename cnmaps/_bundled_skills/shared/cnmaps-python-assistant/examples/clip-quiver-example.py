import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import clip_contours_by_map, clip_quiver_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_wind

lons, lats, u, v = load_wind()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)
speed = (u**2 + v**2) ** 0.5

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
quiver = ax.quiver(lons, lats, u, v, transform=ccrs.PlateCarree(), zorder=2)
contours = ax.contourf(
    lons,
    lats,
    speed,
    levels=np.linspace(speed.min(), speed.max(), 50),
    cmap=plt.cm.RdYlBu_r,
    transform=ccrs.PlateCarree(),
    zorder=1,
)

clip_contours_by_map(contours, china)
clip_quiver_by_map(quiver, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
plt.show()
