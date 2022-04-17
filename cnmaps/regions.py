"""区域地图组合."""

from . import get_adm_maps

region_polygons = {
    "东北地区": (
        get_adm_maps(province="黑龙江省", only_polygon=True, record="first")
        + get_adm_maps(province="吉林省", only_polygon=True, record="first")
        + get_adm_maps(province="辽宁省", only_polygon=True, record="first")
    ),
    "华北地区": (
        get_adm_maps(province="北京市", only_polygon=True, record="first")
        + get_adm_maps(province="天津市", only_polygon=True, record="first")
        + get_adm_maps(province="河北省", only_polygon=True, record="first")
        + get_adm_maps(province="山西省", only_polygon=True, record="first")
        + get_adm_maps(province="内蒙古自治区", only_polygon=True, record="first")
    ),
    "华东地区": (
        get_adm_maps(province="上海市", only_polygon=True, record="first")
        + get_adm_maps(province="江苏省", only_polygon=True, record="first")
        + get_adm_maps(province="浙江省", only_polygon=True, record="first")
        + get_adm_maps(province="安徽省", only_polygon=True, record="first")
        + get_adm_maps(province="江西省", only_polygon=True, record="first")
        + get_adm_maps(province="山东省", only_polygon=True, record="first")
        + get_adm_maps(province="福建省", only_polygon=True, record="first")
        + get_adm_maps(province="台湾省", only_polygon=True, record="first")
    ),
    "华中地区": (
        get_adm_maps(province="河南省", only_polygon=True, record="first")
        + get_adm_maps(province="湖北省", only_polygon=True, record="first")
        + get_adm_maps(province="湖南省", only_polygon=True, record="first")
    ),
    "华南地区": (
        get_adm_maps(province="广东省", only_polygon=True, record="first")
        + get_adm_maps(province="广西壮族自治区", only_polygon=True, record="first")
        + get_adm_maps(province="海南省", only_polygon=True, record="first")
        + get_adm_maps(province="香港特别行政区", only_polygon=True, record="first")
        + get_adm_maps(province="澳门特别行政区", only_polygon=True, record="first")
    ),
    "西南地区": (
        get_adm_maps(province="重庆市", only_polygon=True, record="first")
        + get_adm_maps(province="四川省", only_polygon=True, record="first")
        + get_adm_maps(province="云南省", only_polygon=True, record="first")
        + get_adm_maps(province="贵州省", only_polygon=True, record="first")
        + get_adm_maps(province="西藏自治区", only_polygon=True, record="first")
    ),
    "西北地区": (
        get_adm_maps(province="陕西省", only_polygon=True, record="first")
        + get_adm_maps(province="甘肃省", only_polygon=True, record="first")
        + get_adm_maps(province="青海省", only_polygon=True, record="first")
        + get_adm_maps(province="宁夏回族自治区", only_polygon=True, record="first")
        + get_adm_maps(province="新疆维吾尔自治区", only_polygon=True, record="first")
    ),
    "川渝": (
        get_adm_maps(province="四川省", only_polygon=True, record="first")
        + get_adm_maps(province="重庆市", only_polygon=True, record="first")
    ),
    "江浙沪": (
        get_adm_maps(province="江苏省", only_polygon=True, record="first")
        + get_adm_maps(province="浙江省", only_polygon=True, record="first")
        + get_adm_maps(province="上海市", only_polygon=True, record="first")
    ),
    "长三角": (
        get_adm_maps(province="上海市", only_polygon=True, record="first")
        + get_adm_maps(province="江苏省", only_polygon=True, record="first")
        + get_adm_maps(province="浙江省", only_polygon=True, record="first")
        + get_adm_maps(province="安徽省", only_polygon=True, record="first")
    ),
    "京津冀": (
        get_adm_maps(province="北京市", only_polygon=True, record="first")
        + get_adm_maps(province="天津市", only_polygon=True, record="first")
        + get_adm_maps(province="河北省", only_polygon=True, record="first")
    ),
}
