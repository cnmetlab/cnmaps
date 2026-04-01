import pytest

mcp_module = pytest.importorskip("cnmaps.mcp_server")

_query_adm_geojson = mcp_module._query_adm_geojson
_query_adm_records = mcp_module._query_adm_records
build_server = mcp_module.build_server


def test_query_adm_records_returns_english_fields():
    payload = _query_adm_records(country="中国", level="国", record="first")
    assert payload["count"] == 1
    record = payload["records"][0]
    assert record["country"] == "中华人民共和国"
    assert "longitude" in record
    assert "latitude" in record
    assert "bbox" in record


def test_query_adm_geojson_returns_feature():
    payload = _query_adm_geojson(country="中国", level="国", record="first")
    feature = payload["feature"]
    assert feature["type"] == "Feature"
    assert feature["properties"]["country"] == "中华人民共和国"
    assert feature["geometry"]["type"] in {"Polygon", "MultiPolygon"}


def test_build_server():
    server = build_server()
    assert server is not None
