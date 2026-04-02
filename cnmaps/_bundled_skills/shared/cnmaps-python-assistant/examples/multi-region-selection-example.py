import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_maps, get_adm_maps

selected = get_adm_maps(province=["北京市", "天津市"], level="省")

fig = plt.figure(figsize=(7, 7))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
draw_maps(selected, ax=ax, linewidth=1.2, color="#d1495b")
ax.set_extent([115.0, 119.5, 38.2, 41.5], crs=ccrs.PlateCarree())
plt.show()
