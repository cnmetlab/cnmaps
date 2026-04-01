"""Lightweight CLI entrypoints for cnmaps packaging utilities."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


SOURCE_SKILL_NAME = "cnmaps"
SKILL_NAME = "cnmaps-python-assistant"
CLAUDE_SKILL_NAME = "cnmaps-python-assistant"
CODEX_MARKER_START = "<!-- cnmaps-codex-skill:start -->"
CODEX_MARKER_END = "<!-- cnmaps-codex-skill:end -->"


def _project_root() -> Path:
    return Path(__file__).resolve().parent.parent


def get_skill_source_dir() -> Path:
    """Return the bundled cnmaps skill source directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / SOURCE_SKILL_NAME
    if (bundled_skill_dir / "SKILL.md").exists():
        return bundled_skill_dir

    raise FileNotFoundError("Unable to locate the bundled cnmaps skill files.")


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def _strip_front_matter(text: str) -> str:
    if not text.startswith("---\n"):
        return text
    _, _, remainder = text.partition("\n---\n")
    return remainder.strip() if remainder else text


def _replace_or_append_marked_block(content: str, start: str, end: str, block: str) -> str:
    new_block = f"{start}\n{block.rstrip()}\n{end}"
    if start in content and end in content:
        prefix, _, tail = content.partition(start)
        _, _, suffix = tail.partition(end)
        return f"{prefix.rstrip()}\n\n{new_block}\n{suffix.lstrip()}".rstrip() + "\n"

    base = content.rstrip()
    if base:
        return f"{base}\n\n{new_block}\n"
    return f"{new_block}\n"


def _ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def _copy_skill_tree(source_dir: Path, target_dir: Path) -> None:
    shutil.copytree(
        source_dir,
        target_dir,
        ignore=shutil.ignore_patterns("__pycache__", "*.pyc", "*.pyo", ".DS_Store"),
    )


def _resolve_install_root(workspace: Path, scope: str) -> Path:
    if scope == "local":
        return workspace
    if scope == "global":
        return Path.home()
    raise ValueError(f"Unsupported install scope: {scope}")


def _render_condensed_skill_text(source_dir: Path) -> str:
    skill = _strip_front_matter(_read_text(source_dir / "SKILL.md"))
    skill = skill.replace(
        "For detailed API selection, read [references/api-cheatsheet.md](references/api-cheatsheet.md). For common plotting workflows, read [references/plotting-patterns.md](references/plotting-patterns.md).",
        "The API selection notes and plotting workflow patterns are embedded below so this file can stand on its own.",
    )
    api = _read_text(source_dir / "references" / "api-cheatsheet.md")
    plotting = _read_text(source_dir / "references" / "plotting-patterns.md")
    return (
        "# cnmaps AI Guidance\n\n"
        "Use this guidance when editing or explaining code that uses cnmaps.\n\n"
        f"{skill}\n\n"
        f"{api}\n\n"
        f"{plotting}\n"
    ).strip()


def _render_claude_skill_entry() -> str:
    return (
        "---\n"
        f"name: {CLAUDE_SKILL_NAME}\n"
        "description: Use when the user is writing or debugging Python code with cnmaps, Chinese province/city/district boundaries, country-level boundary plotting, Cartopy administrative overlays, raster masking to an administrative region, or scientific map workflows that combine cnmaps with cartopy, matplotlib, or xarray.\n"
        "---\n\n"
        "# cnmaps Skill Overview\n\n"
        "Use this guidance when helping with Python code that uses `cnmaps`, especially for Chinese administrative boundaries, "
        "country-level boundaries, Cartopy overlays, Matplotlib map rendering, raster masking ideas, and workflows that combine "
        "`cnmaps` with `cartopy`, `matplotlib`, or `xarray`.\n\n"
        "## When to Use This Skill\n\n"
        "- The user mentions `cnmaps` directly.\n"
        "- The user wants to draw China, province, city, district, or country boundaries.\n"
        "- The user wants to overlay administrative boundaries on a `cartopy` map.\n"
        "- The user wants to mask, clip, or constrain raster-like scientific data to an administrative boundary.\n"
        "- The user needs help deciding which `cnmaps` function to use for querying boundaries, plotting, clipping, or centroid labeling.\n"
        "- The user needs to understand whether a returned object can be passed into `cartopy`, `matplotlib`, or a downstream masking workflow.\n\n"
        "## What Claude Should Do\n\n"
        "- First classify the task as one of: boundary lookup, overlay plotting, raster mask/clip workflow, centroid labeling, or multi-library integration.\n"
        "- Prefer real `cnmaps` APIs over guessed names. Use the supporting reference files before inferring missing details.\n"
        "- When the task involves plotting, reason about the full stack: `cnmaps` objects, `cartopy` projection, Matplotlib axes, and how geometries are passed through.\n"
        "- When the task involves raster clipping or masking, be explicit that `cnmaps` mainly provides boundary and geometry-side helpers; the full raster workflow may also involve NumPy, xarray, or Matplotlib objects.\n"
        "- When the environment may not be ready, distinguish missing `cnmaps`, missing plotting dependencies, and missing data-provider discovery.\n\n"
        "## cnmaps Knowledge Model\n\n"
        "Treat `cnmaps` as a Python function library for querying administrative boundaries, retrieving geometries and centroid coordinates, drawing boundaries, "
        "and helping boundary-aware scientific plotting workflows. Do not describe it as a CLI-first tool. Many useful tasks require combining it with `cartopy`, "
        "`matplotlib`, NumPy, or xarray rather than expecting one black-box command.\n\n"
        "## How to Work with Supporting Files\n\n"
        "- Read `references/api-overview.md` when you need the package capability map.\n"
        "- Read `references/workflows.md` when you need to choose a task-specific approach.\n"
        "- Read `references/return-types.md` when you need to reason about what `get_adm_maps` or related APIs return and how those objects connect to downstream libraries.\n"
        "- Read `references/common-pitfalls.md` when you need to avoid API hallucinations or common integration mistakes.\n"
        "- Prefer the files in `examples/` when producing runnable code for users.\n\n"
        "## Output Requirements\n\n"
        "- Prefer Python code that is directly runnable or needs only small project-specific edits.\n"
        "- Briefly explain why a chosen `cnmaps` function or workflow fits the task.\n"
        "- If the task involves `cartopy`, `matplotlib`, or `xarray`, include the necessary surrounding code instead of only showing the `cnmaps` call.\n"
        "- Do not invent functions, return types, or module paths that are not confirmed.\n"
        "- Do not describe `cnmaps` as if it were a standalone terminal command for boundary processing.\n\n"
        "## Common Failure Modes\n\n"
        "- Treating `cnmaps` as a unified CLI tool instead of a Python library.\n"
        "- Confusing boundary geometries with raster arrays.\n"
        "- Ignoring the `cartopy` projection and axes context in plotting code.\n"
        "- Recomputing centroids from geometry when `MapRecord` already exposes `longitude` and `latitude`.\n"
        "- Guessing return types or function signatures without checking the supporting references.\n"
    )


def _render_claude_api_overview(source_dir: Path) -> str:
    skill = _read_text(source_dir / "SKILL.md")
    return (
        "# API Overview\n\n"
        "This file gives Claude a conservative overview of `cnmaps` capabilities for Python coding tasks.\n\n"
        "## Package Role\n\n"
        "- `cnmaps` is primarily a Python library for administrative-boundary lookup, geometry retrieval, plotting helpers, clipping helpers, and sample-data-assisted map workflows.\n"
        "- It is commonly used with `cartopy`, `matplotlib`, NumPy, and sometimes xarray.\n"
        "- Official boundary and sample data are provided by `cnmaps-data`.\n\n"
        "## Major Capability Areas\n\n"
        "- Query administrative boundaries and names.\n"
        "- Retrieve `MapRecord`, `MapPolygon`, or `GeoDataFrame`-style results.\n"
        "- Draw one or many geometries on Cartopy axes.\n"
        "- Clip contour, pcolormesh, quiver, scatter, and contour-label outputs by map boundaries.\n"
        "- Load sample raster-like datasets for plotting examples.\n"
        "- Inspect data providers for installed boundary/sample datasets.\n\n"
        "## Typical Entry Points\n\n"
        "- `get_adm_maps`: main boundary query API.\n"
        "- `get_adm_names`: name lookup without needing full geometries.\n"
        "- `draw_map` / `draw_maps`: boundary rendering helpers.\n"
        "- `clip_*_by_map`: artist-level clipping helpers for Matplotlib/Cartopy plots.\n"
        "- `load_dem`, `load_temp`, `load_wind`: sample data loaders.\n"
        "- `get_available_data_providers`, `get_data_provider`: provider inspection APIs.\n\n"
        "## Typical Return Categories\n\n"
        "- Boundary records with metadata and geometry.\n"
        "- Polygon-like geometry wrappers.\n"
        "- GeoPandas objects when requested.\n"
        "- Grid arrays from sample loaders.\n\n"
        "## Typical Companion Libraries\n\n"
        "- `cartopy` for geographic axes and projections.\n"
        "- `matplotlib` for plotting.\n"
        "- NumPy for mask-style array workflows.\n"
        "- xarray may appear in user code, but exact integration details should be matched to the user's project.\n\n"
        "## Source Note\n\n"
        "The canonical bundled guidance source currently begins from:\n\n"
        "```md\n"
        f"{skill[:1200]}\n"
        "```\n\n"
        "If any low-level API detail remains unclear, verify against the project source or current installed version instead of guessing.\n"
    )


def _render_claude_workflows() -> str:
    return (
        "# Workflows\n\n"
        "## Administrative Boundary Plotting\n\n"
        "- Use when the user wants to draw China, provinces, cities, districts, or world country boundaries.\n"
        "- Recommended approach: query boundaries with `get_adm_maps`, then draw with `draw_map` or `draw_maps` on a Cartopy axis.\n"
        "- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.\n"
        "- Watch for projection setup and whether the task needs one geometry or many.\n\n"
        "## Province / City / Country Selection\n\n"
        "- Use when the user wants one specific administrative region or a filtered subset.\n"
        "- Recommended approach: use `get_adm_maps(..., record=\"first\")` for a single region, or `get_adm_names` when the user first needs available names.\n"
        "- Libraries involved: mostly `cnmaps`; plotting libraries only if visualization is needed.\n"
        "- Watch for `level='国'` semantics and explicit `country='中国'` when China-only behavior is intended.\n\n"
        "## Overlay Boundaries on Cartopy Maps\n\n"
        "- Use when the user already has a Cartopy plot and wants administrative overlays.\n"
        "- Recommended approach: create the GeoAxes with the correct projection, then pass `MapPolygon` or record geometries to `draw_map` / `draw_maps`.\n"
        "- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.\n"
        "- Watch for passing the correct `ax` object and using `transform=ccrs.PlateCarree()` for text/markers.\n\n"
        "## Boundary-Aware Raster Mask / Clip Workflow\n\n"
        "- Use when the user wants to restrict scientific gridded data to an administrative boundary.\n"
        "- Recommended approach: use `cnmaps` to obtain the relevant geometry or mask helper, then combine it with NumPy/xarray/Matplotlib workflow pieces.\n"
        "- Libraries involved: `cnmaps`, NumPy, potentially xarray, Matplotlib, Cartopy.\n"
        "- Important: be explicit about what `cnmaps` handles directly versus what remains a downstream raster-processing step.\n\n"
        "## Centroid Labeling\n\n"
        "- Use when the user wants country, province, city, or district labels placed near default center points.\n"
        "- Recommended approach: query `MapRecord` rows and use `record.longitude` / `record.latitude` instead of recomputing centroids from geometry.\n"
        "- Libraries involved: `cnmaps`, `cartopy`, `matplotlib`.\n"
        "- Watch for large or fragmented regions where whole-geometry centroids may not match hand-tuned label positions.\n"
    )


def _render_claude_return_types() -> str:
    return (
        "# Return Types\n\n"
        "Use this file to reason about how `cnmaps` outputs connect to downstream code.\n\n"
        "## MapRecord-style Results\n\n"
        "- Common when `get_adm_maps(..., engine=None, only_polygon=False)` is used.\n"
        "- Includes metadata fields and a `geometry` field.\n"
        "- Also exposes centroid coordinates such as `longitude` and `latitude`.\n"
        "- Good for labeling, region-specific filtering, and mixed metadata + geometry workflows.\n\n"
        "## MapPolygon-style Results\n\n"
        "- Common when `only_polygon=True` is used.\n"
        "- Good for geometry-first workflows such as drawing, extent handling, boolean operations, or masking helpers.\n"
        "- Lacks the extra metadata fields of `MapRecord`.\n\n"
        "## GeoPandas Results\n\n"
        "- Common when `engine='geopandas'` is requested.\n"
        "- Good when the user already wants GeoPandas-style processing or tabular geometry operations.\n"
        "- Use carefully when downstream code expects GeoPandas rather than the historical `MapPolygon` wrapper.\n\n"
        "## Sample Loader Results\n\n"
        "- Sample data APIs return NumPy-style arrays such as longitude grids, latitude grids, and one or more data arrays.\n"
        "- These are useful for plotting examples but are not boundary geometries.\n\n"
        "## Integration Guidance\n\n"
        "- For Cartopy drawing, geometry-bearing results are the important part.\n"
        "- For Matplotlib labels, `MapRecord.longitude` / `latitude` are often the simplest path.\n"
        "- For mask workflows, boundary objects and mask arrays should not be confused with raster values themselves.\n"
    )


def _render_claude_common_pitfalls() -> str:
    return (
        "# Common Pitfalls\n\n"
        "- Do not invent a `cnmaps` CLI workflow when the task is really about Python APIs.\n"
        "- Do not assume `level='国'` means China only.\n"
        "- Do not add `source='世界银行'` or `source='高德'` unless the user actually needs source filtering.\n"
        "- Do not confuse `MapRecord` metadata rows with raster arrays.\n"
        "- Do not forget Cartopy projection and axes setup in map code.\n"
        "- Do not recompute centroids from geometry before checking whether `longitude` / `latitude` are already available on the returned record.\n"
        "- Do not assume the current sandbox Python environment matches the user's already-configured environment.\n"
        "- Do not guess return types or parameter names when the reference files can clarify them.\n"
    )


def _render_claude_example_plot_boundary() -> str:
    return (
        "import cartopy.crs as ccrs\n"
        "import matplotlib.pyplot as plt\n\n"
        "from cnmaps import draw_maps, get_adm_maps\n\n"
        "fig = plt.figure(figsize=(10, 10))\n"
        "ax = fig.add_subplot(111, projection=ccrs.PlateCarree())\n\n"
        "china = get_adm_maps(country=\"中国\", level=\"国\")\n"
        "draw_maps(china, ax=ax, linewidth=1.0, color=\"#1f4e79\")\n"
        "ax.set_extent([73, 136, 16, 54], crs=ccrs.PlateCarree())\n"
        "plt.show()\n"
    )


def _render_claude_example_mask_raster() -> str:
    return (
        "import numpy as np\n\n"
        "from cnmaps import get_adm_maps\n"
        "from cnmaps.sample import load_temp\n\n"
        "# cnmaps provides the boundary object and mask helper.\n"
        "# The full raster processing workflow may still involve NumPy, xarray,\n"
        "# or plotting code outside cnmaps itself.\n"
        "lons, lats, temp = load_temp()\n"
        "henan = get_adm_maps(province=\"河南省\", record=\"first\", only_polygon=True)\n\n"
        "masked_temp = henan.maskout(lons, lats, temp)\n"
        "print(np.ma.min(masked_temp), np.ma.max(masked_temp))\n"
    )


def _render_claude_example_province_selection() -> str:
    return (
        "import cartopy.crs as ccrs\n"
        "import matplotlib.pyplot as plt\n\n"
        "from cnmaps import draw_map, get_adm_maps\n\n"
        "record = get_adm_maps(province=\"四川省\", record=\"first\")\n\n"
        "fig = plt.figure(figsize=(8, 8))\n"
        "ax = fig.add_subplot(111, projection=ccrs.PlateCarree())\n"
        "draw_map(record.geometry, ax=ax, linewidth=1.0, color=\"#2a6fdb\")\n"
        "ax.scatter(record.longitude, record.latitude, color=\"crimson\", s=20, transform=ccrs.PlateCarree())\n"
        "ax.text(record.longitude, record.latitude, \"Sichuan\", transform=ccrs.PlateCarree(), ha=\"center\", va=\"bottom\")\n"
        "ax.set_extent(record.geometry.get_extent(buffer=1.0), crs=ccrs.PlateCarree())\n"
        "plt.show()\n"
    )


def _render_cursor_skill_entry() -> str:
    return (
        "---\n"
        f"name: {SKILL_NAME}\n"
        "description: Use when the user is writing or debugging Python code with cnmaps, Chinese province/city/district boundaries, country-level boundary plotting, Cartopy administrative overlays, raster masking to an administrative region, or scientific map workflows that combine cnmaps with cartopy, matplotlib, or xarray.\n"
        "---\n\n"
        "# cnmaps Skill Overview\n\n"
        "Use this skill when helping with Python code that uses `cnmaps`, especially for administrative boundary lookup, boundary-aware plotting, scientific map workflows, and cases where `cnmaps` must work together with `cartopy`, `matplotlib`, NumPy, or xarray.\n\n"
        "## When to Use This Skill\n\n"
        "- The user mentions `cnmaps` directly.\n"
        "- The user wants to draw Chinese province, city, district, or country boundaries.\n"
        "- The user wants to overlay boundaries on a `cartopy` map.\n"
        "- The user wants to constrain gridded data to an administrative region.\n"
        "- The user needs help choosing among `cnmaps` querying, plotting, clipping, or centroid-labeling APIs.\n"
        "- The user needs to know how `cnmaps` return values fit into downstream `cartopy`, `matplotlib`, or xarray workflows.\n\n"
        "## What Cursor Agent Should Do\n\n"
        "- First decide whether the task is about boundary lookup, map drawing, centroid labeling, clipping plotted artists, or boundary-aware raster workflows.\n"
        "- Treat `cnmaps` as a Python library, not as a unified CLI tool.\n"
        "- Prefer real package APIs over guessed names.\n"
        "- When plotting is involved, reason about projections, axes objects, geometry objects, and how labels or artists are placed.\n"
        "- When mask or clip workflows are involved, clearly separate boundary retrieval from the downstream raster-processing step.\n"
        "- If uncertain about API details, return types, or object semantics, read the supporting reference files before guessing.\n\n"
        "## cnmaps Knowledge Model\n\n"
        "`cnmaps` provides administrative boundaries, geometry wrappers, plotting helpers, clipping helpers, centroid coordinates on records, and sample scientific map data. It is commonly used with `cartopy` and `matplotlib`, and sometimes participates in workflows that also use NumPy or xarray.\n\n"
        "## How to Work with Supporting Files\n\n"
        "- Read `references/api-overview.md` for the package capability map.\n"
        "- Read `references/workflows.md` for task-specific workflows.\n"
        "- Read `references/return-types.md` before wiring `cnmaps` objects into other libraries.\n"
        "- Read `references/common-pitfalls.md` to avoid common hallucinations and integration mistakes.\n"
        "- Prefer the files in `examples/` when writing runnable code for users.\n\n"
        "## Output Requirements\n\n"
        "- Prefer Python code that is directly runnable or needs only small local edits.\n"
        "- Explain why the selected `cnmaps` API or workflow fits the task.\n"
        "- Include the needed surrounding `cartopy`, `matplotlib`, NumPy, or xarray code instead of only showing one isolated call.\n"
        "- Do not invent functions, return types, or module paths.\n"
        "- Do not reframe `cnmaps` as a terminal-only tool.\n\n"
        "## Common Failure Modes\n\n"
        "- Treating `cnmaps` as a CLI instead of a Python library.\n"
        "- Confusing boundary objects with raster arrays.\n"
        "- Forgetting Cartopy projection or Matplotlib axes context.\n"
        "- Recomputing centroids from geometry when `MapRecord` already exposes `longitude` and `latitude`.\n"
        "- Guessing APIs without checking the supporting references.\n"
    )


def install_codex_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    source_dir = get_skill_source_dir()
    install_root = _resolve_install_root(workspace, scope)
    target_dir = install_root / ".agents" / "skills" / SKILL_NAME
    legacy_target_dir = install_root / ".codex" / "skills" / SKILL_NAME

    if target_dir.exists():
        if not force:
            raise FileExistsError(f"Codex skill already exists at {target_dir}. Re-run with --force to overwrite it.")
        shutil.rmtree(target_dir)

    if legacy_target_dir.exists():
        if not force:
            raise FileExistsError(
                f"Legacy Codex skill exists at {legacy_target_dir}. Re-run with --force to replace it."
            )
        shutil.rmtree(legacy_target_dir)

    target_dir.parent.mkdir(parents=True, exist_ok=True)
    _copy_skill_tree(source_dir, target_dir)

    agents_path = workspace / "AGENTS.md"
    written_paths = [target_dir]
    if scope == "local":
        existing = _read_text(agents_path) if agents_path.exists() else ""
        block = (
            "## cnmaps Skill\n\n"
            "If you are an AI coding agent working in this repository, use the repo-local skill at:\n\n"
            f"- [`.agents/skills/{SKILL_NAME}/SKILL.md`](.agents/skills/{SKILL_NAME}/SKILL.md)\n\n"
            "Additional references:\n\n"
            f"- [API cheatsheet](.agents/skills/{SKILL_NAME}/references/api-cheatsheet.md)\n"
            f"- [Plotting patterns](.agents/skills/{SKILL_NAME}/references/plotting-patterns.md)"
        )
        agents_path.write_text(
            _replace_or_append_marked_block(existing, CODEX_MARKER_START, CODEX_MARKER_END, block),
            encoding="utf-8",
        )
        written_paths.append(agents_path)
    return written_paths


def install_cursor_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    source_dir = get_skill_source_dir()
    install_root = _resolve_install_root(workspace, scope)
    skill_root = install_root / ".cursor" / "skills" / SKILL_NAME
    legacy_rule_path = install_root / ".cursor" / "rules" / f"{SKILL_NAME}.mdc"
    legacy_skill_root = install_root / ".cursor" / SKILL_NAME

    if skill_root.exists():
        if not force:
            raise FileExistsError(f"Cursor skill already exists at {skill_root}. Re-run with --force to overwrite it.")
        shutil.rmtree(skill_root)

    if legacy_rule_path.exists():
        if not force:
            raise FileExistsError(
                f"Legacy Cursor rule exists at {legacy_rule_path}. Re-run with --force to replace it."
            )
        legacy_rule_path.unlink()

    if legacy_skill_root.exists():
        if not force:
            raise FileExistsError(
                f"Legacy Cursor guidance exists at {legacy_skill_root}. Re-run with --force to replace it."
            )
        shutil.rmtree(legacy_skill_root)

    (skill_root / "references").mkdir(parents=True, exist_ok=True)
    (skill_root / "examples").mkdir(parents=True, exist_ok=True)
    (skill_root / "SKILL.md").write_text(_render_cursor_skill_entry() + "\n", encoding="utf-8")
    (skill_root / "references" / "api-overview.md").write_text(
        _render_claude_api_overview(source_dir) + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "workflows.md").write_text(
        _render_claude_workflows() + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "return-types.md").write_text(
        _render_claude_return_types() + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "common-pitfalls.md").write_text(
        _render_claude_common_pitfalls() + "\n", encoding="utf-8"
    )
    (skill_root / "examples" / "plot-boundary-example.py").write_text(
        _render_claude_example_plot_boundary(), encoding="utf-8"
    )
    (skill_root / "examples" / "mask-raster-example.py").write_text(
        _render_claude_example_mask_raster(), encoding="utf-8"
    )
    (skill_root / "examples" / "province-selection-example.py").write_text(
        _render_claude_example_province_selection(), encoding="utf-8"
    )

    return [
        skill_root / "SKILL.md",
        skill_root / "references" / "api-overview.md",
        skill_root / "references" / "workflows.md",
        skill_root / "references" / "return-types.md",
        skill_root / "references" / "common-pitfalls.md",
        skill_root / "examples" / "plot-boundary-example.py",
        skill_root / "examples" / "mask-raster-example.py",
        skill_root / "examples" / "province-selection-example.py",
    ]


def install_claudecode_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    source_dir = get_skill_source_dir()
    install_root = _resolve_install_root(workspace, scope)
    skill_root = install_root / ".claude" / "skills" / CLAUDE_SKILL_NAME
    legacy_skill_root = install_root / ".claude" / CLAUDE_SKILL_NAME

    if skill_root.exists():
        if not force:
            raise FileExistsError(
                f"Claude Code skill already exists at {skill_root}. Re-run with --force to overwrite it."
            )
        shutil.rmtree(skill_root)

    if legacy_skill_root.exists():
        if not force:
            raise FileExistsError(
                f"Legacy Claude Code guidance exists at {legacy_skill_root}. Re-run with --force to replace it."
            )
        shutil.rmtree(legacy_skill_root)

    (skill_root / "references").mkdir(parents=True, exist_ok=True)
    (skill_root / "examples").mkdir(parents=True, exist_ok=True)

    skill_entry_path = skill_root / "SKILL.md"
    skill_entry_path.write_text(_render_claude_skill_entry() + "\n", encoding="utf-8")
    (skill_root / "references" / "api-overview.md").write_text(
        _render_claude_api_overview(source_dir) + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "workflows.md").write_text(
        _render_claude_workflows() + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "return-types.md").write_text(
        _render_claude_return_types() + "\n", encoding="utf-8"
    )
    (skill_root / "references" / "common-pitfalls.md").write_text(
        _render_claude_common_pitfalls() + "\n", encoding="utf-8"
    )
    (skill_root / "examples" / "plot-boundary-example.py").write_text(
        _render_claude_example_plot_boundary(), encoding="utf-8"
    )
    (skill_root / "examples" / "mask-raster-example.py").write_text(
        _render_claude_example_mask_raster(), encoding="utf-8"
    )
    (skill_root / "examples" / "province-selection-example.py").write_text(
        _render_claude_example_province_selection(), encoding="utf-8"
    )
    return [
        skill_entry_path,
        skill_root / "references" / "api-overview.md",
        skill_root / "references" / "workflows.md",
        skill_root / "references" / "return-types.md",
        skill_root / "references" / "common-pitfalls.md",
        skill_root / "examples" / "plot-boundary-example.py",
        skill_root / "examples" / "mask-raster-example.py",
        skill_root / "examples" / "province-selection-example.py",
    ]


INSTALLERS = {
    "codex": install_codex_skill,
    "cursor": install_cursor_skill,
    "claudecode": install_claudecode_skill,
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="cnmaps")
    subparsers = parser.add_subparsers(dest="command")

    install_parser = subparsers.add_parser(
        "install-skill",
        help="Install cnmaps AI guidance into the current project for a supported assistant.",
    )
    install_parser.add_argument(
        "assistant",
        choices=sorted(INSTALLERS),
        help="Assistant target format to install: codex, cursor, or claudecode.",
    )
    install_parser.add_argument(
        "--dir",
        type=Path,
        default=Path.cwd(),
        help="Workspace directory for local installs. Defaults to the current directory.",
    )
    install_parser.add_argument(
        "--mode",
        choices=("local", "global"),
        default="local",
        help="Install into the current project (local) or into the user's home directory (global).",
    )
    install_parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite files created by a previous cnmaps skill installation.",
    )

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "install-skill":
        installer = INSTALLERS[args.assistant]
        try:
            written_paths = installer(args.dir.expanduser().resolve(), force=args.force, scope=args.mode)
        except (FileExistsError, FileNotFoundError) as exc:
            parser.exit(1, f"{exc}\n")

        target_root = _resolve_install_root(args.dir.expanduser().resolve(), args.mode)
        lines = [f"Installed cnmaps {args.assistant} guidance in {args.mode} mode under {target_root}:"]
        lines.extend(f"- {path}" for path in written_paths)
        parser.exit(0, "\n".join(lines) + "\n")

    parser.print_help()
    return 0
