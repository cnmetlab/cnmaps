import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_maps, get_adm_maps


fig = plt.figure(figsize=(12, 6))
proj = ccrs.PlateCarree(central_longitude=105)
ax = fig.add_subplot(111, projection=proj)
ax.set_global()

china = get_adm_maps(country="中国", level="国", only_polygon=True, record="first")
world = get_adm_maps(level="国", only_polygon=True)

draw_maps(world, ax=ax, linewidth=0.22, color="dimgray")
draw_maps([china], ax=ax, linewidth=0.75, color="crimson")

plt.savefig("world-countries-borders-flat.png", bbox_inches="tight")
plt.show()
