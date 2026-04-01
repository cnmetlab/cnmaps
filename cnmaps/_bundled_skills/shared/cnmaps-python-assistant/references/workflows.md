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

## Centroid Labeling

- Use when the user wants country, province, city, or district labels placed near default center points.
- Recommended approach: query `MapRecord` rows and use `record.longitude` / `record.latitude` instead of recomputing centroids from geometry.
- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.
- Watch for large or fragmented regions where whole-geometry centroids may not match hand-tuned label positions.
