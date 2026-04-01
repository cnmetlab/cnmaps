import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_map, get_adm_maps


province_cases = [
    ("Beijing", "北京市"),
    ("Sichuan", "四川省"),
    ("Guangdong", "广东省"),
    ("Xinjiang", "新疆维吾尔自治区"),
]


fig, axes = plt.subplots(
    2,
    2,
    figsize=(10, 8),
    subplot_kw={"projection": ccrs.PlateCarree()},
)

for ax, (english_name, province_name) in zip(axes.flat, province_cases):
    row = get_adm_maps(province=province_name, record="first")
    geom = row["geometry"]

    draw_map(geom, ax=ax, color="#2a6fdb", linewidth=1.0)
    ax.scatter(
        [row["经度"]],
        [row["纬度"]],
        color="#d62828",
        s=28,
        transform=ccrs.PlateCarree(),
        zorder=5,
    )
    ax.set_title(f"{english_name} centroid", fontsize=12)
    ax.set_extent(geom.get_extent(buffer=1.0), crs=ccrs.PlateCarree())
    ax.gridlines(draw_labels=False, linewidth=0.4, color="#999999", alpha=0.4, linestyle="--")

plt.tight_layout()
plt.savefig("province-centroids-overview.png", bbox_inches="tight")
plt.show()
