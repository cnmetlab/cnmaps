"""Lightweight CLI entrypoints for cnmaps packaging utilities."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


SKILL_NAME = "cnmaps"
CODEX_MARKER_START = "<!-- cnmaps-codex-skill:start -->"
CODEX_MARKER_END = "<!-- cnmaps-codex-skill:end -->"
CLAUDE_MARKER_START = "<!-- cnmaps-claudecode-skill:start -->"
CLAUDE_MARKER_END = "<!-- cnmaps-claudecode-skill:end -->"


def _project_root() -> Path:
    return Path(__file__).resolve().parent.parent


def get_skill_source_dir() -> Path:
    """Return the bundled cnmaps skill source directory."""
    bundled_skill_dir = _project_root() / "cnmaps" / "_bundled_skills" / SKILL_NAME
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


def install_codex_skill(workspace: Path, force: bool = False) -> list[Path]:
    source_dir = get_skill_source_dir()
    target_dir = workspace / ".codex" / "skills" / SKILL_NAME

    if target_dir.exists():
        if not force:
            raise FileExistsError(f"Codex skill already exists at {target_dir}. Re-run with --force to overwrite it.")
        shutil.rmtree(target_dir)

    target_dir.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(source_dir, target_dir)

    agents_path = workspace / "AGENTS.md"
    existing = _read_text(agents_path) if agents_path.exists() else ""
    block = (
        "## cnmaps Skill\n\n"
        "If you are an AI coding agent working in this repository, use the repo-local skill at:\n\n"
        f"- [`.codex/skills/{SKILL_NAME}/SKILL.md`](.codex/skills/{SKILL_NAME}/SKILL.md)\n\n"
        "Additional references:\n\n"
        f"- [API cheatsheet](.codex/skills/{SKILL_NAME}/references/api-cheatsheet.md)\n"
        f"- [Plotting patterns](.codex/skills/{SKILL_NAME}/references/plotting-patterns.md)"
    )
    agents_path.write_text(
        _replace_or_append_marked_block(existing, CODEX_MARKER_START, CODEX_MARKER_END, block),
        encoding="utf-8",
    )
    return [target_dir, agents_path]


def install_cursor_skill(workspace: Path, force: bool = False) -> list[Path]:
    source_dir = get_skill_source_dir()
    rule_path = workspace / ".cursor" / "rules" / f"{SKILL_NAME}.mdc"
    if rule_path.exists() and not force:
        raise FileExistsError(f"Cursor rule already exists at {rule_path}. Re-run with --force to overwrite it.")

    _ensure_parent(rule_path)
    body = _render_condensed_skill_text(source_dir)
    content = (
        "---\n"
        f"description: cnmaps library guidance for map queries, plotting, clipping, and country-level boundaries\n"
        "alwaysApply: true\n"
        "---\n\n"
        f"{body}\n"
    )
    rule_path.write_text(content, encoding="utf-8")
    return [rule_path]


def install_claudecode_skill(workspace: Path, force: bool = False) -> list[Path]:
    source_dir = get_skill_source_dir()
    skill_doc_path = workspace / ".claude" / f"{SKILL_NAME}.md"
    if skill_doc_path.exists() and not force:
        raise FileExistsError(f"Claude Code guidance already exists at {skill_doc_path}. Re-run with --force to overwrite it.")

    _ensure_parent(skill_doc_path)
    skill_doc_path.write_text(_render_condensed_skill_text(source_dir) + "\n", encoding="utf-8")

    claude_path = workspace / "CLAUDE.md"
    existing = _read_text(claude_path) if claude_path.exists() else ""
    block = (
        "## cnmaps Guidance\n\n"
        "Load the project-specific cnmaps guidance when this repository uses cnmaps:\n\n"
        f"@./.claude/{SKILL_NAME}.md"
    )
    claude_path.write_text(
        _replace_or_append_marked_block(existing, CLAUDE_MARKER_START, CLAUDE_MARKER_END, block),
        encoding="utf-8",
    )
    return [skill_doc_path, claude_path]


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
        help="Workspace directory to install into. Defaults to the current directory.",
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
            written_paths = installer(args.dir.expanduser().resolve(), force=args.force)
        except (FileExistsError, FileNotFoundError) as exc:
            parser.exit(1, f"{exc}\n")

        lines = [f"Installed cnmaps {args.assistant} guidance into {args.dir.expanduser().resolve()}:"]
        lines.extend(f"- {path}" for path in written_paths)
        parser.exit(0, "\n".join(lines) + "\n")

    parser.print_help()
    return 0
