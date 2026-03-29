import os
import pytest
from itertools import combinations, product
from glob import glob

import fiona
import numpy as np
import shapely.geometry as sgeom
from geopandas import GeoDataFrame
from shapely.geometry.base import BaseGeometry

from cnmaps import (
    get_adm_maps,
    get_available_data_providers,
    get_data_provider,
    read_mapjson,
    get_adm_names,
    MapNotFoundError,
    MapPolygon,
)
from cnmaps.sample import load_dem
import cnmaps.provider as provider_module

MAPCASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mapcase")

# 与 tests/mapcase/china-maskout-*-fast.npy 一致；修改尺寸或遮罩逻辑后需在本地重新生成这两个 npy
MAKE_MASKOUT_FAST_GRID_SIZE = 100


def test_maskout():
    """测试maskout方法"""
    casefp = os.path.join(MAPCASE_DIR, "ningxia-maskout-gcj02.npy")
    mask_array = np.load(casefp)

    map_polygon = get_adm_maps(
        province="宁夏回族自治区", only_polygon=True, record="first", wgs84=False
    )

    lons, lats, data = load_dem()
    data = data[100:150, 150:200]
    lons = lons[100:150, 150:200]
    lats = lats[100:150, 150:200]

    ndata = map_polygon.maskout(lons, lats, data)
    assert (ndata.mask == mask_array).all()

    ndata = map_polygon.maskout(lons, lats, data.data)
    assert (ndata.mask == mask_array).all()

    casefp = os.path.join(MAPCASE_DIR, "ningxia-maskout-wgs84.npy")
    mask_array = np.load(casefp)

    map_polygon = get_adm_maps(
        province="宁夏回族自治区", only_polygon=True, record="first", wgs84=True
    )

    lons, lats, data = load_dem()
    data = data[100:150, 150:200]
    lons = lons[100:150, 150:200]
    lats = lats[100:150, 150:200]

    ndata = map_polygon.maskout(lons, lats, data)
    assert (ndata.mask == mask_array).all()

    ndata = map_polygon.maskout(lons, lats, data.data)
    assert (ndata.mask == mask_array).all()


def test_make_maskout_array():
    """测试 make_maskout_array（较小网格，便于 CI 快速跑完）。"""
    n = MAKE_MASKOUT_FAST_GRID_SIZE
    casefp = os.path.join(MAPCASE_DIR, "china-maskout-gcj02-fast.npy")
    mask_array = np.load(casefp)

    lon = np.linspace(60, 150, n)
    lat = np.linspace(0, 60, n)
    lons, lats = np.meshgrid(lon, lat)

    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=False)
    china_maskout_array = china.make_mask_array(lons, lats)

    assert (china_maskout_array == mask_array).all()

    casefp = os.path.join(MAPCASE_DIR, "china-maskout-wgs84-fast.npy")
    mask_array = np.load(casefp)

    lon = np.linspace(60, 150, n)
    lat = np.linspace(0, 60, n)
    lons, lats = np.meshgrid(lon, lat)

    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=True)
    china_maskout_array = china.make_mask_array(lons, lats)

    assert (china_maskout_array == mask_array).all()

    with pytest.raises(ValueError):
        china.make_mask_array(lon, lat)

    with pytest.raises(ValueError):
        china.make_mask_array(lons, lats[:-1])


@pytest.mark.heavy
def test_make_maskout_array_full():
    """全分辨率 1000×1000 与黄金文件比对；请在本地或高性能环境运行全量 pytest。"""
    casefp = os.path.join(MAPCASE_DIR, "china-maskout-gcj02.npy")
    mask_array = np.load(casefp)

    lon = np.linspace(60, 150, 1000)
    lat = np.linspace(0, 60, 1000)
    lons, lats = np.meshgrid(lon, lat)

    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=False)
    china_maskout_array = china.make_mask_array(lons, lats)

    assert (china_maskout_array == mask_array).all()

    casefp = os.path.join(MAPCASE_DIR, "china-maskout-wgs84.npy")
    mask_array = np.load(casefp)

    lon = np.linspace(60, 150, 1000)
    lat = np.linspace(0, 60, 1000)
    lons, lats = np.meshgrid(lon, lat)

    china = get_adm_maps(level="国", record="first", only_polygon=True, wgs84=True)
    china_maskout_array = china.make_mask_array(lons, lats)

    assert (china_maskout_array == mask_array).all()


def test_mappolygon_to_file():
    """测试将MapPolygon保存为文件."""
    map_polygon = get_adm_maps(province="黑龙江省", only_polygon=True, record="first")
    os.makedirs("./tmp/test_mappolygon_to_file", exist_ok=True)

    map_polygon.to_file(
        "./tmp/test_mappolygon_to_file/heilongjiang.geojson",
        meta={"id": 0, "name": "黑龙江"},
    )
    map_polygon.to_file(
        "./tmp/test_mappolygon_to_file/heilongjiang.shp",
        engine="ESRI shapefile",
        meta={"id": 0, "name": "黑龙江"},
    )

    fiona.open("./tmp/test_mappolygon_to_file/heilongjiang.geojson")
    fiona.open("./tmp/test_mappolygon_to_file/heilongjiang.shp")


def test_not_found():
    """测试未找到预定义地图时是否抛出异常."""
    with pytest.raises(MapNotFoundError):
        get_adm_maps(city="纽约市")


def test_get_map_by_fp():
    """测试是否可以按文件路径加载地图."""
    pattern = os.path.join(
        get_data_provider().get_dataset_root("administrative"),
        "*/*/*.geojson",
    )
    fps = sorted(glob(pattern))
    for fp in fps:
        read_mapjson(fp)


def test_data_provider_layout():
    """测试数据提供者可以解析各类数据目录."""
    provider = get_data_provider()
    assert provider.name == "cnmaps-data"
    assert os.path.exists(provider.get_index_db("administrative"))
    assert os.path.isdir(provider.get_dataset_root("administrative"))
    assert os.path.isdir(provider.get_dataset_root("geography"))
    assert os.path.exists(provider.get_sample_path("china-dem.nc"))


def test_default_provider_is_official():
    provider = get_data_provider()
    assert provider.name == "cnmaps-data"
    assert "cnmaps-data" in get_available_data_providers()


def test_get_data_provider_can_select_by_name(monkeypatch):
    class DummyProvider:
        def __init__(self, name):
            self.name = name

    monkeypatch.setattr(
        provider_module,
        "_discover_data_providers",
        lambda: {
            "cnmaps-data": DummyProvider("cnmaps-data"),
            "mydata": DummyProvider("mydata"),
        },
    )

    assert get_data_provider().name == "cnmaps-data"
    assert get_data_provider("mydata").name == "mydata"
    assert get_available_data_providers() == ("cnmaps-data", "mydata")

    with pytest.raises(ImportError, match="my-missing-data"):
        get_data_provider("my-missing-data")


def test_get_adm_maps_accepts_provider_argument(monkeypatch):
    selected = {}

    class DummyProvider:
        def __init__(self, name="mydata"):
            self.name = name

        def get_index_db(self, dataset):
            selected["dataset"] = dataset
            return "/tmp/mydata.db"

        def resolve_dataset_path(self, dataset, relative_path):
            selected["provider"] = "mydata"
            return relative_path

    monkeypatch.setattr("cnmaps.maps.get_data_provider", lambda name=None: DummyProvider())
    monkeypatch.setattr(
        "cnmaps.maps._query_adm_metadata",
        lambda **kwargs: (("中华人民共和国", "北京市", "北京市", None, "市", "高德", "陆地", "fake.geojson"),),
    )
    monkeypatch.setattr(
        "cnmaps.maps.read_mapjson",
        lambda fp, wgs84=True: MapPolygon(
            [sgeom.Polygon([(0, 0), (1, 0), (1, 1), (0, 0)])]
        ),
    )

    records = get_adm_maps(city="北京市", provider="mydata", simplify=False)
    assert records[0]["市"] == "北京市"
    assert selected == {"dataset": "administrative", "provider": "mydata"}


def test_map_load():
    """测试各级地图数量是否完整，以及各种规则是否都能加载成功."""
    assert len(get_adm_maps(level="国")) == 2
    assert len(get_adm_maps(level="省")) == 34
    assert len(get_adm_maps(level="市")) == 370
    assert len(get_adm_maps(level="区县")) == 2875

    assert isinstance(get_adm_maps(level="国", engine="geopandas"), GeoDataFrame)
    assert isinstance(get_adm_maps(level="省", engine="geopandas"), GeoDataFrame)
    assert isinstance(get_adm_maps(level="市", engine="geopandas"), GeoDataFrame)
    assert isinstance(get_adm_maps(level="区县", engine="geopandas"), GeoDataFrame)

    assert len(get_adm_maps(level="国", engine="geopandas")) == 2
    assert len(get_adm_maps(level="省", engine="geopandas")) == 34
    assert len(get_adm_maps(level="市", engine="geopandas")) == 370
    assert len(get_adm_maps(level="区县", engine="geopandas")) == 2875

    beijing = get_adm_maps(province="北京市")[0]
    assert (
        beijing["省/直辖市"] == "北京市"
        and beijing["市"] is None
        and beijing["区/县"] is None
        and beijing["级别"] == "省"
    )

    beijing = get_adm_maps(city="北京市")[0]
    assert beijing["市"] == "北京市" and beijing["区/县"] is None and beijing["级别"] == "市"

    chaoyang = get_adm_maps(district="朝阳区")
    assert len(chaoyang) == 2
    beijing_chaoyang = chaoyang[0]
    assert beijing_chaoyang["区/县"] == "朝阳区" and beijing_chaoyang["级别"] == "区县"

    assert len(get_adm_maps(city="北京市", district="朝阳区")) == 1
    assert len(get_adm_maps(city="北京市", level="区县")) == 16
    assert len(get_adm_maps(province="河南省", level="市")) == 18
    assert len(get_adm_maps(city="郑州市", level="区县")) == 12

    assert len(get_adm_maps(city="北京市", district="朝阳区", engine="geopandas")) == 1
    assert len(get_adm_maps(city="北京市", level="区县", engine="geopandas")) == 16
    assert len(get_adm_maps(province="河南省", level="市", engine="geopandas")) == 18
    assert len(get_adm_maps(city="郑州市", level="区县", engine="geopandas")) == 12

    with pytest.raises(MapNotFoundError):
        get_adm_maps(country="法国")

    with pytest.raises(MapNotFoundError):
        get_adm_maps(province="麻省")

    with pytest.raises(MapNotFoundError):
        get_adm_maps(city="纽约市")

    with pytest.raises(MapNotFoundError):
        get_adm_maps(district="曼哈顿")

    with pytest.raises(ValueError):
        get_adm_maps(level="郡")

    get_adm_maps(only_polygon=True, engine="geopandas")


def test_map_operator():
    """测试地图之间的操作符是否正常."""

    china = get_adm_maps(level="国", wgs84=True)[0]["geometry"]
    china_gcj02 = get_adm_maps(level="国", wgs84=False)[0]["geometry"]
    sichuan = get_adm_maps(province="四川省")[0]["geometry"]
    sichuan_gcj02 = get_adm_maps(province="四川省", wgs84=False)[0]["geometry"]
    chongqing = get_adm_maps(province="重庆市")[0]["geometry"]
    chongqing_gcj02 = get_adm_maps(province="重庆市", wgs84=False)[0]["geometry"]
    guizhou = get_adm_maps(province="贵州省")[0]["geometry"]
    guizhou_gcj02 = get_adm_maps(province="贵州省", wgs84=False)[0]["geometry"]
    fujian = get_adm_maps(province="福建省")[0]["geometry"]
    guangdong = get_adm_maps(province="广东省")[0]["geometry"]
    shanxi = get_adm_maps(province="山西省")[0]["geometry"]
    shanxi_gcj02 = get_adm_maps(province="山西省", wgs84=False)[0]["geometry"]

    # 加法操作符(并集)
    assert isinstance(
        sichuan + chongqing + guizhou,
        MapPolygon,
    )
    assert isinstance(
        sichuan.union(chongqing) + guizhou,
        MapPolygon,
    )
    assert (
        round(
            (sichuan_gcj02 + chongqing_gcj02 + guizhou_gcj02).area,
            2,
        )
        == 69.49
    )

    assert (
        round(
            (sichuan + chongqing + guizhou).area,
            2,
        )
        == 69.45
    )

    assert isinstance(
        fujian & guangdong,
        MapPolygon,
    )

    assert isinstance(
        china - shanxi + shanxi,
        MapPolygon,
    )
    assert (
        round(
            (china - shanxi).area,
            2,
        )
        == 949.08
    )
    assert (
        round(
            (china_gcj02 - shanxi_gcj02).area,
            2,
        )
        == 949.32
    )


def test_province_orthogonality():
    """检验省边界地图的正交性."""
    provinces_meta = get_adm_maps(level="省")
    province_names = [pm["省/直辖市"] for pm in provinces_meta]

    couples = sorted([couple for couple in combinations(province_names, r=2)])

    for (one, another) in couples:
        assert (
            get_adm_maps(province=one)[0]["geometry"]
            & get_adm_maps(province=another)[0]["geometry"]
        ).area == 0


def test_city_orthogonality():
    """检验市边界地图的正交性."""
    provinces_meta = get_adm_maps(level="省")
    province_names = [pm["省/直辖市"] for pm in provinces_meta]

    for pn in province_names:
        if pn in ["台湾省", "香港特别行政区", "澳门特别行政区"]:
            continue
        city_meta = get_adm_maps(province=pn, level="市")
        city_names = [cm["市"] for cm in city_meta]
        couples = sorted([couple for couple in combinations(city_names, r=2)])

        # FIXME: 这里是一些存在拓扑错误的市县，检查时暂时跳过，未来可能需要人工检查和修正
        problem_set = [
            sorted(("咸宁市", "仙桃市")),
            sorted(("伊犁哈萨克自治州", "塔城地区")),
            sorted(("克拉玛依市", "塔城地区")),
            sorted(("博尔塔拉蒙古自治州", "双河市")),
            sorted(("和田地区", "昆玉市")),
            sorted(("喀什地区", "图木舒克市")),
            sorted(("塔城地区", "胡杨河市")),
            sorted(("塔城地区", "阿勒泰地区")),
            sorted(("巴音郭楞蒙古自治州", "铁门关市")),
            sorted(("阿克苏地区", "阿拉尔市")),
            sorted(("阿勒泰地区", "北屯市")),
        ]

        for (one, another) in couples:
            if sorted([one, another]) in problem_set:
                continue
            area = (
                get_adm_maps(city=one)[0]["geometry"]
                & get_adm_maps(city=another)[0]["geometry"]
            ).area
            assert round(area, 4) == 0


def test_province_union():
    """检验所有省两两相加是否会报错."""
    provinces_meta = get_adm_maps(level="省")
    province_names = [pm["省/直辖市"] for pm in provinces_meta]

    couples = sorted([couple for couple in combinations(province_names, r=2)])

    for (one, another) in couples:
        _ = (
            get_adm_maps(province=one)[0]["geometry"]
            + get_adm_maps(province=another)[0]["geometry"]
        )


def test_province_difference():
    """检验所有省两两相减是否会报错."""
    provinces_meta = get_adm_maps(level="省")
    province_names = [pm["省/直辖市"] for pm in provinces_meta]

    couples = sorted([couple for couple in product(province_names, repeat=2)])

    for (one, another) in couples:
        _ = (
            get_adm_maps(province=one)[0]["geometry"]
            - get_adm_maps(province=another)[0]["geometry"]
        )


def test_get_extent():
    """测试get_extent函数的返回结果是否符合预期."""
    gcj02_extent = (
        113.42394680348974,
        119.51379082389037,
        37.44400605531913,
        43.060480499941455,
    )

    wgs84_extent = (
        113.41739858502812,
        119.50730212806607,
        37.44275317420805,
        43.05884396835136,
    )
    assert (
        get_adm_maps(province="北京市", wgs84=False)[0]["geometry"].get_extent()
        == gcj02_extent
    )
    assert (
        get_adm_maps(province="北京市", wgs84=True)[0]["geometry"].get_extent()
        == wgs84_extent
    )


def test_only_polygon_and_record():
    """测试only_polygon参数和record参数功能."""
    polygons = get_adm_maps(city="北京市", record="all", level="区县", only_polygon=True)
    assert isinstance(polygons, list)
    assert len(polygons) == 16
    for p in polygons:
        assert isinstance(p, MapPolygon)

    polygon = get_adm_maps(city="北京市", record="first", level="区县", only_polygon=True)
    assert isinstance(polygon, MapPolygon)

    meta = get_adm_maps(city="北京市", record="first", level="市")
    assert isinstance(meta, dict)


def test_mappolygon_shapely2_protocols():
    """兼容 shapely>=2.0 后不再自动暴露的 MultiPolygon 协议."""
    polygon = get_adm_maps(city="北京市", record="first", level="市", only_polygon=True)

    assert len(polygon) >= 1
    assert list(polygon)
    assert polygon[0].geom_type == "Polygon"
    assert polygon == polygon.geom
    assert polygon.__geo_interface__["type"] == "MultiPolygon"


def test_get_adm_maps_geopandas_geometry_is_native():
    """GeoDataFrame 应始终持有原生 Shapely geometry."""
    gdf = get_adm_maps(city="北京市", level="区县", engine="geopandas")

    assert isinstance(gdf.iloc[0]["geometry"], BaseGeometry)
    assert not isinstance(gdf.iloc[0]["geometry"], MapPolygon)


def test_get_adm_names():
    """测试是否能正确获取地名."""
    names = [
        "东城区",
        "西城区",
        "朝阳区",
        "丰台区",
        "石景山区",
        "海淀区",
        "门头沟区",
        "房山区",
        "通州区",
        "顺义区",
        "昌平区",
        "大兴区",
        "怀柔区",
        "平谷区",
        "密云区",
        "延庆区",
    ]
    assert sorted(get_adm_names(city="北京市", level="区县")) == sorted(names)
    assert len(get_adm_names(level="市")) == 370
    assert sorted(get_adm_names(level="市")[:5]) == sorted(
        ["北京市", "天津市", "石家庄市", "唐山市", "秦皇岛市"]
    )
    assert len(get_adm_names(level="省")) == 34
    assert sorted(get_adm_names(level="省")[:5]) == sorted(
        ["北京市", "天津市", "河北省", "山西省", "内蒙古自治区"]
    )


def test_regions():
    """测试区域组合."""
    AERAS = {
        "东北地区": 92.0,
        "华北地区": 168.0,
        "华东地区": 80.0,
        "华中地区": 53.0,
        "华南地区": 41.0,
        "西南地区": 218.0,
        "西北地区": 314.0,
        "川渝": 53.0,
        "江浙沪": 21.0,
        "长三角": 34.0,
        "京津冀": 23.0,
    }
    from cnmaps.regions import region_polygons

    for region_name, area in AERAS.items():
        assert round(region_polygons[region_name].area, 0) == area


def test_inner_duplicate():
    """测试内部多边形重复问题."""
    union_maps = [
        get_adm_maps(province="黑龙江省", only_polygon=True, record="first")
        + get_adm_maps(province="内蒙古自治区", only_polygon=True, record="first"),
        get_adm_maps(province="天津市", only_polygon=True, record="first")
        + get_adm_maps(province="河北省", only_polygon=True, record="first"),
        get_adm_maps(city="北京市", district="朝阳区", only_polygon=True, record="first")
        + get_adm_maps(district="顺义区", only_polygon=True, record="first"),
    ]

    for map_polygon in union_maps:
        polygons = list(map_polygon)
        couples = [couple for couple in product(polygons, repeat=2)]

        for one, other in couples:
            if one.contains(other) and one != other:
                assert False


if __name__ == "__main__":
    pass
