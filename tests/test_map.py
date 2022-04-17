import os
import pytest
from itertools import combinations, product
from glob import glob
import shutil

import fiona
import numpy as np

from cnmaps import (
    get_adm_maps,
    read_mapjson,
    get_adm_names,
    MapNotFoundError,
    MapPolygon,
)
from cnmaps.sample import load_dem

MAPCASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mapcase")


def test_maskout():
    """测试maskout方法"""
    casefp = os.path.join(MAPCASE_DIR, "maskout.npz")
    mask_array = np.load(casefp)["mask"]

    map_polygon = get_adm_maps(province="宁夏回族自治区", only_polygon=True, record="first")

    lons, lats, data = load_dem()
    data = data[100:150, 150:200]
    lons = lons[100:150, 150:200]
    lats = lats[100:150, 150:200]

    ndata = map_polygon.maskout(lons, lats, data)
    assert (ndata.mask == mask_array).all()

    ndata = map_polygon.maskout(lons, lats, data.data)
    assert (ndata.mask == mask_array).all()


def test_mappolygon_to_file():
    """测试将MapPolygon保存为文件."""
    map_polygon = get_adm_maps(province="黑龙江省", only_polygon=True, record="first")
    os.makedirs("./tmp", exist_ok=True)

    map_polygon.to_file("./tmp/heilongjiang.geojson", meta={"id": 0, "name": "黑龙江"})
    map_polygon.to_file(
        "./tmp/heilongjiang.shp", engine="ESRI shapefile", meta={"id": 0, "name": "黑龙江"}
    )

    fiona.open("./tmp/heilongjiang.geojson")
    fiona.open("./tmp/heilongjiang.shp")

    shutil.rmtree("./tmp")


def test_not_found():
    """测试未找到预定义地图时是否抛出异常."""
    with pytest.raises(MapNotFoundError):
        get_adm_maps(city="纽约市")


def test_get_map_by_fp():
    """测试是否可以按文件路径加载地图."""
    pattern = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "../cnmaps/data/geojson.min/*/*/*/*.geojson",
    )
    fps = sorted(glob(pattern))
    for fp in fps:
        read_mapjson(fp)


def test_map_load():
    """测试各级地图数量是否完整，以及各种规则是否都能加载成功."""
    assert len(get_adm_maps(level="国")) == 2
    assert len(get_adm_maps(level="省")) == 34
    assert len(get_adm_maps(level="市")) == 370
    assert len(get_adm_maps(level="区县")) == 2875

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


def test_map_operator():
    """测试地图之间的操作符是否正常."""

    # 加法操作符(并集)
    assert isinstance(
        get_adm_maps(province="四川省")[0]["geometry"]
        + get_adm_maps(province="重庆市")[0]["geometry"]
        + get_adm_maps(province="贵州省")[0]["geometry"],
        MapPolygon,
    )
    assert isinstance(
        get_adm_maps(province="四川省")[0]["geometry"].union(
            get_adm_maps(province="重庆市")[0]["geometry"]
        )
        + get_adm_maps(province="贵州省")[0]["geometry"],
        MapPolygon,
    )
    assert (
        round(
            (
                get_adm_maps(province="四川省")[0]["geometry"]
                + get_adm_maps(province="重庆市")[0]["geometry"]
                + get_adm_maps(province="贵州省")[0]["geometry"]
            ).area,
            2,
        )
        == 69.49
    )

    assert isinstance(
        get_adm_maps(province="福建省")[0]["geometry"]
        & get_adm_maps(province="广东省")[0]["geometry"],
        MapPolygon,
    )

    assert isinstance(
        get_adm_maps(level="国")[0]["geometry"]
        - get_adm_maps(province="山西省")[0]["geometry"]
        + get_adm_maps(province="山西省")[0]["geometry"],
        MapPolygon,
    )
    assert (
        round(
            (
                get_adm_maps(level="国")[0]["geometry"]
                - get_adm_maps(province="山西省")[0]["geometry"]
            ).area,
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
    extent = (
        113.42394680348974,
        119.51379082389037,
        37.44400605531913,
        43.060480499941455,
    )
    assert get_adm_maps(province="北京市")[0]["geometry"].get_extent() == extent


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
