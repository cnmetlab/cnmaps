"""Lightweight CLI entrypoints for cnmaps packaging utilities."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


SKILL_NAME = "cnmaps-python-assistant"
CODEX_MARKER_START = "<!-- cnmaps-codex-skill:start -->"
CODEX_MARKER_END = "<!-- cnmaps-codex-skill:end -->"


def _project_root() -> Path:
    return Path(__file__).resolve().parent.parent


def get_codex_skill_source_dir() -> Path:
    """Return the bundled Codex skill source directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / "platforms" / "codex" / SKILL_NAME
    if (bundled_skill_dir / "SKILL.md").exists():
        return bundled_skill_dir

    raise FileNotFoundError("Unable to locate the bundled Codex skill files.")


def get_cursor_skill_entry_dir() -> Path:
    """Return the bundled Cursor skill entry directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / "platforms" / "cursor" / SKILL_NAME
    if (bundled_skill_dir / "SKILL.md").exists():
        return bundled_skill_dir

    raise FileNotFoundError("Unable to locate the bundled Cursor skill files.")


def get_claude_skill_entry_dir() -> Path:
    """Return the bundled Claude Code skill entry directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / "platforms" / "claudecode" / SKILL_NAME
    if (bundled_skill_dir / "SKILL.md").exists():
        return bundled_skill_dir

    raise FileNotFoundError("Unable to locate the bundled Claude Code skill files.")


def get_shared_skill_support_dir() -> Path:
    """Return the bundled shared references/examples directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / "shared" / SKILL_NAME
    if (bundled_skill_dir / "references").exists() and (bundled_skill_dir / "examples").exists():
        return bundled_skill_dir

    raise FileNotFoundError("Unable to locate the bundled shared skill support files.")


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


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


def _copy_tree_contents(source_dir: Path, target_dir: Path) -> None:
    target_dir.mkdir(parents=True, exist_ok=True)
    for child in source_dir.iterdir():
        destination = target_dir / child.name
        if child.is_dir():
            shutil.copytree(
                child,
                destination,
                ignore=shutil.ignore_patterns("__pycache__", "*.pyc", "*.pyo", ".DS_Store"),
            )
        else:
            shutil.copy2(child, destination)


def _resolve_install_root(workspace: Path, scope: str) -> Path:
    if scope == "local":
        return workspace
    if scope == "global":
        return Path.home()
    raise ValueError(f"Unsupported install scope: {scope}")


def install_codex_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    source_dir = get_codex_skill_source_dir()
    shared_dir = get_shared_skill_support_dir()
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
    _copy_tree_contents(shared_dir / "references", target_dir / "references")
    _copy_tree_contents(shared_dir / "examples", target_dir / "examples")

    agents_path = workspace / "AGENTS.md"
    written_paths = [
        target_dir / "SKILL.md",
        target_dir / "references" / "api-cheatsheet.md",
        target_dir / "references" / "plotting-patterns.md",
        target_dir / "references" / "capability-boundaries.md",
        target_dir / "references" / "api-overview.md",
        target_dir / "references" / "workflows.md",
        target_dir / "references" / "return-types.md",
        target_dir / "references" / "common-pitfalls.md",
        target_dir / "examples" / "plot-boundary-example.py",
        target_dir / "examples" / "mask-raster-example.py",
        target_dir / "examples" / "multi-region-selection-example.py",
        target_dir / "examples" / "province-selection-example.py",
        target_dir / "examples" / "clip-pcolormesh-example.py",
        target_dir / "examples" / "clip-quiver-example.py",
        target_dir / "examples" / "clip-clabels-example.py",
        target_dir / "examples" / "country-centroids-overview.py",
        target_dir / "examples" / "vector-export-example.py",
    ]
    if scope == "local":
        existing = _read_text(agents_path) if agents_path.exists() else ""
        block = (
            "## cnmaps Skill\n\n"
            "If you are an AI coding agent working in this repository, use the repo-local skill at:\n\n"
            f"- [`.agents/skills/{SKILL_NAME}/SKILL.md`](.agents/skills/{SKILL_NAME}/SKILL.md)\n\n"
            "Additional references:\n\n"
            f"- [API cheatsheet](.agents/skills/{SKILL_NAME}/references/api-cheatsheet.md)\n"
            f"- [Plotting patterns](.agents/skills/{SKILL_NAME}/references/plotting-patterns.md)\n"
            f"- [Capability boundaries](.agents/skills/{SKILL_NAME}/references/capability-boundaries.md)"
        )
        agents_path.write_text(
            _replace_or_append_marked_block(existing, CODEX_MARKER_START, CODEX_MARKER_END, block),
            encoding="utf-8",
        )
        written_paths.append(agents_path)
    return written_paths


def install_cursor_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    entry_dir = get_cursor_skill_entry_dir()
    shared_dir = get_shared_skill_support_dir()
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

    skill_root.parent.mkdir(parents=True, exist_ok=True)
    _copy_skill_tree(entry_dir, skill_root)
    _copy_tree_contents(shared_dir, skill_root)

    return [
        skill_root / "SKILL.md",
        skill_root / "references" / "api-overview.md",
        skill_root / "references" / "workflows.md",
        skill_root / "references" / "return-types.md",
        skill_root / "references" / "common-pitfalls.md",
        skill_root / "references" / "capability-boundaries.md",
        skill_root / "examples" / "plot-boundary-example.py",
        skill_root / "examples" / "mask-raster-example.py",
        skill_root / "examples" / "multi-region-selection-example.py",
        skill_root / "examples" / "province-selection-example.py",
        skill_root / "examples" / "clip-pcolormesh-example.py",
        skill_root / "examples" / "clip-quiver-example.py",
        skill_root / "examples" / "clip-clabels-example.py",
        skill_root / "examples" / "country-centroids-overview.py",
        skill_root / "examples" / "vector-export-example.py",
    ]


def install_claudecode_skill(workspace: Path, force: bool = False, scope: str = "local") -> list[Path]:
    entry_dir = get_claude_skill_entry_dir()
    shared_dir = get_shared_skill_support_dir()
    install_root = _resolve_install_root(workspace, scope)
    skill_root = install_root / ".claude" / "skills" / SKILL_NAME
    legacy_skill_root = install_root / ".claude" / SKILL_NAME

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

    skill_root.parent.mkdir(parents=True, exist_ok=True)
    _copy_skill_tree(entry_dir, skill_root)
    _copy_tree_contents(shared_dir, skill_root)
    skill_entry_path = skill_root / "SKILL.md"
    return [
        skill_entry_path,
        skill_root / "references" / "api-overview.md",
        skill_root / "references" / "workflows.md",
        skill_root / "references" / "return-types.md",
        skill_root / "references" / "common-pitfalls.md",
        skill_root / "references" / "capability-boundaries.md",
        skill_root / "examples" / "plot-boundary-example.py",
        skill_root / "examples" / "mask-raster-example.py",
        skill_root / "examples" / "multi-region-selection-example.py",
        skill_root / "examples" / "province-selection-example.py",
        skill_root / "examples" / "clip-pcolormesh-example.py",
        skill_root / "examples" / "clip-quiver-example.py",
        skill_root / "examples" / "clip-clabels-example.py",
        skill_root / "examples" / "country-centroids-overview.py",
        skill_root / "examples" / "vector-export-example.py",
    ]


INSTALLERS = {
    "codex": install_codex_skill,
    "cursor": install_cursor_skill,
    "claudecode": install_claudecode_skill,
}


_EXPORTABLE_COLUMNS = (
    "country",
    "province",
    "city",
    "district",
    "level",
    "source",
    "kind",
    "longitude",
    "latitude",
    "geometry",
)


def _normalize_export_engine(engine: str | None, output_path: Path) -> str:
    if engine is None:
        suffix = output_path.suffix.lower()
        if suffix in {".geojson", ".json"}:
            return "GeoJSON"
        if suffix == ".shp":
            return "ESRI Shapefile"
        raise ValueError(
            "Unable to infer export format from the output path. "
            "Use a .geojson/.json or .shp suffix, or pass --engine explicitly."
        )

    normalized = engine.strip().lower()
    if normalized in {"geojson", "json"}:
        return "GeoJSON"
    if normalized in {"esri shapefile", "shapefile", "shp"}:
        return "ESRI Shapefile"
    raise ValueError(f"Unsupported export engine: {engine}")


def export_adm_maps(
    output: Path,
    *,
    province=None,
    city=None,
    district=None,
    level=None,
    country=None,
    source=None,
    provider=None,
    record: str = "all",
    wgs84: bool = True,
    simplify: bool = False,
    engine: str | None = None,
    encoding: str = "utf-8",
) -> Path:
    from cnmaps import get_adm_maps

    driver = _normalize_export_engine(engine, output)
    gdf = get_adm_maps(
        province=province,
        city=city,
        district=district,
        level=level,
        country=country,
        source=source,
        provider=provider,
        record="all",
        engine="geopandas",
        wgs84=wgs84,
        simplify=simplify,
    )

    if record == "first":
        gdf = gdf.iloc[[0]].copy()
    else:
        gdf = gdf.copy()

    export_columns = [column for column in _EXPORTABLE_COLUMNS if column in gdf.columns]
    gdf = gdf[export_columns]
    if wgs84:
        gdf = gdf.set_crs("EPSG:4326")

    output.parent.mkdir(parents=True, exist_ok=True)
    gdf.to_file(output, driver=driver, encoding=encoding)
    return output


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
        "-m",
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

    export_parser = subparsers.add_parser(
        "export",
        help="Query administrative boundaries and export the matched result directly to GeoJSON or Shapefile.",
    )
    export_parser.add_argument(
        "output",
        type=Path,
        help="Output vector path. Suffix .geojson/.json maps to GeoJSON; .shp maps to ESRI Shapefile.",
    )
    export_parser.add_argument("--province", nargs="+", help="Province filter, supports one or more full names.")
    export_parser.add_argument("--city", nargs="+", help="City filter, supports one or more full names.")
    export_parser.add_argument("--district", nargs="+", help="District filter, supports one or more full names.")
    export_parser.add_argument("--country", nargs="+", help="Country filter, supports names or ISO3 codes.")
    export_parser.add_argument("--source", nargs="+", help="Source filter, supports one or more values.")
    export_parser.add_argument(
        "--level",
        choices=("国", "省", "市", "区县", "区", "县", "区/县"),
        help="Administrative level to query.",
    )
    export_parser.add_argument(
        "--provider",
        help="Optional data provider name. Defaults to the official cnmaps-data provider.",
    )
    export_parser.add_argument(
        "--record",
        choices=("all", "first"),
        default="all",
        help="Export all matched records or only the first matched record.",
    )
    export_parser.add_argument(
        "--engine",
        help="Explicit export engine. Supported values: GeoJSON, json, ESRI Shapefile, shapefile, shp.",
    )
    export_parser.add_argument(
        "--encoding",
        default="utf-8",
        help="Output file encoding. Defaults to utf-8.",
    )
    export_parser.add_argument(
        "--gcj02",
        action="store_true",
        help="Export GCJ02 coordinates instead of the default WGS84 coordinates.",
    )
    export_parser.add_argument(
        "--simplify",
        action="store_true",
        help="Simplify geometries before export.",
    )

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    def _unwrap(values):
        if values is None:
            return None
        if len(values) == 1:
            return values[0]
        return values

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

    if args.command == "export":
        try:
            output = export_adm_maps(
                args.output.expanduser().resolve(),
                province=_unwrap(args.province),
                city=_unwrap(args.city),
                district=_unwrap(args.district),
                level=args.level,
                country=_unwrap(args.country),
                source=_unwrap(args.source),
                provider=args.provider,
                record=args.record,
                wgs84=not args.gcj02,
                simplify=args.simplify,
                engine=args.engine,
                encoding=args.encoding,
            )
        except (FileNotFoundError, ValueError, ImportError) as exc:
            parser.exit(1, f"{exc}\n")

        parser.exit(0, f"Exported administrative boundaries to {output}\n")

    parser.print_help()
    return 1
