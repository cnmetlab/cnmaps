"""地图类模块."""

import sqlite3
import re
import warnings
from collections.abc import Iterable
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
    """查询条件未命中任何边界记录时抛出的异常。"""

    pass


class MapRecord(dict):
    """支持点号访问的地图记录对象。

    `get_adm_maps(..., engine=None, only_polygon=False)` 返回的记录对象。
    推荐优先使用英文字段和点号访问，例如 `record.country`、
    `record.geometry`、`record.longitude`。旧版中文 key 仍可访问，
    但仅作为兼容层，未来版本会逐步移除。
    """

    def __getitem__(self, key):
        if key in _LEGACY_RECORD_KEY_ALIASES:
            warnings.warn(
                f'使用中文键 "{key}" 访问地图记录将在 3.x 版本弃用，请改用 "{_LEGACY_RECORD_KEY_ALIASES[key]}"。',
                DeprecationWarning,
                stacklevel=2,
            )
            key = _LEGACY_RECORD_KEY_ALIASES[key]
        return super().__getitem__(key)

    def __getattr__(self, name):
        try:
            return self[name]
        except KeyError as exc:
            raise AttributeError(name) from exc

    def get(self, key, default=None):
        if key in _LEGACY_RECORD_KEY_ALIASES:
            warnings.warn(
                f'使用中文键 "{key}" 访问地图记录将在 3.x 版本弃用，请改用 "{_LEGACY_RECORD_KEY_ALIASES[key]}"。',
                DeprecationWarning,
                stacklevel=2,
            )
            key = _LEGACY_RECORD_KEY_ALIASES[key]
        return super().get(key, default)

    def __contains__(self, key):
        if key in _LEGACY_RECORD_KEY_ALIASES:
            key = _LEGACY_RECORD_KEY_ALIASES[key]
        return super().__contains__(key)


_COUNTRY_CODE_PATTERN = re.compile(r"^[A-Za-z0-9-]{3,}$")
_COUNTRY_ALIASES = {
    "中国": "中华人民共和国",
}
_LEGACY_RECORD_KEY_ALIASES = {
    "国家": "country",
    "省/直辖市": "province",
    "市": "city",
    "区/县": "district",
    "级别": "level",
    "来源": "source",
    "类型": "kind",
    "经度": "longitude",
    "纬度": "latitude",
}
_LEGACY_GDF_COLUMNS = {
    "country": "国家",
    "province": "省/直辖市",
    "city": "市",
    "district": "区/县",
    "level": "级别",
    "source": "来源",
    "kind": "类型",
    "longitude": "经度",
    "latitude": "纬度",
}


def _escape_sql_literal(value):
    return str(value).replace("'", "''")


def _normalize_filter_values(value, *, field_name):
    if value is None:
        return None

    if isinstance(value, str):
        normalized = value.strip()
        if not normalized:
            raise ValueError(f"{field_name} 参数不能为空字符串")
        return [normalized]

    if isinstance(value, Iterable):
        values = []
        for item in value:
            normalized = str(item).strip()
            if not normalized:
                raise ValueError(f"{field_name} 参数中不能包含空字符串")
            values.append(normalized)
        if not values:
            raise ValueError(f"{field_name} 参数不能为空序列")
        return values

    normalized = str(value).strip()
    if not normalized:
        raise ValueError(f"{field_name} 参数不能为空字符串")
    return [normalized]


def _build_scalar_filter_sql(column, value, *, field_name):
    values = _normalize_filter_values(value, field_name=field_name)
    if not values:
        return ""
    if len(values) == 1:
        return f"AND {column}='{_escape_sql_literal(values[0])}'"

    clauses = [f"{column}='{_escape_sql_literal(item)}'" for item in values]
    return "AND (" + " OR ".join(clauses) + ")"


def _canonicalize_filter_argument(value, *, field_name):
    values = _normalize_filter_values(value, field_name=field_name)
    if values is None:
        return None
    if len(values) == 1:
        return values[0]
    return tuple(values)


def _build_country_sql(country, level, has_iso3_column=False):
    if not country:
        return ""

    country_values = [
        _COUNTRY_ALIASES.get(item, item)
        for item in _normalize_filter_values(country, field_name="country")
    ]
    clauses = []
    for country_value in country_values:
        escaped_country = _escape_sql_literal(country_value)

        if level == "国" and _COUNTRY_CODE_PATTERN.fullmatch(country_value):
            country_code = country_value.upper()
            country_clauses = [f"country='{escaped_country}'"]
            if has_iso3_column:
                country_clauses.append(f"UPPER(iso3)='{country_code}'")
            country_clauses.append(f"UPPER(path) LIKE '%/{country_code}.GEOJSON'")
            clauses.append("(" + " OR ".join(country_clauses) + ")")
        else:
            clauses.append(f"country='{escaped_country}'")

    return "AND (" + " OR ".join(clauses) + ")"


@lru_cache(maxsize=32)
def _get_administrative_columns(db):
    con = sqlite3.connect(db)
    try:
        cur = con.cursor()
        return frozenset(row[1] for row in cur.execute("PRAGMA table_info(ADMINISTRATIVE);"))
    finally:
        con.close()


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
    地图多边形类。

    该类内部组合了一个 `shapely.geometry.MultiPolygon`，对外保持
    `cnmaps` 历史接口习惯，同时兼容 Shapely 2.x。它既可以直接作为
    `get_adm_maps(..., only_polygon=True)` 的返回值，也可以像 Shapely
    几何一样参与绘图、空间关系判断和几何运算。
    """

    _OWN_ATTRS = frozenset(
        {"_geom", "geom", "union", "difference", "intersection",
         "__add__", "__and__", "__sub__", "get_extent", "to_file",
         "maskout", "make_mask_array", "drop_inner_duplicate",
         "__geo_interface__", "__iter__", "__len__", "__getitem__",
         "__bool__", "__eq__", "__repr__", "_last_mask_cache_key", "_last_mask_cache_value"}
    )

    def __init__(self, *args, **kwargs):
        """实例化 MapPolygon，参数与 shapely.geometry.MultiPolygon 一致."""
        if not args and not kwargs:
            self._geom = sgeom.MultiPolygon()
            self._last_mask_cache_key = None
            self._last_mask_cache_value = None
            return

        if len(args) == 1 and not kwargs:
            source = _get_geom(args[0])
            if isinstance(source, sgeom.Polygon):
                self._geom = sgeom.MultiPolygon([source])
                self._last_mask_cache_key = None
                self._last_mask_cache_value = None
                return
            if isinstance(source, sgeom.MultiPolygon):
                self._geom = source
                self._last_mask_cache_key = None
                self._last_mask_cache_value = None
                return

        self._geom = sgeom.MultiPolygon(*args, **kwargs)
        self._last_mask_cache_key = None
        self._last_mask_cache_value = None

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
        """返回当前边界与 `other` 的并集结果。"""
        other_geom = _get_geom(other)
        union_result = self._geom.union(other_geom)
        return _as_mappolygon_result(union_result)

    def difference(self, other):
        """返回当前边界减去 `other` 后的差集结果。"""
        other_geom = _get_geom(other)
        difference_result = self._geom.difference(other_geom)
        return _as_mappolygon_result(difference_result)

    def intersection(self, other):
        """返回当前边界与 `other` 的交集结果。"""
        other_geom = _get_geom(other)
        intersection_result = self._geom.intersection(other_geom)
        return _as_mappolygon_result(intersection_result)

    def get_extent(self, buffer=2):
        """
        获取适合传给 `ax.set_extent(...)` 的范围坐标。

        参数:
            buffer (int | float, 可选): 在几何边界外额外扩展的经纬度缓冲，
                单位为度。默认为 2。

        返回值:
            tuple: `(left, right, lower, upper)`。
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
        将当前边界写出为 GeoJSON 或 Shapefile。

        参数:
            savefp (str): 保存路径。
            engine (str, 可选): 存储格式，支持 `'ESRI Shapefile'` 和 `'GeoJSON'`。
                默认为 `'GeoJSON'`。
            meta (dict, 可选): 写入到属性字段中的元信息。
                默认为 `{'id': None, 'name': None}`。
            encoding (str, 可选): 输出编码。默认为 `'utf-8'`。
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
        对边界外的数据进行遮罩处理。

        Args:
            lons (np.ndarray): 经度矩阵
            lats (np.ndarray): 纬度矩阵
            data (np.ndarray): 数据矩阵

        Returns:
            np.ma.MaskedArray: 边界外位置被 mask 的数组。
        """

        mask = self.make_mask_array(lons, lats)

        if isinstance(data, np.ma.MaskedArray):
            ndata = np.ma.array(data, copy=True, subok=True)
            ndata.mask = np.ma.getmaskarray(ndata) | mask
            return ndata

        ndata = np.array(data, copy=True)
        return np.ma.MaskedArray(ndata, mask=mask, copy=False)

    def make_mask_array(self, lons: np.ndarray, lats: np.ndarray):
        """
        生成边界以外的布尔遮罩数组。

        Args:
            lons (np.ndarray): 经度矩阵（2维）
            lats (np.ndarray): 纬度矩阵（2维）

        Returns:
            np.ndarray: 与输入同形状的布尔数组，边界外为 `True`。

        Raises:
            ValueError: 输入不是同形状的二维数组。
        """
        lons = np.atleast_1d(lons)
        lats = np.atleast_1d(lats)

        if len(lons.shape) != 2 or len(lats.shape) != 2:
            raise ValueError("x或y不是2维数组")

        if lons.shape != lats.shape:
            raise ValueError("x和y的形状不匹配")

        cache_key = (id(lons), id(lats), lons.shape, lats.shape)
        if cache_key == self._last_mask_cache_key and self._last_mask_cache_value is not None:
            return self._last_mask_cache_value.copy()

        minx, miny, maxx, maxy = self._geom.bounds
        within_bounds = (
            (lons >= minx)
            & (lons <= maxx)
            & (lats >= miny)
            & (lats <= maxy)
        )

        mask = np.ones(lons.shape, dtype=bool)
        if np.any(within_bounds):
            mask[within_bounds] = ~_contains_xy(self._geom, lons[within_bounds], lats[within_bounds])

        self._last_mask_cache_key = cache_key
        self._last_mask_cache_value = mask.copy()
        return mask


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
    """读取 GeoJSON 边界文件并返回 `MapPolygon` 或线几何。

    Args:
        fp (str): GeoJSON 文件路径。
        wgs84 (bool, optional): 当源数据为高德 GCJ02 坐标时，是否转换为 WGS84。
            默认为 `True`。

    Returns:
        MapPolygon | shapely.geometry.MultiLineString:
            解析后的边界几何对象。
    """
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
    record="all",
    db=None,
):
    if db is None:
        db = get_data_provider().get_index_db("administrative")

    con = sqlite3.connect(db)
    try:
        cur = con.cursor()
        columns = _get_administrative_columns(db)
        has_iso3_column = "iso3" in columns

        province_sql = _build_scalar_filter_sql("province", province, field_name="province")
        city_sql = _build_scalar_filter_sql("city", city, field_name="city")
        district_sql = _build_scalar_filter_sql("district", district, field_name="district")
        source_sql = _build_scalar_filter_sql("source", source, field_name="source")

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

        limit_sql = " LIMIT 1" if record == "first" else ""

        meta_sql = (
            "SELECT country, province, city, district, level, source, kind, path"
            " FROM ADMINISTRATIVE"
            f" WHERE {level_sql} {country_sql} {province_sql} {city_sql}"
            f" {district_sql} {source_sql}{limit_sql};"
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
    获取行政区名称列表。

    参数:
        province (str, 可选): 省/自治区/直辖市/行政特区中文名, 必须为全称
                                  例如查找河北省应收入'河北省'而非'河北'. Defaults to None.
        city (str, 可选): 地级市中文名, 必须为全称, 例如查找北京市应输入'北京市'而非'北京'.
                              Defaults to None.
        district (str, 可选): 区/县中文名, 必须为全称. Defaults to None.
        level (str, 可选): 边界等级，支持 `'国'`、`'省'`、`'市'`、`'区县'`
            以及 `'区'`、`'县'`、`'区/县'` 等同义写法。默认为 `'省'`。
        country (str, 可选): 国家名称。国家级查询可传中文名、`ISO3`
            或项目使用的组合码；从 `2.0.0` 开始，`'中国'` 会自动视为
            `中华人民共和国` 的别称。
        source (str, 可选): 数据源过滤条件；不传时不做来源过滤。
        provider (str, 可选): 数据提供者名称；默认为官方 ``cnmaps-data``。

    返回值:
        list[str]: 名称列表。

    说明:
        该函数内部基于 :func:`get_adm_maps` 查询元信息后提取对应名称字段，
        适合“先看有哪些名称可选，再决定具体查哪一个”的场景。
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
        names = [d["country"] for d in data]
    elif level == "省":
        names = [d["province"] for d in data]
    elif level == "市":
        names = [d["city"] for d in data]
    elif level == "区县":
        names = [d["district"] for d in data]

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
    获取行政区边界记录、边界几何或 GeoDataFrame。

    参数:
        province (str, 可选): 省/自治区/直辖市/行政特区中文名, 必须为全称
                                  例如查找河北省应收入'河北省'而非'河北'. Defaults to None.
        city (str, 可选): 地级市中文名, 必须为全称, 例如查找北京市应输入'北京市'而非'北京'.
                              Defaults to None.
        district (str, 可选): 区/县中文名, 必须为全称. Defaults to None.
        level (str, 可选): 边界等级，支持 `'国'`、`'省'`、`'市'`、`'区县'`
            以及 `'区'`、`'县'`、`'区/县'` 等同义写法。若为 `None`，
            会根据 `province/city/district/country` 自动推断。
        country (str, 可选): 国家名称。国家级查询可传中文名、`ISO3`
            或项目使用的组合码；不传时不做国家过滤。
            从 `2.0.0` 开始，`'中国'` 会自动视为 `中华人民共和国` 的别称。
        source (str, 可选): 数据源过滤条件；不传时不做来源过滤。
        db (str, 可选): sqlite db文件路径. 若未指定则使用所选 provider 的索引库。
        engine (str, 可选): 输出引擎。`None` 时返回 `MapRecord` 列表或单条记录，
            `'geopandas'` 时返回 `GeoDataFrame` 或单行 `Series`。
        record (str, 可选): 返回记录形式，支持 `'all'` 和 `'first'`。
        only_polygon (bool, 可选): 是否仅返回 `MapPolygon` 结果。
            为 `True` 时不返回元信息，仅返回边界几何。
        wgs84 (bool, 可选): 是否尽可能输出 WGS84 坐标。
            对高德来源数据为 `True` 时会执行 GCJ02 -> WGS84 转换；
            其他来源数据保持其原始坐标语义。
        simplify (bool, 可选): 是否对边界进行简化。默认为 `False`。
        provider (str, 可选): 数据提供者名称；默认为官方 ``cnmaps-data``。

    返回值:
        geopandas.GeoDataFrame | pandas.Series | MapRecord | list[MapRecord] | MapPolygon | list[MapPolygon]:
            根据参数组合返回 GeoDataFrame、MapRecord 或 MapPolygon 结果。

            - `engine is None` 且 `only_polygon=False`：返回 `MapRecord` 或其列表
            - `engine is None` 且 `only_polygon=True`：返回 `MapPolygon` 或其列表
            - `engine == 'geopandas'` 且 `record == 'all'`：返回 `GeoDataFrame`
            - `engine == 'geopandas'` 且 `record == 'first'`：返回单行 `Series`

    异常:
        ValueError: `level` 不在支持范围内。
        MapNotFoundError: 未找到符合条件的边界记录。

    说明:
        - `level='国'` 且不传 `country` 时，会返回全部国家/地区级记录，而不再仅指中国。
        - `MapRecord` 推荐使用英文字段和点号访问，例如 `record.geometry`、
          `record.longitude`、`record.latitude`。
    """
    import geopandas as gpd

    data_provider = get_data_provider(provider)
    if db is None:
        db = data_provider.get_index_db("administrative")
    rows = _query_adm_metadata(
        province=_canonicalize_filter_argument(province, field_name="province"),
        city=_canonicalize_filter_argument(city, field_name="city"),
        district=_canonicalize_filter_argument(district, field_name="district"),
        level=level,
        country=_canonicalize_filter_argument(country, field_name="country"),
        source=_canonicalize_filter_argument(source, field_name="source"),
        record=record,
        db=db,
    )
    meta_rows = [row[:7] for row in rows]
    map_polygons = []
    centroid_coords = []
    for row in rows:
        use_wgs84 = wgs84 if row[5] == "高德" else False
        mapjson = read_mapjson(
            data_provider.resolve_dataset_path("administrative", row[7]),
            wgs84=use_wgs84,
        )

        geom = _get_geom(mapjson)
        centroid = geom.centroid
        centroid_coords.append((centroid.x, centroid.y))
        map_polygons.append(geom)

    gdf = gpd.GeoDataFrame(
        data=meta_rows, columns=["country", "province", "city", "district", "level", "source", "kind"]
    )
    gdf.set_geometry(map_polygons, inplace=True)
    gdf["longitude"] = [coord[0] for coord in centroid_coords]
    gdf["latitude"] = [coord[1] for coord in centroid_coords]
    for english_name, legacy_name in _LEGACY_GDF_COLUMNS.items():
        gdf[legacy_name] = gdf[english_name]

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
                record_data = MapRecord(row.to_dict())
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
