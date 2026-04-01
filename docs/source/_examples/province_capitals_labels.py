import cartopy.crs as ccrs
import matplotlib.pyplot as plt

from cnmaps import draw_maps, get_adm_maps


province_capitals = [
    ("北京市", "北京市", "Beijing"),
    ("天津市", "天津市", "Tianjin"),
    ("河北省", "石家庄市", "Shijiazhuang"),
    ("山西省", "太原市", "Taiyuan"),
    ("内蒙古自治区", "呼和浩特市", "Hohhot"),
    ("辽宁省", "沈阳市", "Shenyang"),
    ("吉林省", "长春市", "Changchun"),
    ("黑龙江省", "哈尔滨市", "Harbin"),
    ("上海市", "上海市", "Shanghai"),
    ("江苏省", "南京市", "Nanjing"),
    ("浙江省", "杭州市", "Hangzhou"),
    ("安徽省", "合肥市", "Hefei"),
    ("福建省", "福州市", "Fuzhou"),
    ("江西省", "南昌市", "Nanchang"),
    ("山东省", "济南市", "Jinan"),
    ("河南省", "郑州市", "Zhengzhou"),
    ("湖北省", "武汉市", "Wuhan"),
    ("湖南省", "长沙市", "Changsha"),
    ("广东省", "广州市", "Guangzhou"),
    ("广西壮族自治区", "南宁市", "Nanning"),
    ("海南省", "海口市", "Haikou"),
    ("重庆市", "重庆市", "Chongqing"),
    ("四川省", "成都市", "Chengdu"),
    ("贵州省", "贵阳市", "Guiyang"),
    ("云南省", "昆明市", "Kunming"),
    ("西藏自治区", "拉萨市", "Lhasa"),
    ("陕西省", "西安市", "Xi'an"),
    ("甘肃省", "兰州市", "Lanzhou"),
    ("青海省", "西宁市", "Xining"),
    ("宁夏回族自治区", "银川市", "Yinchuan"),
    ("新疆维吾尔自治区", "乌鲁木齐市", "Urumqi"),
]

fig = plt.figure(figsize=(12, 10), dpi=180)
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level="省"), ax=ax, linewidth=0.7, color="#4d4d4d")
ax.set_extent([73, 136, 16, 54], crs=ccrs.PlateCarree())

for province_name, city_name, english_name in province_capitals:
    row = get_adm_maps(city=city_name, record="first")
    lon = row.longitude
    lat = row.latitude

    if english_name == "Beijing":
        ax.scatter(
            [lon],
            [lat],
            color="#d62828",
            s=70,
            marker="*",
            transform=ccrs.PlateCarree(),
            zorder=6,
        )
    else:
        ax.scatter(
            [lon],
            [lat],
            color="#d62828",
            s=10,
            transform=ccrs.PlateCarree(),
            zorder=5,
        )

    ax.annotate(
        english_name,
        xy=(lon, lat),
        xycoords=ccrs.PlateCarree()._as_mpl_transform(ax),
        xytext=(0, 6),
        textcoords="offset points",
        ha="center",
        va="bottom",
        fontsize=7,
        color="#111111",
        zorder=7,
    )

ax.gridlines(draw_labels=False, linewidth=0.35, color="#999999", alpha=0.35, linestyle="--")
plt.tight_layout()
plt.savefig("province-capitals-labeled.png", bbox_inches="tight")
plt.show()
