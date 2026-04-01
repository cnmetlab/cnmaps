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
- `only_polygon=True` for `MapPolygon`
- `engine="geopandas"` for `GeoDataFrame`

Important behavior:

- `country="中国"` is supported.
- `level="国"` without `country` means all country-level records.
- For `level="国"` queries, `country` may be a Chinese country name, an `ISO3` code such as `JPN`, or a project-defined combined code for special regions.
- `source` is optional and should only be added when the user wants source filtering.

Foreign and global query patterns:

- One foreign country by Chinese name: `get_adm_maps(country="日本", level="国", record="first")`
- One foreign country by `ISO3`: `get_adm_maps(country="JPN", level="国", record="first")`
- All world country/region boundaries: `get_adm_maps(level="国")`
- World boundaries from a specific source: `get_adm_maps(level="国", source="世界银行")`
- China only: `get_adm_maps(country="中国", level="国")`

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

Compatibility notes:

- Legacy Chinese keys still work, but new code should prefer English keys or dot access.
- `geometry` only has the English key.

### `get_adm_names(...)`

Use when the task only needs supported names, not geometries.

Good for:

- listing cities in a province
- listing districts in a city
- checking what names are available before querying
- checking country-level names before a global or foreign-boundary query

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

## Clipping APIs

### `clip_contours_by_map(contours, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.contour` or `ax.contourf`.

### `clip_pcolormesh_by_map(mesh, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.pcolormesh`.

### `clip_quiver_by_map(quiver, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.quiver`.

### `clip_scatter_by_map(scatter, map_polygon, ax=None, extent=None, set_extent=False)`

Use after `ax.scatter`.

### `clip_clabels_by_map(clabels, map_polygon, ax=None, extent=None)`

Use after `ax.clabel`.

Typical order for contour labels:

1. create contours
2. `clip_contours_by_map`
3. create labels with `ax.clabel`
4. `clip_clabels_by_map`

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

## Rules Of Thumb

- If the user wants China only: always write `country="中国", level="国"` explicitly.
- If the user wants one foreign country: use `country=<Chinese name or ISO3>, level="国", record="first"`.
- If the user wants to label administrative centers: query records and use `longitude` and `latitude`.
- If the user wants actual clipped scientific plots: combine sample loaders, `cartopy`, and `clip_*` helpers.
- If the user wants global country boundaries: `get_adm_maps(level="国")` is now the correct broad query.
- If the user asks about seams, gaps, or disputed-border behavior in world maps, explain the source-semantic caveat instead of blaming plotting code first.
