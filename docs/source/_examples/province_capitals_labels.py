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

label_offsets = {
    "Beijing": (1.0, 1.0),
    "Tianjin": (1.0, -0.3),
    "Shijiazhuang": (-2.2, -0.3),
    "Taiyuan": (-2.2, 0.5),
    "Hohhot": (1.0, 0.7),
    "Shenyang": (1.0, 0.5),
    "Changchun": (1.0, 0.7),
    "Harbin": (1.0, 0.9),
    "Shanghai": (1.0, -0.2),
    "Nanjing": (1.0, 0.4),
    "Hangzhou": (1.0, 0.2),
    "Hefei": (-2.0, 0.6),
    "Fuzhou": (1.0, 0.2),
    "Nanchang": (-2.0, -0.2),
    "Jinan": (-2.0, 0.8),
    "Zhengzhou": (-2.0, 0.4),
    "Wuhan": (1.0, 0.4),
    "Changsha": (1.0, -0.4),
    "Guangzhou": (1.0, -0.3),
    "Nanning": (-2.0, -0.6),
    "Haikou": (0.8, -0.8),
    "Chongqing": (-2.1, 0.2),
    "Chengdu": (-2.0, -0.2),
    "Guiyang": (0.8, -0.8),
    "Kunming": (-2.0, -0.4),
    "Lhasa": (1.0, -0.4),
    "Xi'an": (1.0, 0.4),
    "Lanzhou": (1.0, 0.3),
    "Xining": (-2.0, 0.2),
    "Yinchuan": (0.8, 0.5),
    "Urumqi": (1.0, 0.5),
}


fig = plt.figure(figsize=(12, 10), dpi=180)
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level="省"), ax=ax, linewidth=0.7, color="#4d4d4d")
ax.set_extent([73, 136, 16, 54], crs=ccrs.PlateCarree())

for province_name, city_name, english_name in province_capitals:
    row = get_adm_maps(city=city_name, record="first")
    lon = row["经度"]
    lat = row["纬度"]

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

    dx, dy = label_offsets.get(english_name, (0.6, 0.4))
    ax.text(
        lon + dx,
        lat + dy,
        english_name,
        fontsize=7,
        color="#111111",
        transform=ccrs.PlateCarree(),
        zorder=7,
    )

ax.gridlines(draw_labels=False, linewidth=0.35, color="#999999", alpha=0.35, linestyle="--")
plt.tight_layout()
plt.savefig("province-capitals-labeled.png", bbox_inches="tight")
plt.show()
