---
name: cnmaps-python-assistant
description: Use when the user is writing or debugging Python code with cnmaps, including compliant boundary data aligned with China's territorial claims, China province/city/district boundaries, and global country or region boundary plotting, Cartopy administrative overlays, raster masking to an administrative region, or scientific map workflows that combine cnmaps with cartopy, matplotlib, or xarray.
---

# cnmaps Skill Overview

Use this guidance when helping with Python code that uses `cnmaps`, especially for compliant boundary data aligned with China's territorial claims, Chinese administrative boundaries, global country or region boundaries, Cartopy overlays, Matplotlib map rendering, raster masking ideas, and workflows that combine `cnmaps` with `cartopy`, `matplotlib`, or `xarray`.

## When to Use This Skill

- The user mentions `cnmaps` directly.
- The user wants to draw China, province, city, district, or global country and region boundaries.
- The user wants to overlay administrative boundaries on a `cartopy` map.
- The user wants to mask, clip, or constrain raster-like scientific data to an administrative boundary.
- The user needs help deciding which `cnmaps` function to use for querying boundaries, plotting, clipping, or centroid labeling.
- The user needs to understand whether a returned object can be passed into `cartopy`, `matplotlib`, or a downstream masking workflow.

## What Claude Should Do

- First classify the task as one of: boundary lookup, overlay plotting, raster mask/clip workflow, centroid labeling, or multi-library integration.
- Prefer real `cnmaps` APIs over guessed names. Use the supporting reference files before inferring missing details.
- When the task involves plotting, reason about the full stack: `cnmaps` objects, `cartopy` projection, Matplotlib axes, and how geometries are passed through.
- When the task involves raster clipping or masking, be explicit that `cnmaps` mainly provides boundary and geometry-side helpers; the full raster workflow may also involve NumPy, xarray, or Matplotlib objects.
- When the environment may not be ready, distinguish missing `cnmaps`, missing plotting dependencies, and missing data-provider discovery.

## cnmaps Knowledge Model

Treat `cnmaps` as a Python function library for querying compliant boundary data aligned with China's territorial claims, retrieving geometries and centroid coordinates, drawing boundaries, and helping boundary-guided scientific plotting workflows. It is not limited to China-only maps: it also supports global country and region boundaries. Do not describe it as a CLI-first tool. Many useful tasks require combining it with `cartopy`, `matplotlib`, NumPy, or xarray rather than expecting one black-box command.

## How to Work with Supporting Files

- Read `references/api-overview.md` when you need the package capability map.
- Read `references/workflows.md` when you need to choose a task-specific approach.
- Read `references/return-types.md` when you need to reason about what `get_adm_maps` or related APIs return and how those objects connect to downstream libraries.
- Read `references/common-pitfalls.md` when you need to avoid API hallucinations or common integration mistakes.
- Read `references/capability-boundaries.md` when you need to explain what `cnmaps` handles directly versus what still belongs to Cartopy, Matplotlib, NumPy, xarray, or external GIS tools.
- Prefer the files in `examples/` when producing runnable code for users.

## Output Requirements

- Prefer Python code that is directly runnable or needs only small project-specific edits.
- Briefly explain why a chosen `cnmaps` function or workflow fits the task.
- If the task involves `cartopy`, `matplotlib`, or `xarray`, include the necessary surrounding code instead of only showing the `cnmaps` call.
- Do not invent functions, return types, or module paths that are not confirmed.
- Do not describe `cnmaps` as if it were a standalone terminal command for boundary processing.

## Common Failure Modes

- Treating `cnmaps` as a unified CLI tool instead of a Python library.
- Confusing boundary geometries with raster arrays.
- Ignoring the `cartopy` projection and axes context in plotting code.
- Recomputing centroids from geometry when `MapRecord` already exposes `longitude` and `latitude`.
- Guessing return types or function signatures without checking the supporting references.
