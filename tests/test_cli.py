import json
import os

import fiona
import pytest

from cnmaps_cli import main


TMP_CLI_EXPORT_DIR = "./tmp/test_cli_export"


def _ensure_tmp_dir():
    os.makedirs(TMP_CLI_EXPORT_DIR, exist_ok=True)


def test_cli_export_geojson_supports_multi_name_filters(capsys):
    _ensure_tmp_dir()
    output = os.path.join(TMP_CLI_EXPORT_DIR, "jingjin.geojson")

    with pytest.raises(SystemExit) as excinfo:
        main(
            [
                "export",
                str(output),
                "--province",
                "北京市",
                "天津市",
                "--level",
                "省",
            ]
        )

    assert excinfo.value.code == 0
    assert os.path.exists(output)

    with open(output, encoding="utf-8") as f:
        data = json.load(f)
    assert data["type"] == "FeatureCollection"
    assert len(data["features"]) == 2
    assert {feature["properties"]["province"] for feature in data["features"]} == {"北京市", "天津市"}

    captured = capsys.readouterr()
    assert "Exported administrative boundaries to" in captured.err


def test_cli_export_shapefile_supports_record_first(capsys):
    _ensure_tmp_dir()
    output = os.path.join(TMP_CLI_EXPORT_DIR, "henan.shp")

    with pytest.raises(SystemExit) as excinfo:
        main(
            [
                "export",
                str(output),
                "--province",
                "河南省",
                "--level",
                "省",
                "--record",
                "first",
            ]
        )

    assert excinfo.value.code == 0
    assert os.path.exists(output)

    with fiona.open(output) as layer:
        features = list(layer)

    assert len(features) == 1
    assert features[0]["properties"]["province"] == "河南省"

    captured = capsys.readouterr()
    assert "Exported administrative boundaries to" in captured.err


def test_cli_export_requires_supported_suffix_or_engine(capsys):
    _ensure_tmp_dir()
    output = os.path.join(TMP_CLI_EXPORT_DIR, "henan.boundary")

    with pytest.raises(SystemExit) as excinfo:
        main(["export", str(output), "--province", "河南省", "--level", "省"])

    assert excinfo.value.code == 1
    captured = capsys.readouterr()
    assert "Unable to infer export format" in captured.err
