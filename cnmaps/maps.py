"""地图类模块."""

import sqlite3
import copy
import re
from functools import lru_cache

import numpy as np
import shapely.geometry as sgeom
from shapely.geometry import mapping
from shapely import wkb
from shapely.strtree import STRtree
import fiona
import geojson
import orjson

try:
    from shapely import contains_xy as _contains_xy
except ImportError:
    from shapely.vectorized import contains as _contains_xy

from .geo import gcj02_to_wgs84
from .provider import get_data_provider


class MapNotFoundError(Exception):
    """地图无法找到的错误"""

    pass


_COUNTRY_CODE_PATTERN = re.compile(r"^[A-Za-z0-9-]{3,}$")
_COUNTRY_ALIASES = {
    "中国": "中华人民共和国",
}


def _escape_sql_literal(value):
    return str(value).replace("'", "''")


def _build_country_sql(country, level, has_iso3_column=False):
    if not country:
        return ""

    country_value = _COUNTRY_ALIASES.get(str(country).strip(), str(country).strip())
    escaped_country = _escape_sql_literal(country_value)

    if level == "国" and _COUNTRY_CODE_PATTERN.fullmatch(country_value):
        country_code = country_value.upper()
        clauses = [f"country='{escaped_country}'"]
        if has_iso3_column:
            clauses.append(f"UPPER(iso3)='{country_code}'")
        clauses.append(f"UPPER(path) LIKE '%/{country_code}.GEOJSON'")
        return "AND (" + " OR ".join(clauses) + ")"

    return f"AND country='{escaped_country}'"


def _get_geom(obj):
    """Return the underlying Shapely geometry from MapPolygon or the object itself."""
    return getattr(obj, "geom", obj)


def _ensure_mappolygon(geom):
    """Wrap Shapely Polygon/MultiPolygon as MapPolygon when returning to caller."""
    if geom is None:
        return None
    if isinstance(geom, MapPolygon):
        return geom
    if isinstance(geom, (sgeom.MultiPolygon, sgeom.Polygon)):
        return MapPolygon(geom)
    return geom


def _clone_geometry(geom):
    """Return a detached copy of a Shapely geometry."""
    if geom is None:
        return None
    return wkb.loads(geom.wkb)


def _as_mappolygon_result(geom):
    """Normalize Shapely set-operation results to MapPolygon."""
    if geom is None or geom.is_empty:
        return MapPolygon()
    if isinstance(geom, MapPolygon):
        return geom
    if isinstance(geom, sgeom.Polygon):
        return MapPolygon([geom])
    if isinstance(geom, sgeom.MultiPolygon):
        return MapPolygon.drop_inner_duplicate(MapPolygon(geom))
    if isinstance(geom, sgeom.GeometryCollection):
        # Keep historical behavior from the old Shapely<2 subclass version:
        # non-(Polygon|MultiPolygon) set-operation results are treated as empty.
        return MapPolygon()

    return MapPolygon()


class MapPolygon:
    """
    地图多边形类

    该类内部持有一个 shapely.geometry.MultiPolygon 实例（组合而非继承），
    兼容 Shapely 2.0+，并实现加号(合并)、减号(剪切)、逻辑与(交集)运算符支持.
    """

    _OWN_ATTRS = frozenset(
        {"_geom", "geom", "union", "difference", "intersection",
         "__add__", "__and__", "__sub__", "get_extent", "to_file",
         "maskout", "make_mask_array", "drop_inner_duplicate",
         "__geo_interface__", "__iter__", "__len__", "__getitem__",
         "__bool__", "__eq__", "__repr__"}
    )

    def __init__(self, *args, **kwargs):
        """实例化 MapPolygon，参数与 shapely.geometry.MultiPolygon 一致."""
        if not args and not kwargs:
            self._geom = sgeom.MultiPolygon()
            return

        if len(args) == 1 and not kwargs:
            source = _get_geom(args[0])
            if isinstance(source, sgeom.Polygon):
                self._geom = sgeom.MultiPolygon([source])
                return
            if isinstance(source, sgeom.MultiPolygon):
                self._geom = source
                return

        self._geom = sgeom.MultiPolygon(*args, **kwargs)

    @property
    def geom(self):
        """返回内部的 Shapely MultiPolygon，供需要原生几何的接口使用."""
        return self._geom

    @property
    def __geo_interface__(self):
        """Expose the wrapped geometry to GeoJSON/Fiona-style consumers."""
        return self._geom.__geo_interface__

    def __getattr__(self, name):
        """将未在 MapPolygon 上定义的属性委托给内部的 MultiPolygon."""
        if name in self._OWN_ATTRS:
            raise AttributeError(name)
        return getattr(self._geom, name)

    def __iter__(self):
        """Iterate over member polygons like Shapely < 2.0."""
        return iter(self._geom.geoms)

    def __len__(self):
        """Return the polygon count like Shapely < 2.0."""
        return len(self._geom.geoms)

    def __getitem__(self, item):
        """Support indexed access to polygons like Shapely < 2.0."""
        return self._geom.geoms[item]

    def __bool__(self):
        """Treat empty geometries as falsy."""
        return not self._geom.is_empty

    def __eq__(self, other):
        """Preserve geometric equality checks across wrapped/native objects."""
        return self._geom == _get_geom(other)

    def __repr__(self):
        return repr(self._geom)

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
    def drop_inner_duplicate(map_polygon):
        """
        清理内部重复多边形

        参数:
            map_polygon: 地图边界对象 (MapPolygon 或 sgeom.MultiPolygon)

        返回值:
            MapPolygon: 清理后的地图边界对象
        """
        geom = _get_geom(map_polygon)
        polygons = list(geom.geoms)
        if len(polygons) < 2:
            return MapPolygon(polygons)

        indexed_polygons = sorted(enumerate(polygons), key=lambda item: item[1].area, reverse=True)
        sorted_polygons = [polygon for _, polygon in indexed_polygons]
        original_indices = [index for index, _ in indexed_polygons]
        tree = STRtree(sorted_polygons)
        removed_indices = set()

        for idx, polygon in enumerate(sorted_polygons):
            if idx in removed_indices:
                continue

            for candidate_idx in tree.query(polygon):
                if candidate_idx == idx or candidate_idx in removed_indices:
                    continue
                candidate = sorted_polygons[candidate_idx]
                if polygon.area <= candidate.area:
                    continue
                if polygon.contains(candidate):
                    removed_indices.add(candidate_idx)

        polygons = [
            polygons[original_indices[idx]]
            for idx in range(len(sorted_polygons))
            if idx not in removed_indices
        ]

        return MapPolygon(polygons)

    def union(self, other):
        """并集."""
        other_geom = _get_geom(other)
        union_result = self._geom.union(other_geom)
        return _as_mappolygon_result(union_result)

    def difference(self, other):
        """差集."""
        other_geom = _get_geom(other)
        difference_result = self._geom.difference(other_geom)
        return _as_mappolygon_result(difference_result)

    def intersection(self, other):
        """交集."""
        other_geom = _get_geom(other)
        intersection_result = self._geom.intersection(other_geom)
        return _as_mappolygon_result(intersection_result)

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

        return ~_contains_xy(self._geom, lons, lats)


@lru_cache(maxsize=8192)
def _read_mapjson_cached(fp, wgs84=True):
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
    if geometry["type"] == "Polygon":
        rings = geometry["coordinates"]
        shell = rings[0]
        holes = rings[1:]
        if wgs84:
            shell = [gcj02_to_wgs84(*coord) for coord in shell]
            holes = [[gcj02_to_wgs84(*coord) for coord in hole] for hole in holes]
        polygon_list.append(sgeom.Polygon(shell, holes))
        return sgeom.MultiPolygon(polygon_list)

    if geometry["type"] == "MultiPolygon":
        for rings in geometry["coordinates"]:
            shell = rings[0]
            holes = rings[1:]
            if wgs84:
                shell = [gcj02_to_wgs84(*coord) for coord in shell]
                holes = [[gcj02_to_wgs84(*coord) for coord in hole] for hole in holes]
            polygon_list.append(sgeom.Polygon(shell, holes))

        return sgeom.MultiPolygon(polygon_list)

    elif geometry["type"] == "MultiLineString":
        return sgeom.MultiLineString(geometry["coordinates"])


def read_mapjson(fp, wgs84=True):
    geom = _clone_geometry(_read_mapjson_cached(fp, wgs84=wgs84))
    return _ensure_mappolygon(geom)


@lru_cache(maxsize=2048)
def _query_adm_metadata(
    province=None,
    city=None,
    district=None,
    level=None,
    country=None,
    source=None,
    db=None,
):
    if db is None:
        db = get_data_provider().get_index_db("administrative")

    con = sqlite3.connect(db)
    try:
        cur = con.cursor()
        columns = {row[1] for row in cur.execute("PRAGMA table_info(ADMINISTRATIVE);")}
        has_iso3_column = "iso3" in columns

        province_sql = f"AND province='{province}'" if province else ""
        city_sql = f"AND city='{city}'" if city else ""
        district_sql = f"AND district='{district}'" if district else ""
        source_sql = f"AND source='{_escape_sql_literal(source)}'" if source else ""

        if not any([province, city, district, level, country]):
            country = "中华人民共和国"

        if not level:
            if district:
                level = "区县"
            elif city:
                level = "市"
            elif province:
                level = "省"
            elif country:
                level = "国"

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
            level = "区县"
        else:
            raise ValueError(f'无法识别level等级: {level}, level参数请从"国", "省", "市", "区县"中选择')

        country_sql = _build_country_sql(country, level, has_iso3_column=has_iso3_column)

        meta_sql = (
            "SELECT country, province, city, district, level, source, kind, path"
            " FROM ADMINISTRATIVE"
            f" WHERE {level_sql} {country_sql} {province_sql} {city_sql}"
            f" {district_sql} {source_sql};"
        )
        rows = tuple(cur.execute(meta_sql))
    finally:
        con.close()

    if not rows:
        raise MapNotFoundError("未找到指定地图的边界文件")

    return rows


def get_adm_names(
    province: str = None,
    city: str = None,
    district: str = None,
    level: str = "省",
    country: str = None,
    source: str = None,
    provider: str = None,
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
        country (str, 可选): 国家名称。国家级查询可传中文名、ISO3 或组合码；不传时不做国家过滤。
        source (str, 可选): 数据源过滤条件；不传时不做来源过滤。
        provider (str, 可选): 数据提供者名称；默认为官方 ``cnmaps-data``。

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
        provider=provider,
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
    country: str = None,
    source: str = None,
    db: str = None,
    engine: str = None,
    record: str = "all",
    only_polygon: bool = False,
    wgs84=True,
    simplify=False,
    provider: str = None,
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
        country (str, 可选): 国家名称。国家级查询可传中文名、ISO3 或组合码；不传时不做国家过滤。
        source (str, 可选): 数据源过滤条件；不传时不做来源过滤。
        db (str, 可选): sqlite db文件路径. 若未指定则使用所选 provider 的索引库。
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
        provider (str, 可选): 数据提供者名称；默认为官方 ``cnmaps-data``。

    异常:
        ValueError: 当传入的等级

    返回值:
        gpd.GeoDataFrame | list: 根据输入参数查找到的地图边界的元信息及边界对象
    """
    import geopandas as gpd

    data_provider = get_data_provider(provider)
    if db is None:
        db = data_provider.get_index_db("administrative")
    rows = _query_adm_metadata(
        province=province,
        city=city,
        district=district,
        level=level,
        country=country,
        source=source,
        db=db,
    )
    meta_rows = [row[:7] for row in rows]
    map_polygons = []
    for row in rows:
        use_wgs84 = wgs84 if row[5] == "高德" else False
        mapjson = read_mapjson(
            data_provider.resolve_dataset_path("administrative", row[7]),
            wgs84=use_wgs84,
        )

        map_polygons.append(_get_geom(mapjson))

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
            geometries.append(_get_geom(_as_mappolygon_result(g)))

        gdf.set_geometry(geometries, inplace=True)

    if len(gdf) == 0:
        raise MapNotFoundError("未找到指定地图的边界文件")

    wrapped_geometries = [_ensure_mappolygon(g) for g in gdf.geometry]
    wrapped_records = None

    def _get_wrapped_records():
        nonlocal wrapped_records
        if wrapped_records is None:
            wrapped_records = []
            for (_, row), geometry in zip(gdf.iterrows(), wrapped_geometries):
                record_data = row.to_dict()
                record_data["geometry"] = geometry
                wrapped_records.append(record_data)
        return wrapped_records

    if record == "all":
        if only_polygon:
            return wrapped_geometries
        else:
            if engine == "geopandas":
                return gdf
            elif engine is None:
                return _get_wrapped_records()
    elif record == "first":
        if only_polygon:
            return wrapped_geometries[0]
        else:
            if engine == "geopandas":
                return gdf.iloc[0]
            elif engine is None:
                return _get_wrapped_records()[0]
