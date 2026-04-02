import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_map, get_adm_maps

record = get_adm_maps(province="四川省", record="first")

fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
draw_map(record.geometry, ax=ax, linewidth=1.0, color="#2a6fdb")
ax.scatter(record.longitude, record.latitude, color="crimson", s=20, transform=ccrs.PlateCarree())
ax.text(record.longitude, record.latitude, "Sichuan", transform=ccrs.PlateCarree(), ha="center", va="bottom")
ax.set_extent(record.geometry.get_extent(buffer=1.0), crs=ccrs.PlateCarree())
plt.show()
