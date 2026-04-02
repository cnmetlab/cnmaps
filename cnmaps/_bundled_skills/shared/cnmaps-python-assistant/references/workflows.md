# Workflows

## Administrative Boundary Plotting

- Use when the user wants to draw China, provinces, cities, districts, or world country boundaries.
- Recommended approach: query boundaries with `get_adm_maps`, then draw with `draw_map` or `draw_maps` on a Cartopy axis.
- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.
- Watch for projection setup and whether the task needs one geometry or many.

## Province / City / Country Selection

- Use when the user wants one specific administrative region or a filtered subset.
- Recommended approach: use `get_adm_maps(..., record="first")` for a single region, or `get_adm_names` when the user first needs available names.
- Libraries involved: mostly `cnmaps`; plotting libraries only if visualization is needed.
- Watch for `level='国'` semantics and explicit `country='中国'` when China-only behavior is intended.
- Watch for formal-name matching: if the user gives an abbreviated place name, use `get_adm_names(...)` or the dataset index to resolve the full name first.
- If the user already knows several exact names, prefer one batch query such as `get_adm_maps(province=["北京市", "天津市"], level="省")` or `get_adm_maps(country=["JPN", "KOR"], level="国")` instead of multiple separate calls.
- A single query still maps to one administrative level. If the task mixes levels such as one country and one province, use separate `get_adm_maps(...)` calls.

## Overlay Boundaries on Cartopy Maps

- Use when the user already has a Cartopy plot and wants administrative overlays.
- Recommended approach: create the GeoAxes with the correct projection, then pass `MapPolygon` or record geometries to `draw_map` / `draw_maps`.
- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.
- Watch for passing the correct `ax` object and using `transform=ccrs.PlateCarree()` for text or markers.

## Boundary-Aware Raster Mask / Clip Workflow

- Use when the user wants to restrict scientific gridded data to an administrative boundary.
- Recommended approach: use `cnmaps` to obtain the relevant geometry or mask helper, then combine it with NumPy, xarray, or Matplotlib workflow pieces.
- Libraries involved: `cnmaps`, NumPy, potentially xarray, Matplotlib, Cartopy.
- Important: be explicit about what `cnmaps` handles directly versus what remains a downstream raster-processing step.
- If the user wants a boolean-like mask array, use `MapPolygon.make_mask_array(lons, lats)`.
- If the user wants masked data back, use `MapPolygon.maskout(lons, lats, data)`.

## Matplotlib Artist Clipping

- Use when the user has already created a `contourf`, `pcolormesh`, `quiver`, `scatter`, or `clabel` result and wants to clip it by an administrative boundary.
- Recommended approach: create the artist first, then call the corresponding `clip_*_by_map(...)` helper, then draw the boundary on top.
- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.
- `map_polygon` can be a single `MapPolygon`, a list of `MapPolygon`, or a `GeoDataFrame`.
- `extent=[left, right, lower, upper]` constrains the clip to the intersection of the map boundary and a rectangular geographic window.
- `set_extent=True` can update the axis extent automatically.
- In multi-panel figures, the clipping helper usually infers the correct axes from the artist, so `ax=` is often optional.

## Vector Export

- Use when the user wants to save a queried boundary as GeoJSON or Shapefile.
- Recommended approach: query `only_polygon=True`, then call `map_polygon.to_file(...)`.
- Libraries involved: mainly `cnmaps`; downstream GIS tools consume the exported files.

## Centroid Labeling

- Use when the user wants country, province, city, or district labels placed near default center points.
- Recommended approach: query `MapRecord` rows and use `record.longitude` / `record.latitude` instead of recomputing centroids from geometry.
- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.
- Watch for large or fragmented regions where whole-geometry centroids may not match hand-tuned label positions.
