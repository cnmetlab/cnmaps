import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import clip_pcolormesh_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_dem

lons, lats, dem = load_dem()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
mesh = ax.pcolormesh(lons, lats, dem, cmap=plt.cm.terrain, vmin=-2800, transform=ccrs.PlateCarree())

clip_pcolormesh_by_map(mesh, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
ax.set_extent(china.get_extent(), crs=ccrs.PlateCarree())
plt.show()
