# cnmaps Capability Boundaries

Use this file when the user is combining `cnmaps` with plotting, raster processing, GeoPandas, or GIS export and you need to explain which part of the workflow belongs to `cnmaps`.

## What cnmaps Handles Directly

- Administrative boundary lookup with `get_adm_maps` and `get_adm_names`
- Boundary geometries and metadata through `MapRecord`, `MapPolygon`, or `GeoDataFrame` results
- Drawing helpers such as `draw_map` and `draw_maps`
- Artist clipping helpers such as `clip_contours_by_map`, `clip_pcolormesh_by_map`, `clip_quiver_by_map`, `clip_scatter_by_map`, and `clip_clabels_by_map`
- Sample datasets from `load_dem`, `load_temp`, and `load_wind`
- Boundary-aware raster helpers such as `MapPolygon.make_mask_array(...)` and `MapPolygon.maskout(...)`
- Boundary export through `MapPolygon.to_file(...)`
- Provider discovery through `get_available_data_providers()` and `get_data_provider(...)`

## What cnmaps Does Not Fully Replace

- Cartopy projection setup, GeoAxes creation, coastlines, gridlines, and framing
- Matplotlib figure layout, colormaps, contour levels, legends, and most visual styling
- NumPy or xarray preprocessing, interpolation, resampling, and non-boundary raster analysis
- GeoPandas-heavy table operations such as overlays, spatial joins, and dissolve workflows
- Full GIS conversion or schema-management pipelines beyond exporting the boundary object

## Practical Split Of Responsibility

- Use `cnmaps` to get the right boundary object.
- Use Cartopy to build the projected map axes.
- Use Matplotlib to create the artist and style the figure.
- Use `cnmaps` clipping helpers to constrain that artist by the boundary.
- Use NumPy or xarray for raster math that is not simply masking by the boundary.

## Raster Guidance

- If the user wants a clipped visual, create the Matplotlib artist and then use `clip_*_by_map(...)`.
- If the user wants a mask array, use `MapPolygon.make_mask_array(...)`.
- If the user wants masked data values back, use `MapPolygon.maskout(...)`.
- Do not describe `cnmaps` as a full raster-analysis engine; it provides the boundary-guided pieces, not the whole processing stack.

## GeoPandas And Provider Guidance

- Use `engine="geopandas"` only when the user explicitly wants a `GeoDataFrame` workflow.
- `provider` chooses which installed data package backs the query.
- `source` is a dataset/source filter inside the administrative index, not the same thing as `provider`.
- If importing `cnmaps` works but lookups fail, explain that as a provider or installed-data problem in the current interpreter.
