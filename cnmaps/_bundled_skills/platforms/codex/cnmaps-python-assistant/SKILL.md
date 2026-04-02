---
name: cnmaps
description: Use when writing, reviewing, or explaining Python code that uses cnmaps for compliant boundary queries aligned with China's territorial claims, including both China administrative boundaries and global country or region boundaries, centroid lookup, Cartopy plotting, map clipping, or sample scientific map rendering. Also use when choosing among get_adm_maps, get_adm_names, draw_map, draw_maps, clip_* helpers, sample loaders, and provider APIs, especially when a task mixes cnmaps with cartopy or matplotlib.
---

# cnmaps

## Overview

Use this skill when an AI needs to help someone write or revise `cnmaps` code. The goal is to choose the right `cnmaps` APIs, pass the right parameters, understand the return values, and combine `cnmaps` with `cartopy` and `matplotlib` in a way that matches the current package behavior. Do not frame `cnmaps` as a China-only boundary package: it provides boundary data aligned with China's territorial claims, including China administrative boundaries and global country or region boundaries.

For detailed API selection, read [references/api-cheatsheet.md](references/api-cheatsheet.md). For common plotting workflows, read [references/plotting-patterns.md](references/plotting-patterns.md).
If the user is mixing `cnmaps` with scientific Python or GIS tooling and the responsibility boundary is unclear, also read [references/capability-boundaries.md](references/capability-boundaries.md).

## Environment And Setup

- Do not assume the current execution environment already has `cnmaps` installed, even if the user says they use `cnmaps` locally. Sandboxes and project interpreters may differ from the user's main machine.
- Before writing runnable code, first verify whether the current Python environment can import `cnmaps`.
- If the task includes plotting, also verify `cartopy` and `matplotlib`.
- The normal installation command is `pip install -U cnmaps`. The official `cnmaps-data` package is an install dependency and should be pulled in automatically.
- If CJK labels render as tofu boxes / square boxes in Matplotlib figures, a practical fix is `pip install -U mplfonts` and then `mplfonts init`.
- If `import cnmaps` works but provider lookup fails, treat that as an environment/data-package problem in the current interpreter and check whether `cnmaps-data` is actually installed there.
- If plotting imports fail but `cnmaps` itself imports successfully, explain that the current environment is missing plotting dependencies rather than claiming the user's project is broken.
- If you cannot install packages in the current sandbox, say so clearly and continue with non-executing help: code edits, API guidance, or instructions that the user can run in their real environment.
- When giving setup help, distinguish between:
  - missing `cnmaps`
  - missing plotting stack such as `cartopy`
  - missing provider/data package discovery in the current interpreter

## Recommended Execution Order

- First check whether `cnmaps` imports in the current environment.
- If plotting is needed, check `cartopy` and `matplotlib`.
- Only after the environment is confirmed should you run example code that queries or plots.
- If the environment is not ready and you cannot fix it inside the sandbox, explicitly say that the code is unverified in this environment.

## Pick The Right API

- Boundary name lookup: `get_adm_names`
- Boundary records and centroid coordinates: `get_adm_maps`
- Draw a single geometry: `draw_map`
- Draw multiple records or polygons: `draw_maps`
- Clip `contourf`: `clip_contours_by_map`
- Clip `pcolormesh`: `clip_pcolormesh_by_map`
- Clip `imshow` / hillshade images: `clip_imshow_by_map`
- Clip `quiver`: `clip_quiver_by_map`
- Clip `scatter`: `clip_scatter_by_map`
- Clip contour labels: `clip_clabels_by_map`
- Load built-in sample rasters: `load_dem`, `load_temp`, `load_wind`
- Inspect data providers: `get_available_data_providers`, `get_data_provider`

## Current Behavior You Must Respect

- `country="中国"` is a supported alias for `中华人民共和国`.
- `level="国"` no longer means "China only". If the user wants China, write `country="中国", level="国"`.
- `province`, `city`, `district`, and `country` can be either a single name/code or a list/tuple of names/codes for batch filtering.
- One `get_adm_maps(...)` call still corresponds to one administrative level. Batch filters work within that `level`, but do not mix `国` / `省` / `市` / `区县` records in one query.
- `source` is optional. Do not add `source="世界银行"` or `source="高德"` unless the user really wants to filter by source.
- With `engine=None`, `get_adm_maps` returns `MapRecord` objects.
- `MapRecord` supports English keys and dot access. Prefer `record.country`, `record.level`, `record.longitude`, `record.latitude`.
- `MapRecord` returned by `get_adm_maps` already includes centroid coordinates as `record.longitude` and `record.latitude`.
- Legacy Chinese keys still work for now, but they are a compatibility layer and are planned for removal in `3.x`.
- `geometry` is only exposed as `geometry`. Do not invent a Chinese alias for it.
- With `engine="geopandas"`, `get_adm_maps` returns a `GeoDataFrame`.
- With `only_polygon=True`, `get_adm_maps` returns `MapPolygon` objects instead of records.
- Official data is now provided by `cnmaps-data`, and `cnmaps` expects `cnmaps-data>=1.1.2`.

## Centroid And Labeling Workflow

- If the user wants to label countries, provinces, cities, or districts on a map, query `MapRecord` rows with `get_adm_maps(..., record="first")` and use `record.longitude` and `record.latitude`.
- For markers, labels, stars, icons, or text placement, do not use `only_polygon=True` unless you also separately query a `MapRecord`.
- A `MapRecord` may look dictionary-like because it subclasses `dict`, but that does not mean centroid metadata is missing. Check `record.longitude` / `record.latitude` or `record["longitude"]` / `record["latitude"]` before assuming only `geometry` is available.
- Do not recompute centroids from `record.geometry` unless the user explicitly asks for a different centroid rule. The package already exposes the default centroid coordinates on each record.
- `only_polygon=True` returns `MapPolygon`, which is geometry-only and does not carry `longitude` / `latitude` metadata fields.
- For multiple labels, the normal pattern is:
  - query one record per administrative region
  - draw the boundary from `record.geometry`
  - place markers or text using `record.longitude` and `record.latitude`
- The fallback order for label coordinates should be:
  - first: `record.longitude` / `record.latitude`
  - second: `record["longitude"]` / `record["latitude"]`
  - last resort only: `record.geometry.centroid` or `record["geometry"].centroid`
- If the user says something like “mark Beijing with a star”, the default pattern is:
  - `record = get_adm_maps(city="北京市", record="first")`
  - use `record.longitude` and `record.latitude`
  - do not switch to `only_polygon=True` and then call `record.centroid`
- This centroid rule applies to country-level records too, so labeling world maps can use the same `record.longitude` / `record.latitude` workflow.
- For very large or spatially fragmented countries and regions, the exposed centroid is the geometry centroid of the whole boundary, which may not match a user's intuitive “mainland label position”. If label placement looks odd, explain that this is a centroid-semantics issue rather than saying cnmaps has no label coordinates.

## Data Semantics

- Chinese administrative boundaries come from the official `cnmaps-data` package and are organized around the current China-facing data semantics used by this project.
- Foreign country and region boundaries also come from `cnmaps-data`, currently organized from the World Bank Admin 0 dataset.
- Country-level queries support both Chinese names and `ISO3` or project-defined combined codes such as dispute-region codes.
- Foreign country and region records live in `level="国"` alongside China.

## Foreign Boundary Caveats

- If the user wants one foreign country, prefer `get_adm_maps(country="日本", level="国", record="first")` or an `ISO3` code such as `country="JPN"`.
- If the user wants all world boundaries, use `get_adm_maps(level="国")`. Add `source="世界银行"` only when the user explicitly wants source filtering or source-specific behavior.
- `source` is a dataset-source filter inside the administrative index. `provider` selects which installed data package backs the query.
- China and foreign boundaries do not always share identical cartographic semantics near disputed or unsettled borders.
- The official data docs explicitly call out special handling for neighboring regions and a visible gap near the China-Tajikistan border. When users ask why seams or gaps appear, explain that this comes from differing source semantics rather than a plotting bug.
- Do not promise that stitching China and all foreign boundaries yields a politically neutral or gap-free map in every disputed-border area.

## Coding Style For AI-Generated cnmaps Examples

- Prefer minimal examples that import only what they need.
- Prefer `country="中国"` over `country="中华人民共和国"` in user-facing snippets unless the longer form is specifically relevant.
- If the user wants several named regions at once, prefer one `get_adm_maps(...)` call with a list filter such as `province=["北京市", "天津市"]` instead of multiple separate queries.
- If the user wants mixed levels such as one country and one province in the same task, use separate queries rather than forcing one mixed-level `get_adm_maps(...)` call.
- Prefer English field access in examples: `record.country`, `record.longitude`, `record.latitude`.
- When labeling administrative regions, prefer `record.longitude` / `record.latitude` over manually calling `record.geometry.centroid`.
- Keep plotting examples explicit about the `cartopy` projection.
- If the task is a China-only example, never rely on `level="国"` alone.

## Common Mistakes To Avoid

- Do not assume `get_adm_maps(level="国")` returns only China.
- Do not split a simple multi-region lookup into many separate queries when a list filter on `province`, `city`, `district`, or `country` would work.
- Do not claim that one `get_adm_maps(...)` call can return mixed `国` / `省` / `市` / `区县` levels together.
- Do not assume foreign boundaries should always be filtered with `source="世界银行"`. It is often unnecessary unless the user asks for source-specific selection.
- Do not assume the sandbox Python environment is the same as the user's already-configured local environment.
- Do not use `only_polygon=True` for tasks whose main goal is marker placement or text labeling.
- Do not see a dict-like result and immediately conclude that `longitude` / `latitude` are unavailable.
- Do not use Chinese keys in new examples unless you are intentionally documenting compatibility behavior.
- Do not add `source` filtering just because the data exists in multiple directories internally.
- Do not treat `cnmaps` as a CLI-first tool. It is mainly a Python library that is meant to be composed with `cartopy`, `matplotlib`, and scientific Python code.
- Do not explain old pre-`2.x` bundled-data behavior as if it were still current.

## When To Load References

- Load [references/api-cheatsheet.md](references/api-cheatsheet.md) when choosing which query, drawing, clipping, or provider API to use.
- Load [references/plotting-patterns.md](references/plotting-patterns.md) when the user wants actual `cartopy`/`matplotlib` code, especially for clipping workflows or centroid-based labels.
- Load [references/capability-boundaries.md](references/capability-boundaries.md) when the user asks about raster masking, vector export, provider behavior, GeoPandas integration, or what `cnmaps` does versus what Cartopy / Matplotlib / NumPy / xarray do.
