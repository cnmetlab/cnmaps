---
name: cnmaps-python-assistant
description: Use when the user is writing or debugging Python code with cnmaps, including compliant boundary data aligned with China's territorial claims, China province/city/district boundaries, and global country or region boundary plotting, Cartopy administrative overlays, raster masking to an administrative region, or scientific map workflows that combine cnmaps with cartopy, matplotlib, or xarray.
---

# cnmaps Skill Overview

Use this skill when helping with Python code that uses `cnmaps`, especially for compliant boundary data aligned with China's territorial claims, administrative boundary lookup, boundary-guided plotting, scientific map workflows, and cases where `cnmaps` must work together with `cartopy`, `matplotlib`, NumPy, or xarray.

## When to Use This Skill

- The user mentions `cnmaps` directly.
- The user wants to draw Chinese province, city, district, or global country and region boundaries.
- The user wants to overlay boundaries on a `cartopy` map.
- The user wants to constrain gridded data to an administrative region.
- The user needs help choosing among `cnmaps` querying, plotting, clipping, or centroid-labeling APIs.
- The user needs to know how `cnmaps` return values fit into downstream `cartopy`, `matplotlib`, or xarray workflows.

## What Cursor Agent Should Do

- First decide whether the task is about boundary lookup, map drawing, centroid labeling, clipping plotted artists, or boundary-guided raster workflows.
- Treat `cnmaps` as a Python library, not as a unified CLI tool.
- Prefer real package APIs over guessed names.
- If the user already knows several exact province, city, district, or country names, prefer one batch `get_adm_maps(...)` query with a list filter over many separate calls.
- When plotting is involved, reason about projections, axes objects, geometry objects, and how labels or artists are placed.
- When mask or clip workflows are involved, clearly separate boundary retrieval from the downstream raster-processing step.
- If uncertain about API details, return types, or object semantics, read the supporting reference files before guessing.

## cnmaps Knowledge Model

`cnmaps` provides compliant boundary data aligned with China's territorial claims, including China administrative boundaries and global country or region boundaries, plus geometry wrappers, plotting helpers, clipping helpers, centroid coordinates on records, and sample scientific map data. It is commonly used with `cartopy` and `matplotlib`, and sometimes participates in workflows that also use NumPy or xarray.

## How to Work with Supporting Files

- Read `references/api-overview.md` for the package capability map.
- Read `references/workflows.md` for task-specific workflows.
- Read `references/return-types.md` before wiring `cnmaps` objects into other libraries.
- Read `references/common-pitfalls.md` to avoid common hallucinations and integration mistakes.
- Read `references/capability-boundaries.md` when you need to separate `cnmaps` responsibilities from Cartopy, Matplotlib, NumPy, xarray, or GIS export tooling.
- Prefer the files in `examples/` when writing runnable code for users.

## Output Requirements

- Prefer Python code that is directly runnable or needs only small local edits.
- Explain why the selected `cnmaps` API or workflow fits the task.
- Include the needed surrounding `cartopy`, `matplotlib`, NumPy, or xarray code instead of only showing one isolated call.
- Do not invent functions, return types, or module paths.
- Do not reframe `cnmaps` as a terminal-only tool.

## Common Failure Modes

- Treating `cnmaps` as a CLI instead of a Python library.
- Confusing boundary objects with raster arrays.
- Forgetting Cartopy projection or Matplotlib axes context.
- Recomputing centroids from geometry when `MapRecord` already exposes `longitude` and `latitude`.
- Guessing APIs without checking the supporting references.
