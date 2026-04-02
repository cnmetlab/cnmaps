import json
import os

import fiona
import geopandas as gpd
import pytest
import shapely.geometry as sgeom

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


def test_cli_check_boundary_passes_for_exported_geojson(capsys):
    _ensure_tmp_dir()
    path = os.path.join(TMP_CLI_EXPORT_DIR, "check-jingjin.geojson")

    with pytest.raises(SystemExit) as excinfo:
        main(
            [
                "export",
                str(path),
                "--province",
                "北京市",
                "天津市",
                "--level",
                "省",
            ]
        )

    assert excinfo.value.code == 0

    with pytest.raises(SystemExit) as excinfo:
        main(["check-boundary", str(path)])

    assert excinfo.value.code == 0
    captured = capsys.readouterr()
    assert "Boundary spec check: PASS" in captured.err
    assert "check-jingjin.geojson" in captured.err


def test_cli_check_boundary_passes_for_exported_shapefile(capsys):
    _ensure_tmp_dir()
    path = os.path.join(TMP_CLI_EXPORT_DIR, "check-henan.shp")

    with pytest.raises(SystemExit) as excinfo:
        main(
            [
                "export",
                str(path),
                "--province",
                "河南省",
                "--level",
                "省",
                "--record",
                "first",
            ]
        )

    assert excinfo.value.code == 0
    capsys.readouterr()

    with pytest.raises(SystemExit) as excinfo:
        main(["check-boundary", str(path), "--json"])

    assert excinfo.value.code == 0
    captured = capsys.readouterr()
    payload = json.loads(captured.err)
    assert payload["passed"] is True
    assert payload["feature_count"] == 1
    assert payload["geometry_types"] == ["MultiPolygon"]


def test_cli_check_boundary_json_reports_failures(tmp_path, capsys):
    path = tmp_path / "invalid-boundary.shp"
    gdf = gpd.GeoDataFrame(
        {"name": ["line"]},
        geometry=[sgeom.LineString([(0, 0), (1, 1)])],
        crs="EPSG:3857",
    )
    gdf.to_file(path, driver="ESRI Shapefile")

    with pytest.raises(SystemExit) as excinfo:
        main(["check-boundary", str(path), "--json"])

    assert excinfo.value.code == 1
    captured = capsys.readouterr()
    payload = json.loads(captured.err)
    assert payload["passed"] is False
    assert any("WGS84" in item for item in payload["errors"])
    assert any("Polygon / MultiPolygon" in item for item in payload["errors"])
