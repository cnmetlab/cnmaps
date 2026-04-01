---
name: cnmaps
description: Use when writing, reviewing, or explaining Python code that uses cnmaps for administrative boundary queries, centroid lookup, Cartopy plotting, map clipping, or sample scientific map rendering. Also use when choosing among get_adm_maps, get_adm_names, draw_map, draw_maps, clip_* helpers, sample loaders, and provider APIs, especially when a task mixes cnmaps with cartopy or matplotlib.
---

# cnmaps

## Overview

Use this skill when an AI needs to help someone write or revise `cnmaps` code. The goal is to choose the right `cnmaps` APIs, pass the right parameters, understand the return values, and combine `cnmaps` with `cartopy` and `matplotlib` in a way that matches the current package behavior.

For detailed API selection, read [references/api-cheatsheet.md](references/api-cheatsheet.md). For common plotting workflows, read [references/plotting-patterns.md](references/plotting-patterns.md).

## Pick The Right API

- Boundary name lookup: `get_adm_names`
- Boundary records and centroid coordinates: `get_adm_maps`
- Draw a single geometry: `draw_map`
- Draw multiple records or polygons: `draw_maps`
- Clip `contourf`: `clip_contours_by_map`
- Clip `pcolormesh`: `clip_pcolormesh_by_map`
- Clip `quiver`: `clip_quiver_by_map`
- Clip `scatter`: `clip_scatter_by_map`
- Clip contour labels: `clip_clabels_by_map`
- Load built-in sample rasters: `load_dem`, `load_temp`, `load_wind`
- Inspect data providers: `get_available_data_providers`, `get_data_provider`

## Current Behavior You Must Respect

- `country="中国"` is a supported alias for `中华人民共和国`.
- `level="国"` no longer means "China only". If the user wants China, write `country="中国", level="国"`.
- `source` is optional. Do not add `source="世界银行"` or `source="高德"` unless the user really wants to filter by source.
- With `engine=None`, `get_adm_maps` returns `MapRecord` objects.
- `MapRecord` supports English keys and dot access. Prefer `record.country`, `record.level`, `record.longitude`, `record.latitude`.
- Legacy Chinese keys still work for now, but they are a compatibility layer and are planned for removal in `3.x`.
- `geometry` is only exposed as `geometry`. Do not invent a Chinese alias for it.
- With `engine="geopandas"`, `get_adm_maps` returns a `GeoDataFrame`.
- With `only_polygon=True`, `get_adm_maps` returns `MapPolygon` objects instead of records.
- Official data is now provided by `cnmaps-data`, and `cnmaps` expects `cnmaps-data>=1.1.1`.

## Data Semantics

- Chinese administrative boundaries come from the official `cnmaps-data` package and are organized around the current China-facing data semantics used by this project.
- Foreign country and region boundaries also come from `cnmaps-data`.
- Country-level queries support both Chinese names and `ISO3` or project-defined combined codes such as dispute-region codes.

## Coding Style For AI-Generated cnmaps Examples

- Prefer minimal examples that import only what they need.
- Prefer `country="中国"` over `country="中华人民共和国"` in user-facing snippets unless the longer form is specifically relevant.
- Prefer English field access in examples: `record.country`, `record.longitude`, `record.latitude`.
- Keep plotting examples explicit about the `cartopy` projection.
- If the task is a China-only example, never rely on `level="国"` alone.

## Common Mistakes To Avoid

- Do not assume `get_adm_maps(level="国")` returns only China.
- Do not use Chinese keys in new examples unless you are intentionally documenting compatibility behavior.
- Do not add `source` filtering just because the data exists in multiple directories internally.
- Do not treat `cnmaps` as a CLI-first tool. It is mainly a Python library that is meant to be composed with `cartopy`, `matplotlib`, and scientific Python code.
- Do not explain old pre-`2.x` bundled-data behavior as if it were still current.

## When To Load References

- Load [references/api-cheatsheet.md](references/api-cheatsheet.md) when choosing which query, drawing, clipping, or provider API to use.
- Load [references/plotting-patterns.md](references/plotting-patterns.md) when the user wants actual `cartopy`/`matplotlib` code, especially for clipping workflows or centroid-based labels.
