# cnmaps API Cheatsheet

## Query APIs

### `get_adm_maps(...)`

Use for the actual boundary query.

Common filters:

- `country`
- `province`
- `city`
- `district`
- `level`
- `source`
- `provider`
- `record="first"` for a single match
- `record="all"` for all matches
- `only_polygon=True` for `MapPolygon`
- `engine="geopandas"` for `GeoDataFrame`
- `wgs84=True` for WGS84 output, `False` for GCJ02
- `simplify=True` when the user explicitly wants simplified geometries, or when complex clipping geometries need a lighter path for EPS/PS export workflows
- `provider` to choose a specific installed data provider

Important behavior:

- Administrative names should use the full formal Chinese name. If the user only has a short name, prefer `get_adm_names(...)` first.
- `province`, `city`, `district`, `country`, and `source` accept either a single value or a list/tuple of values for batch filtering.
- If `level` is omitted, `get_adm_maps` infers it from the filters that were passed.
- A single `get_adm_maps(...)` call still queries one `level` at a time. List filters can batch-select multiple names within that level, but they do not mix country/province/city/district levels in one result set.
- `level` accepts `国` / `省` / `市` / `区县`; district-level aliases such as `区`, `县`, and `区/县` are normalized internally to `区县`.
- `country="中国"` is supported.
- `level="国"` without `country` means all country-level records.
- For `level="国"` queries, `country` may be a Chinese country name, an `ISO3` code such as `JPN`, or a project-defined combined code for special regions.
- `source` is optional and should only be added when the user wants source filtering.
- China country-level queries may return multiple records such as the mainland boundary and South China Sea components, so `record="first"` is a common pattern when the user wants one boundary object.

Foreign and global query patterns:

- One foreign country by Chinese name: `get_adm_maps(country="日本", level="国", record="first")`
- One foreign country by `ISO3`: `get_adm_maps(country="JPN", level="国", record="first")`
- Several foreign countries at once: `get_adm_maps(country=["JPN", "KOR", "DEU"], level="国")`
- All world country/region boundaries: `get_adm_maps(level="国")`
- World boundaries from a specific source: `get_adm_maps(level="国", source="世界银行")`
- China only: `get_adm_maps(country="中国", level="国")`
- Several provinces at once: `get_adm_maps(province=["北京市", "天津市"], level="省")`
- Several cities in one province: `get_adm_maps(province="河南省", city=["郑州市", "洛阳市"], level="市")`
- Several districts in one city: `get_adm_maps(city="北京市", district=["朝阳区", "海淀区"], level="区县")`
- Mixed levels are not supported in one call: if the user wants `日本` and `四川省`, query them separately because `国` and `省` records cannot be returned together from one `get_adm_maps(...)` call.

Return shapes:

- `engine=None`, `only_polygon=False`: `MapRecord` or list of `MapRecord`
- `engine=None`, `only_polygon=True`: `MapPolygon` or list of `MapPolygon`
- `engine="geopandas"`: `GeoDataFrame`

Useful `MapRecord` fields:

- `country`
- `province`
- `city`
- `district`
- `level`
- `source`
- `kind`
- `geometry`
- `longitude`
- `latitude`

Centroid and labeling notes:

- `longitude` and `latitude` are already included on `MapRecord` results and are the default coordinates to use for map labels or marker placement.
- This works for country-level records too: `row = get_adm_maps(country="日本", level="国", record="first")`, then use `row.longitude` and `row.latitude`.
- For point markers or labels, prefer `record="first"` with the default `only_polygon=False`.
- `only_polygon=True` returns `MapPolygon`, which is useful for geometry work but does not expose `longitude` and `latitude`.
- `MapRecord` is dict-like, so `row["longitude"]` and `row["latitude"]` are also valid when dot access is inconvenient.
- If label code needs a fallback, use geometry centroids only after checking both dot access and key access for `longitude` / `latitude`.
- If the user wants labels, prefer these fields over manually recomputing `row.geometry.centroid`.
- For very large or fragmented countries, these coordinates come from the whole-boundary centroid and may not match a hand-tuned label position.

Compatibility notes:

- Legacy Chinese keys still work, but new code should prefer English keys or dot access.
- `geometry` only has the English key.

Useful `MapPolygon` methods:

- `map_polygon.get_extent(buffer=...)` for `ax.set_extent(...)`
- `map_polygon.make_mask_array(lons, lats)` to build a raster mask
- `map_polygon.maskout(lons, lats, data)` to mask raster-like data
- `map_polygon.to_file(path, engine="GeoJSON")` to export GeoJSON or Shapefile output

### `get_adm_names(...)`

Use when the task only needs supported names, not geometries.

Good for:

- listing cities in a province
- listing districts in a city
- checking what names are available before querying
- checking country-level names before a global or foreign-boundary query
- resolving a user's abbreviated or ambiguous region name before calling `get_adm_maps`
- batch-filtering names after the user already knows several exact region names

### `validate_boundary_file(fp, allow_multi_feature=True)`

Use when the user has an external GeoJSON or Shapefile and wants to know whether it matches the cnmaps boundary spec before using it for masking or clipping.

Current boundary spec:

- file suffix must be `.geojson`, `.json`, or `.shp`
- CRS must be WGS84 / `EPSG:4326`
- geometries must all be `Polygon` or `MultiPolygon`
- empty or invalid geometries are rejected
- multiple features are allowed, but they are treated as one combined boundary when read

### `read_boundary_file(fp, dissolve=True)`

Use when the user already has an external boundary file that matches the cnmaps boundary spec and wants a `MapPolygon` for `make_mask_array(...)`, `maskout(...)`, or `clip_*`.

## Drawing APIs

### `draw_map(map_polygon, ax=None, **kwargs)`

Use for:

- a single `MapPolygon`
- a single geometry from a record

### `draw_maps(maps, ax=None, **kwargs)`

Use for:

- lists of records
- lists of polygons
- `GeoDataFrame`
- a single `MapRecord`
- a single `MapPolygon`

Rules of thumb:

- For quick country-boundary plots, prefer `draw_map` or `draw_maps`.
- For highly styled global maps, using `row.geometry` or `MapPolygon` with Cartopy's `ax.add_geometries(...)` is also fine.
- If you queried a single record with `record="first"`, `draw_map(row.geometry, ax=ax, ...)` is usually the clearest option.
- `draw_map(..., autoscale=True)` autos-scales by default; this is convenient for one geometry, but user code may still call `ax.set_extent(...)` explicitly for tighter framing.
- `draw_maps(...)` accepts a `GeoDataFrame`, `MapRecord`, `MapPolygon`, or lists of those geometry-bearing objects.

## Clipping APIs

### `clip_contours_by_map(contours, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.contour` or `ax.contourf`.

### `clip_pcolormesh_by_map(mesh, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.pcolormesh`.

### `clip_quiver_by_map(quiver, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.quiver`.

### `clip_streamplot_by_map(streamplot, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.streamplot`.

### `clip_scatter_by_map(scatter, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.scatter`.

### `clip_clabels_by_map(clabels, map_polygon, ax=None, extent=None)`

Use after `ax.clabel`.

Typical order for contour labels:

1. create contours
2. `clip_contours_by_map`
3. create labels with `ax.clabel`
4. `clip_clabels_by_map`

Important clipping behavior:

- `clip_*_by_map` accepts a single `MapPolygon`, a list of `MapPolygon`, or a `GeoDataFrame`.
- `extent=[left, right, lower, upper]` clips to the intersection of the administrative boundary and a rectangular geographic window.
- `set_extent=True` with `extent=...` also calls `ax.set_extent(..., crs=ccrs.PlateCarree())`.
- In multi-axes workflows, clipping helpers usually infer the correct `ax` from the artist object, so passing `ax=` is often optional.
- If the user is exporting clipped `contourf` results to EPS/PS and the output becomes unreadable in downstream PostScript tools, prefer querying the clipping boundary with `simplify=True` before calling `clip_contours_by_map(...)`.

## Sample Data APIs

### `load_dem(provider=None)`

Returns `lons, lats, data`

### `load_temp(provider=None)`

Returns `lons, lats, data`

### `load_wind(provider=None)`

Returns `lons, lats, u, v`

## Provider APIs

### `get_available_data_providers()`

Use when the user wants to see what providers are installed.

### `get_data_provider(provider=None)`

Use when provider-level dataset paths or metadata are needed.

## CLI Export

### `cnmaps export <output> [filters...]`

Use when the user wants to export administrative boundaries directly from the terminal instead of writing Python code first.

Useful patterns:

- `cnmaps export ./jingjin.geojson --province 北京市 天津市 --level 省`
- `cnmaps export ./east-asia.geojson --country 中国 JPN KOR --level 国`
- `cnmaps export ./henan.shp --province 河南省 --level 省 --record first`

Rules:

- Filter semantics are close to `get_adm_maps(...)`: `country`, `province`, `city`, `district`, `level`, `source`, `provider`, `record`, `simplify`, and coordinate mode are all supported.
- Multi-name filters are passed as repeated values after one flag, for example `--province 北京市 天津市`.
- Output format is inferred from the destination suffix unless `--engine` is provided explicitly.
- Default coordinates are WGS84; use `--gcj02` only when the user explicitly wants GCJ02 export.

### `cnmaps check-boundary <path> [--json]`

Use when the user has an external GeoJSON or Shapefile and wants a direct terminal check before reading it with `read_boundary_file(...)`.

Rules:

- Prefer this command when the user is unsure whether an external file already matches the cnmaps boundary spec.
- `--json` is useful when AI or another script will consume the result and decide how to rewrite the file; it changes the check result output format, not the input file format.

## Rules Of Thumb

- If the user wants China only: always write `country="中国", level="国"` explicitly.
- If the user wants one foreign country: use `country=<Chinese name or ISO3>, level="国", record="first"`.
- If the user wants several exact regions at once: pass a list on `province`, `city`, `district`, or `country` instead of writing several separate queries.
- If the user wants exact regions from different administrative levels, split the task into multiple queries instead of forcing one mixed-level call.
- If the user wants to label administrative regions or their default center points: query records and use `longitude` and `latitude`.
- If the user wants actual clipped scientific plots: combine sample loaders, `cartopy`, and `clip_*` helpers.
- If the user wants clipped scientific plots specifically for EPS/PS export, consider `simplify=True` on the clipping boundary to reduce path complexity.
- If the user wants a raster mask array rather than a plotted figure: use `MapPolygon.make_mask_array(...)` or `MapPolygon.maskout(...)`.
- If the user wants exported vector output: query `only_polygon=True` and use `map_polygon.to_file(...)`.
- If the user wants to use a custom GeoJSON or Shapefile for masking, do not assume arbitrary files will work directly; first validate them against the cnmaps boundary spec, then read them with `read_boundary_file(...)`.
- If the user wants global country boundaries: `get_adm_maps(level="国")` is now the correct broad query.
- If the user asks about seams, gaps, or disputed-border behavior in world maps, explain the source-semantic caveat instead of blaming plotting code first.
