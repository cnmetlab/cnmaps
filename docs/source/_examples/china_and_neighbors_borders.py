import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_maps, get_adm_maps


fig = plt.figure(figsize=(11, 9))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
ax.set_extent([72, 136, 15, 55], crs=ccrs.PlateCarree())

china = get_adm_maps(country="中国", level="国", only_polygon=True, record="first")
world = get_adm_maps(level="国", only_polygon=True)

draw_maps(world, ax=ax, linewidth=0.7, color="steelblue")
draw_maps([china], ax=ax, linewidth=1.1, color="darkred")

plt.savefig("china-and-neighbors-borders.png", bbox_inches="tight")
plt.show()
