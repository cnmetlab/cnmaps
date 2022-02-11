import os
import pytest
from itertools import (combinations, product)

from cnmaps import get_map, MapNotFoundError, MapPolygon
from cnmaps.names import NAMES


def test_not_found():
    """测试未找到预定义地图时是否抛出异常"""
    with pytest.raises(MapNotFoundError):
        get_map('未知省')


def test_get_map_by_fp():
    """测试是否可以按文件路径加载地图"""
    fp = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      '../cnmaps/data/geojson.min/default/Anhui.geojson')
    get_map(fp)
    with pytest.raises(MapNotFoundError):
        get_map('/mnt/foo/geojson')


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
        assert (get_map(one) & get_map(another)).area == 0


def test_province_union():
    """检验所有省量量相加是否会报错"""
    name_keys = set(NAMES['default'].keys()) - set(
        [('南海', '九段线', 'MaritimeBoundary'), ('中国', '国界线', 'ChinaLand'),
         ('中国2', '国界线2', 'ChinaLand2')])
    province_names = [nk[0] for nk in name_keys]

    couples = sorted([couple for couple in combinations(province_names, r=2)])

    for (one, another) in couples:
        get_map(one) + get_map(another)


def test_province_difference():
    """检验所有省量量相减是否会报错"""
    name_keys = set(NAMES['default'].keys()) - set(
        [('南海', '九段线', 'MaritimeBoundary'), ('中国', '国界线', 'ChinaLand'),
         ('中国2', '国界线2', 'ChinaLand2')])
    province_names = [nk[0] for nk in name_keys]

    couples = sorted([couple for couple in product(province_names, repeat=2)])

    for (one, another) in couples:
        get_map(one) - get_map(another)


def test_get_extent():
    extent = [(109.661377, 117.304153, 20.217283, 25.518644332885742),
              (108.66138099701756, 118.3032636214493, 19.21844606457509,
               26.51787665743222),
              (107.66138499403512, 119.30237424289862, 18.219609129150186,
               27.51742946075122),
              (106.66138899105268, 120.30148486434793, 17.220772193725278,
               28.516822024683957),
              (105.66139298807025, 121.30059548579725, 16.22193525830037,
               29.51502654056799)]
    for i in range(5):
        assert get_map('广东').get_extent(buffer=i) == extent[i]
