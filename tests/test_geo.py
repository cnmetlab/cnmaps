from cnmaps.geo import (
    gcj02_to_bd09,
    bd09_to_gcj02,
    wgs84_to_gcj02,
    gcj02_to_wgs84,
    bd09_to_wgs84,
    wgs84_to_bd09,
)


def test_coord_convert():
    """测试坐标点转换"""
    coord = (116.404844, 39.913385)

    cases = [
        [gcj02_to_bd09, (116.4112158902278, 39.919718858979216)],
        [bd09_to_gcj02, (116.39847040646384, 39.90703956272512)],
        [wgs84_to_gcj02, (116.41108813801904, 39.914789143675165)],
        [gcj02_to_wgs84, (116.39859986198095, 39.91198085632483)],
        [bd09_to_wgs84, (116.39222688049742, 39.90563594282613)],
        [wgs84_to_bd09, (116.41747478452356, 39.92107661831225)],
    ]

    for func, result in cases:
        _result = func(*coord)
        assert _result == result


if __name__ == "__main__":
    pass
