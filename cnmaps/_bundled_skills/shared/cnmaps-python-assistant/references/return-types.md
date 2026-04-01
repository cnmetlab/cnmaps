# Return Types

Use this file to reason about how `cnmaps` outputs connect to downstream code.

## MapRecord-style Results

- Common when `get_adm_maps(..., engine=None, only_polygon=False)` is used.
- Includes metadata fields and a `geometry` field.
- Also exposes centroid coordinates such as `longitude` and `latitude`.
- Good for labeling, region-specific filtering, and mixed metadata + geometry workflows.

## MapPolygon-style Results

- Common when `only_polygon=True` is used.
- Good for geometry-first workflows such as drawing, extent handling, boolean operations, or masking helpers.
- Lacks the extra metadata fields of `MapRecord`.

## GeoPandas Results

- Common when `engine='geopandas'` is requested.
- Good when the user already wants GeoPandas-style processing or tabular geometry operations.
- Use carefully when downstream code expects GeoPandas rather than the historical `MapPolygon` wrapper.

## Sample Loader Results

- Sample data APIs return NumPy-style arrays such as longitude grids, latitude grids, and one or more data arrays.
- These are useful for plotting examples but are not boundary geometries.

## Integration Guidance

- For Cartopy drawing, geometry-bearing results are the important part.
- For Matplotlib labels, `MapRecord.longitude` / `latitude` are often the simplest path.
- For mask workflows, boundary objects and mask arrays should not be confused with raster values themselves.
