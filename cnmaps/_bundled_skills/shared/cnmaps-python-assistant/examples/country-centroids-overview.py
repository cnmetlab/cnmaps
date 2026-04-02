import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_map, get_adm_maps

country_cases = [
    ("China", "中国"),
    ("Japan", "日本"),
    ("India", "印度"),
    ("Germany", "德国"),
]

fig, axes = plt.subplots(
    2,
    2,
    figsize=(10, 8),
    subplot_kw={"projection": ccrs.PlateCarree()},
)

for ax, (english_name, country_name) in zip(axes.flat, country_cases):
    record = get_adm_maps(country=country_name, level="国", record="first")
    geometry = record.geometry

    draw_map(geometry, ax=ax, color="#2a6fdb", linewidth=1.0)
    ax.scatter(
        [record.longitude],
        [record.latitude],
        color="#d62828",
        s=28,
        transform=ccrs.PlateCarree(),
        zorder=5,
    )
    ax.set_title(f"{english_name} centroid", fontsize=12)
    ax.set_extent(geometry.get_extent(buffer=2.0), crs=ccrs.PlateCarree())
    ax.gridlines(draw_labels=False, linewidth=0.4, color="#999999", alpha=0.4, linestyle="--")

plt.tight_layout()
plt.show()
