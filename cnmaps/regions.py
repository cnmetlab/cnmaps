from . import get_map

REGION = {
    '东三省': (get_map('黑龙江') + get_map('吉林') + get_map('辽宁')),
    '东北': (get_map('黑龙江') + get_map('吉林') + get_map('辽宁')),
    '华北五省': (get_map('北京') + get_map('天津') + get_map('河北') + get_map('山西') +
             get_map('内蒙古')),
    '华北': (get_map('北京') + get_map('天津') + get_map('河北') + get_map('山西') +
           get_map('内蒙古')),
    '华东': (get_map('上海') + get_map('江苏') + get_map('浙江') + get_map('安徽') +
           get_map('江西') + get_map('山东') + get_map('福建') + get_map('台湾')),
    '华中': (get_map('河南') + get_map('湖北') + get_map('湖南')),
    '华南': (get_map('广东') + get_map('广西') + get_map('海南') + get_map('香港') +
           get_map('澳门')),
    '西南': (get_map('重庆') + get_map('四川') + get_map('云南') + get_map('贵州') +
           get_map('西藏')),
    # TODO: 添加西北地区的地图对象
    # 西北地区的范围是：陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区、内蒙古自治区西部（阿拉善盟、巴彦淖尔市、乌海市、鄂尔多斯市）
    '川渝': (get_map('四川') + get_map('重庆')),
    '江浙沪': (get_map('江苏') + get_map('浙江') + get_map('上海')),
    '长三角': (get_map('上海') + get_map('江苏') + get_map('浙江') + get_map('安徽')),
    '京津冀': (get_map('北京') + get_map('天津') + get_map('河北'))
}