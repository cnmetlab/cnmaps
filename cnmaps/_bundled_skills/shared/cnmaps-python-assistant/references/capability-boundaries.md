# Capability Boundaries

Use this file when the user is combining `cnmaps` with plotting, raster processing, GeoPandas, or external GIS tools and it is important to explain which layer is responsible for what.

## What cnmaps Handles Directly

- Administrative boundary lookup with `get_adm_maps` and `get_adm_names`
- Boundary geometries and metadata through `MapRecord`, `MapPolygon`, or `GeoDataFrame` results
- Boundary drawing helpers such as `draw_map` and `draw_maps`
- Artist clipping helpers such as `clip_contours_by_map`, `clip_pcolormesh_by_map`, `clip_quiver_by_map`, `clip_scatter_by_map`, and `clip_clabels_by_map`
- Sample datasets through `load_dem`, `load_temp`, and `load_wind`
- Mask generation and masking through `MapPolygon.make_mask_array(...)` and `MapPolygon.maskout(...)`
- Vector export from `MapPolygon.to_file(...)`
- Provider discovery through `get_available_data_providers()` and `get_data_provider(...)`

## What cnmaps Does Not Fully Replace

- Cartopy projections, map axes creation, coastlines, gridlines, and map framing
- Matplotlib figure setup, colormaps, contour levels, quiver styling, labels, legends, and subplot layout
- NumPy or xarray data preparation, interpolation, resampling, statistics, and non-boundary raster logic
- GeoPandas spatial joins, overlays, dissolves, and table-heavy geospatial workflows beyond returning a `GeoDataFrame`
- GIS file management beyond exporting a queried `MapPolygon` to a supported format

## Practical Responsibility Split

- Use `cnmaps` to get the right boundary object.
- Use Cartopy to create the projected axis and geographic plotting context.
- Use Matplotlib to create the plotted artist and style it.
- Use `cnmaps` clipping helpers to constrain that artist by the boundary when needed.
- Use NumPy or xarray for raster math that is not simply boundary masking.

## Raster And Masking Guidance

- If the user wants a map clipped visually, use a plotting artist plus `clip_*_by_map(...)`.
- If the user wants a mask array, use `MapPolygon.make_mask_array(...)`.
- If the user wants masked raster values back, use `MapPolygon.maskout(...)`.
- Do not describe `cnmaps` as a full raster processing engine; it supplies the boundary-guided masking pieces, not the whole analysis stack.

## GeoPandas Guidance

- Use `engine="geopandas"` when the user explicitly wants GeoPandas objects or plans to continue in a GeoPandas workflow.
- The `geometry` column stays as native Shapely geometry.
- Do not claim that GeoPandas is required for normal `cnmaps` use; many tasks work directly with `MapRecord` or `MapPolygon`.

## Provider Guidance

- `provider` selects which installed data package backs the query.
- `source` is a dataset/source filter within the administrative index and is not the same thing as `provider`.
- If import works but data lookup fails, explain it as a provider or installed-data problem in the current interpreter.

## Export Guidance

- `MapPolygon.to_file(...)` is the direct boundary-export path for GeoJSON or Shapefile-style output.
- Do not imply that `cnmaps` is a full-featured GIS conversion toolkit; for complex schema management or downstream geoprocessing, users will likely continue with GeoPandas or other GIS tools after export.
