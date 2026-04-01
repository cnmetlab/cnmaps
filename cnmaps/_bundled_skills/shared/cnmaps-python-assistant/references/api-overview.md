# API Overview

This file gives Cursor a conservative overview of `cnmaps` capabilities for Python coding tasks.

## Package Role

- `cnmaps` is primarily a Python library for administrative-boundary lookup, geometry retrieval, plotting helpers, clipping helpers, and sample-data-assisted map workflows.
- It is commonly used with `cartopy`, `matplotlib`, NumPy, and sometimes xarray.
- Official boundary and sample data are provided by `cnmaps-data`.

## Major Capability Areas

- Query administrative boundaries and names.
- Retrieve `MapRecord`, `MapPolygon`, or `GeoDataFrame`-style results.
- Draw one or many geometries on Cartopy axes.
- Clip contour, pcolormesh, quiver, scatter, and contour-label outputs by map boundaries.
- Load sample raster-like datasets for plotting examples.
- Inspect data providers for installed boundary/sample datasets.

## Typical Entry Points

- `get_adm_maps`: main boundary query API.
- `get_adm_names`: name lookup without needing full geometries.
- `draw_map` / `draw_maps`: boundary rendering helpers.
- `clip_*_by_map`: artist-level clipping helpers for Matplotlib/Cartopy plots.
- `load_dem`, `load_temp`, `load_wind`: sample data loaders.
- `get_available_data_providers`, `get_data_provider`: provider inspection APIs.

## Typical Return Categories

- Boundary records with metadata and geometry.
- Polygon-like geometry wrappers.
- GeoPandas objects when requested.
- Grid arrays from sample loaders.

## Typical Companion Libraries

- `cartopy` for geographic axes and projections.
- `matplotlib` for plotting.
- NumPy for mask-style array workflows.
- xarray may appear in user code, but exact integration details should be matched to the user's project.

## Conservatism Rule

If any low-level API detail remains unclear, verify against the project source or current installed version instead of guessing.
