import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_maps, get_adm_maps

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

china = get_adm_maps(country="中国", level="国")
draw_maps(china, ax=ax, linewidth=1.0, color="#1f4e79")
ax.set_extent([73, 136, 16, 54], crs=ccrs.PlateCarree())
plt.show()
