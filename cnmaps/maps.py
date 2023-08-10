"""地图类模块."""

import os
import sqlite3
import copy
from itertools import product

import numpy as np
import shapely.geometry as sgeom
from shapely.geometry import mapping
from shapely.vectorized import contains
import fiona
import geojson
import orjson


from .geo import gcj02_to_wgs84

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data/")
DB_FILE = os.path.join(DATA_DIR, "index.db")


class MapNotFoundError(Exception):
    """地图无法找到的错误"""

    pass


class MapPolygon(sgeom.MultiPolygon):
    """
    地图多边形类

    该类是基于shapely.geometry.MultiPolygon的自定义类,
    并实现了对于加号操作符的支持.
    """

    def __init__(self, *args, **kwargs):
        """实例化MapPolygon"""
        super().__init__(*args, **kwargs)

    def __add__(self, other):
        """+ 支持."""
        return self.union(other)

    def __and__(self, other):
        """& 支持."""
        return self.intersection(other)

    def __sub__(self, other):
        """- 支持."""
        return self.difference(other)

    @staticmethod
    def drop_inner_duplicate(map_polygon: sgeom.MultiPolygon):
        """
        清理内部重复多边形

        参数:
            map_polygon (sgeom.MultiPolygon): 地图边界对象

        返回值:
            MapPolygon: 清理后的地图边界对象
        """
        polygons = list(map_polygon.geoms)
        couples = [couple for couple in product(polygons, repeat=2)]

        for one, other in couples:
            if one.contains(other) and one != other:
                try:
                    polygons.remove(other)
                except ValueError:
                    pass

        return MapPolygon(polygons)

    def union(self, other):
        """并集."""
        union_result = super().union(other)
        if isinstance(union_result, sgeom.Polygon):
            return MapPolygon([union_result])
        elif isinstance(union_result, sgeom.MultiPolygon):
            return self.drop_inner_duplicate(MapPolygon(union_result))

    def difference(self, other):
        """差集."""
        difference_result = super().difference(other)
        if isinstance(difference_result, sgeom.Polygon):
            return MapPolygon([difference_result])
        elif isinstance(difference_result, sgeom.MultiPolygon):
            return self.drop_inner_duplicate(MapPolygon(difference_result))

    def intersection(self, other):
        """交集."""
        intersection_result = super().intersection(other)
        if isinstance(intersection_result, sgeom.Polygon):
            return MapPolygon([intersection_result])
        elif isinstance(intersection_result, sgeom.MultiPolygon):
            return self.drop_inner_duplicate(MapPolygon(intersection_result))
        else:
            return MapPolygon()

    def get_extent(self, buffer=2):
        """
        获取范围坐标

        参数:
            buffer (int, 可选): 外扩缓冲边缘, 单位为°, 该值越大, 所取的范围越大. 默认为 2.

        返回值:
            tuple: 坐标范围点, 该值可直接传入ax.set_extent使用
        """
        left, lower, right, upper = self.buffer(buffer).bounds
        return (left, right, lower, upper)

    def to_file(
        self,
        savefp: str,
        engine: str = "GeoJSON",
        meta: dict = {"id": None, "name": None},
        encoding: str = "utf-8",
    ):
        """
        存储为文件

        参数:
            savefp (str): 保存路径
            engine (str, 可选): 存储引擎，支持的选项为'ESRI Shapefile'和'GeoJSON'.
                                    默认为 'GeoJSON'.
            meta (dict, 可选): 元信息. 默认为 {'id': 0, 'name': 'unknown'}.
            encoding (str, 可选): 编码类型. 默认为 'utf-8'.
        """

        if engine.lower() == "esri shapefile":

            schema = {
                "geometry": "MultiPolygon",
                "properties": {"id": "int", "name": "str"},
            }

            with fiona.open(
                savefp,
                mode="w",
                driver="ESRI Shapefile",
                schema=schema,
                encoding=encoding,
            ) as layer:
                geometry = mapping(self)
                feature = {"geometry": geometry, "properties": meta}
                layer.write(feature)

        elif engine.lower() == "geojson":
            feature = mapping(self)
            feature.update({"properties": meta})

            with open(savefp, "w") as f:
                geojson.dump(feature, f)

    def maskout(self, lons: np.ndarray, lats: np.ndarray, data: np.ndarray):
        """
        对边界以外的数据进行遮罩处理

        Args:
            lons (np.ndarray): 经度矩阵
            lats (np.ndarray): 纬度矩阵
            data (np.ndarray): 数据矩阵

        Returns:
            np.ndarray: 遮罩后的数据矩阵
        """

        ndata = copy.deepcopy(data)

        if not isinstance(ndata, np.ma.MaskedArray):
            ndata = np.ma.MaskedArray(ndata)

        ndata.mask = self.make_mask_array(lons, lats)

        return ndata

    def make_mask_array(self, lons: np.ndarray, lats: np.ndarray):
        """
        生成边界以外的遮罩（掩膜）数组
        Args:
            lons (np.ndarray): 经度矩阵（2维）
            lats (np.ndarray): 纬度矩阵（2维）
        Returns:
            np.ndarray: 遮罩（掩膜）数组
        """
        lons = np.atleast_1d(lons)
        lats = np.atleast_1d(lats)

        if len(lons.shape) != 2 or len(lats.shape) != 2:
            raise ValueError("x或y不是2维数组")

        if lons.shape != lats.shape:
            raise ValueError("x和y的形状不匹配")

        return ~contains(self, lons, lats)


def read_mapjson(fp, wgs84=True):
    """
    读取geojson地图边界文件

    参数:
        fp (str, 可选): geojson文件名.
        wgs84 (bool, 可选): 是否使用 WGS84 坐标

    返回值:
        MapPolygon: 地图边界对象
    """
    with open(fp, encoding="utf-8") as f:
        map_json = orjson.loads(f.read())

    if "geometry" in map_json:
        geometry = map_json["geometry"]
    else:
        geometry = map_json

    polygon_list = []
    if "Polygon" in geometry["type"]:
        for _coords in geometry["coordinates"]:
            for coords in _coords:
                if wgs84:
                    wgs84_coords = [gcj02_to_wgs84(*coord) for coord in coords]
                    polygon_list.append(sgeom.Polygon(wgs84_coords))
                else:
                    polygon_list.append(sgeom.Polygon(coords))

        return MapPolygon(polygon_list)

    elif geometry["type"] == "MultiLineString":
        return sgeom.MultiLineString(geometry["coordinates"])


def get_adm_names(
    province: str = None,
    city: str = None,
    district: str = None,
    level: str = "省",
    country: str = "中华人民共和国",
    source: str = "高德",
):
    """
    获取行政名称

    参数:
        province (str, 可选): 省/自治区/直辖市/行政特区中文名, 必须为全称
                                  例如查找河北省应收入'河北省'而非'河北'. Defaults to None.
        city (str, 可选): 地级市中文名, 必须为全称, 例如查找北京市应输入'北京市'而非'北京'.
                              Defaults to None.
        district (str, 可选): 区/县中文名, 必须为全称. Defaults to None.
        level (str, 可选): 边界等级, 目前支持的等级包括'省', '市', '区', '县'.
                               其中'省'级包括直辖市、特区等;
                               '市'级为地级市, 若为直辖市, 则名称与'省'级相同,
                               比如北京市的省级和市级都是'北京市';
                               '区'和'县'属于同一级别的不同表达形式.
                               Defaults to '省'.
        country (str, 可选): 国家名称, 必须为全称. Defaults to '中华人民共和国'.
        source (str, 可选): 数据源. Defaults to '高德'.

    返回值:
        list: 名称列表
    """
    data = get_adm_maps(
        province=province,
        city=city,
        district=district,
        level=level,
        country=country,
        source=source,
    )
    if level == "国":
        names = [d["国"] for d in data]
    elif level == "省":
        names = [d["省/直辖市"] for d in data]
    elif level == "市":
        names = [d["市"] for d in data]
    elif level == "区县":
        names = [d["区/县"] for d in data]

    return names


def get_adm_maps(
    province: str = None,
    city: str = None,
    district: str = None,
    level: str = None,
    country: str = "中华人民共和国",
    source: str = "高德",
    db: str = DB_FILE,
    engine: str = None,
    record: str = "all",
    only_polygon: bool = False,
    wgs84=True,
    simplify=False,
    *args,
    **kwargs,
):
    """
    获取行政地图的边界对象

    参数:
        province (str, 可选): 省/自治区/直辖市/行政特区中文名, 必须为全称
                                  例如查找河北省应收入'河北省'而非'河北'. Defaults to None.
        city (str, 可选): 地级市中文名, 必须为全称, 例如查找北京市应输入'北京市'而非'北京'.
                              Defaults to None.
        district (str, 可选): 区/县中文名, 必须为全称. Defaults to None.
        level (str, 可选): 边界等级, 目前支持的等级包括'省', '市', '区', '县'.
                               其中'省'级包括直辖市、特区等;
                               '市'级为地级市, 若为直辖市, 则名称与'省'级相同,
                               比如北京市的省级和市级都是'北京市';
                               '区'和'县'属于同一级别的不同表达形式.
                               Defaults to '省'.
        country (str, 可选): 国家名称, 必须为全称. Defaults to '中华人民共和国'.
        source (str, 可选): 数据源. Defaults to '高德'.
        db (str, 可选): sqlite db文件路径. Defaults to DB_FILE.
        engine (str, 可选): 输出引擎, 默认为None, 输出为列表,
                                目前支持'geopandas', 若为geopandas,
                                则返回GeoDataFrame对象.
                                Defaults to None.
        record (str, 可选): 返回记录的形式, 选项包括'all'和'first'。
                                若为'first', 则无论查询结果又几条，仅返回第一条记录,
                                若为'all', 则返回全部数据, 若engine==None则返回list,
                                若engine=='geopandas', 则返回GeoDataFrame对象
                                Defaults to 'all'.
        only_polygon (bool, 可选): 是否仅返回地图边界对象(MapPolygon),
                                若为True则返回结果为MapPolygon对象或以MapPolygon对象组合的list,
                                若为False, 则返回的结果包含元信息, MapPolygon对象存储在
                                'geometry'键中.
                                Defaults to False.
        wgs84 (bool, 可选): 是否使用 WGS84 坐标系, 若为 True 则转为 WGS84 坐标,
                                若为 False 则使用高德默认的 GCJ02 火星坐标。Defaults to True.
        simplify  (bool, 可选): 是否对边界进行简化, 若为 True 则进行简化处理, 否则不做简化。Defaults to True.

    异常:
        ValueError: 当传入的等级

    返回值:
        gpd.GeoDataFrame | list: 根据输入参数查找到的地图边界的元信息及边界对象
    """
    import geopandas as gpd

    con = sqlite3.connect(db)
    cur = con.cursor()

    if country:
        country_level = "国"
        country_sql = f"AND country='{country}'"
        sql = f"SELECT id" f" FROM ADMINISTRATIVE" f" WHERE 1 {country_sql} ;"
        count = len(list(cur.execute(sql)))
        if count == 0:
            raise MapNotFoundError("未找到指定地图的边界文件")
    else:
        country_sql = ""
        country_level = None

    if province:
        province_level = "省"
        province_sql = f"AND province='{province}'"
        sql = f"SELECT id" f" FROM ADMINISTRATIVE" f" WHERE 1 {province_sql} ;"
        count = len(list(cur.execute(sql)))
        if count == 0:
            raise MapNotFoundError("未找到指定地图的边界文件")
    else:
        province_sql = ""
        province_level = None

    if city:
        city_level = "市"
        city_sql = f"AND city='{city}'"
        sql = f"SELECT id" f" FROM ADMINISTRATIVE" f" WHERE 1 {city_sql} ;"
        count = len(list(cur.execute(sql)))
        if count == 0:
            raise MapNotFoundError("未找到指定地图的边界文件")
    else:
        city_sql = ""
        city_level = None

    if district:
        district_level = "区县"
        district_sql = f"AND district='{district}'"
        sql = f"SELECT id" f" FROM ADMINISTRATIVE" f" WHERE 1 {district_sql} ;"
        count = len(list(cur.execute(sql)))
        if count == 0:
            raise MapNotFoundError("未找到指定地图的边界文件")
    else:
        district_sql = ""
        district_level = None

    if source:
        source_sql = f"AND source='{source}'"
    else:
        source_sql = ""

    if not level:
        level = district_level or city_level or province_level or country_level

    if level == "国":
        level_sql = "level='国'"
        province_sql = ""
        city_sql = ""
        district_sql = ""
    elif level == "省":
        level_sql = "level='省'"
        city_sql = ""
        district_sql = ""
    elif level == "市":
        level_sql = "level='市'"
        district_sql = ""
    elif level in ["区", "县", "区县", "区/县"]:
        level_sql = "level='区县'"
    else:
        raise ValueError(f'无法识别level等级: {level}, level参数请从"国", "省", "市", "区县"中选择')

    meta_sql = (
        "SELECT country, province, city, district, level, source, kind"
        " FROM ADMINISTRATIVE"
        f" WHERE {level_sql} {country_sql} {province_sql} {city_sql}"
        f" {district_sql} {source_sql};"
    )
    meta_rows = list(cur.execute(meta_sql))

    geom_sql = (
        "SELECT path"
        " FROM ADMINISTRATIVE"
        f" WHERE {level_sql} {country_sql} {province_sql} {city_sql}"
        f" {district_sql} {source_sql};"
    )
    gemo_rows = list(cur.execute(geom_sql))
    map_polygons = []
    for path in gemo_rows:
        mapjson = read_mapjson(
            os.path.join(DATA_DIR, "geojson.min/", path[0]), wgs84=wgs84
        )

        map_polygons.append(mapjson)

    gdf = gpd.GeoDataFrame(
        data=meta_rows, columns=["国家", "省/直辖市", "市", "区/县", "级别", "来源", "类型"]
    )
    gdf.set_geometry(map_polygons, inplace=True)

    if simplify:
        area = gdf["geometry"].area.sum()
        tolerance = area / 10000
        simple_geometry = gdf.simplify(tolerance=tolerance)

        geometries = []
        for g in simple_geometry:
            if isinstance(g, sgeom.Polygon):
                geometries.append(MapPolygon([g]))
            elif isinstance(g, sgeom.MultiPolygon):
                geometries.append(MapPolygon(g))
            else:
                geometries.append(g)

        gdf.set_geometry(geometries, inplace=True)

    if len(gdf) == 0:
        raise MapNotFoundError("未找到指定地图的边界文件")

    if record == "all":
        if only_polygon:
            return [row.to_dict()["geometry"] for _, row in gdf.iterrows()]
        else:
            if engine == "geopandas":
                return gdf
            elif engine is None:
                return [row.to_dict() for _, row in gdf.iterrows()]
    elif record == "first":
        if only_polygon:
            return [row.to_dict()["geometry"] for _, row in gdf.iterrows()][0]
        else:
            if engine == "geopandas":
                return gdf.iloc[0]
            elif engine is None:
                return [row.to_dict() for _, row in gdf.iterrows()][0]
