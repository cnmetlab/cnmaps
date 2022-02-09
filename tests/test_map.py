import pytest
from itertools import combinations

from cnmaps import get_map, MapNotFoundError, MapPolygon
from cnmaps.names import NAMES


def test_not_found():
    """测试未找到预定义地图时是否抛出异常"""
    with pytest.raises(MapNotFoundError):
        get_map('未知省')


def test_can_get_all_maps():
    """遍历测试所有地图的加载"""
    for map_set_name, map_set in NAMES.items():
        for key in map_set.keys():
            get_map(key[0], map_set=map_set_name)


def test_map_operator():
    """测试地图之间的操作符是否正常"""

    # 加法操作符(并集)
    assert isinstance(
        get_map('四川') + get_map('重庆') + get_map('贵州'), MapPolygon)
    assert isinstance(
        get_map('四川').union(get_map('重庆')) + get_map('贵州'), MapPolygon)
    assert round((get_map('四川') + get_map('重庆') + get_map('贵州')).area,
                 2) == 69.22

    # 逻辑与操作符(交集)
    assert isinstance(
        get_map('青藏高原', map_set='geography') & get_map('四川'), MapPolygon)
    assert round((get_map('青藏高原', map_set='geography') & get_map('四川')).area,
                 2) == 23.92
    assert isinstance(get_map('福建') & get_map('广东'), MapPolygon)

    # & 和 + 混合
    assert isinstance(
        (get_map('青藏高原', map_set='geography') & get_map('四川')) + get_map('云南'),
        MapPolygon)
    assert isinstance(
        get_map('青藏高原', map_set='geography').intersection(get_map('四川')) +
        get_map('云南') + get_map('广西'), MapPolygon)

    # 减法操作符(差集)
    assert isinstance(
        get_map('青藏高原', map_set='geography') - get_map('四川') + get_map('云南'),
        MapPolygon)
    assert isinstance(
        get_map('青藏高原', map_set='geography').difference(get_map('四川')) +
        get_map('云南'), MapPolygon)
    assert isinstance(
        get_map('中国') - get_map('山西') + get_map('山西'), MapPolygon)
    assert round((get_map('中国') - get_map('山西')).area, 2) == 945.33


def test_province_orthogonality():
    """检验省边界地图的正交性"""
    name_keys = set(NAMES['default'].keys()) - set(
        [('南海', '九段线', 'MaritimeBoundary'), ('中国', '国界线', 'ChinaLand'),
         ('中国2', '国界线2', 'ChinaLand2')])
    province_names = [nk[0] for nk in name_keys]

    couples = sorted([couple for couple in combinations(province_names, r=2)])

    for (one, another) in couples:
        print(one, another)
        assert (get_map(one) & get_map(another)).area == 0
