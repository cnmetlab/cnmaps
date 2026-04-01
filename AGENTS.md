# cnmaps Agent Guide

If you are an AI coding agent working in this repository, use the repo-local skill at:

- [`.codex/skills/cnmaps/SKILL.md`](.codex/skills/cnmaps/SKILL.md)

That skill explains:

- which `cnmaps` APIs to choose for querying, drawing, clipping, and sample data loading
- how `cnmaps` works with `cartopy`, `matplotlib`, and `cnmaps-data`
- current return types and field access rules
- common pitfalls such as `level="国"` meaning all countries unless `country="中国"` is explicitly set

Additional references:

- [API cheatsheet](.codex/skills/cnmaps/references/api-cheatsheet.md)
- [Plotting patterns](.codex/skills/cnmaps/references/plotting-patterns.md)
