#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
DOCS_SOURCE_DIR="${SCRIPT_DIR}/source"
DOCS_BUILD_DIR="${SCRIPT_DIR}/build"

if ! command -v poetry >/dev/null 2>&1; then
  echo "poetry is required to build docs." >&2
  exit 1
fi

cd "${REPO_ROOT}"

rm -rf "${DOCS_BUILD_DIR}"
mkdir -p "${DOCS_BUILD_DIR}"

export LC_ALL="${LC_ALL:-C}"
export LANG="${LANG:-C}"

if ! poetry run python -c "import sphinx, sphinx_rtd_theme" >/dev/null 2>&1; then
  echo "Installing missing docs dependencies into the Poetry environment..."
  LC_ALL=C LANG=C poetry run python -m pip install -r requirements/requirements-doc.txt
fi

echo "Building docs from ${DOCS_SOURCE_DIR} -> ${DOCS_BUILD_DIR}/html"
LC_ALL=C LANG=C poetry run python -m sphinx -E -a -b html "${DOCS_SOURCE_DIR}" "${DOCS_BUILD_DIR}/html"

echo "Docs built successfully:"
echo "  ${DOCS_BUILD_DIR}/html/index.html"
