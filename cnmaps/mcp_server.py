"""MCP server for cnmaps."""

from __future__ import annotations

from typing import Any

from shapely.geometry import mapping

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:  # pragma: no cover - depends on optional Python>=3.10 dependency
    FastMCP = None

from . import __version__
from .maps import MapNotFoundError, get_adm_maps, get_adm_names
from .provider import get_available_data_providers, get_data_provider


SERVER_NAME = "cnmaps"
DEFAULT_RECORD_LIMIT = 100

_ENGLISH_RECORD_FIELDS = (
    "country",
    "province",
    "city",
    "district",
    "level",
    "source",
    "kind",
    "longitude",
    "latitude",
)


def _normalize_records(result: Any) -> list[Any]:
    if result is None:
        return []
    if isinstance(result, list):
        return result
    return [result]


def _serialize_record(record: Any, include_geometry: bool = False) -> dict[str, Any]:
    geometry = record["geometry"]
    payload = {field: record.get(field) for field in _ENGLISH_RECORD_FIELDS}
    payload["bbox"] = list(geometry.bounds)
    if include_geometry:
        payload["geometry"] = mapping(getattr(geometry, "geom", geometry))
    return payload


def _serialize_records(records: list[Any], include_geometry: bool = False) -> list[dict[str, Any]]:
    return [_serialize_record(record, include_geometry=include_geometry) for record in records]


def _query_adm_records(
    *,
    province: str | None = None,
    city: str | None = None,
    district: str | None = None,
    level: str | None = None,
    country: str | None = None,
    source: str | None = None,
    provider: str | None = None,
    record: str = "all",
    wgs84: bool = True,
    simplify: bool = False,
    include_geometry: bool = False,
    limit: int = DEFAULT_RECORD_LIMIT,
) -> dict[str, Any]:
    result = get_adm_maps(
        province=province,
        city=city,
        district=district,
        level=level,
        country=country,
        source=source,
        provider=provider,
        record=record,
        wgs84=wgs84,
        simplify=simplify,
    )
    records = _normalize_records(result)
    truncated = False
    if record == "all" and limit is not None and limit >= 0 and len(records) > limit:
        records = records[:limit]
        truncated = True

    return {
        "query": {
            "province": province,
            "city": city,
            "district": district,
            "level": level,
            "country": country,
            "source": source,
            "provider": provider,
            "record": record,
            "wgs84": wgs84,
            "simplify": simplify,
        },
        "count": len(records),
        "truncated": truncated,
        "records": _serialize_records(records, include_geometry=include_geometry),
    }


def _query_adm_geojson(**kwargs: Any) -> dict[str, Any]:
    payload = _query_adm_records(include_geometry=True, **kwargs)
    features = []
    for record in payload["records"]:
        geometry = record.pop("geometry")
        features.append(
            {
                "type": "Feature",
                "properties": record,
                "geometry": geometry,
            }
        )

    if payload["query"]["record"] == "first":
        feature: dict[str, Any] = features[0] if features else {}
        return {
            "query": payload["query"],
            "count": payload["count"],
            "feature": feature,
        }

    return {
        "query": payload["query"],
        "count": payload["count"],
        "truncated": payload["truncated"],
        "feature_collection": {
            "type": "FeatureCollection",
            "features": features,
        },
    }


def build_server() -> FastMCP:
    """Build the cnmaps MCP server."""

    if FastMCP is None:
        raise RuntimeError(
            "cnmaps MCP server 需要 Python 3.10+ 并安装 `mcp` 依赖。"
            " 请使用 Python 3.10+ 重新安装 `cnmaps`。"
        )

    mcp = FastMCP(SERVER_NAME)

    @mcp.tool()
    def get_server_info() -> dict[str, Any]:
        """Return cnmaps package and provider information."""

        provider = get_data_provider()
        return {
            "name": SERVER_NAME,
            "version": __version__,
            "default_provider": provider.name,
            "default_provider_version": provider.version,
            "available_data_providers": list(get_available_data_providers()),
        }

    @mcp.tool()
    def list_data_providers() -> dict[str, Any]:
        """List available cnmaps data providers."""

        providers = []
        for provider_name in get_available_data_providers():
            provider = get_data_provider(provider_name)
            providers.append(
                {
                    "name": provider.name,
                    "version": provider.version,
                    "administrative_root": provider.get_dataset_root("administrative"),
                    "sample_root": provider.get_dataset_root("sample"),
                }
            )
        return {"providers": providers}

    @mcp.tool()
    def get_administrative_names(
        province: str | None = None,
        city: str | None = None,
        district: str | None = None,
        level: str = "省",
        country: str | None = None,
        source: str | None = None,
        provider: str | None = None,
    ) -> dict[str, Any]:
        """Query administrative names by level and optional filters."""

        names = get_adm_names(
            province=province,
            city=city,
            district=district,
            level=level,
            country=country,
            source=source,
            provider=provider,
        )
        return {"level": level, "count": len(names), "names": names}

    @mcp.tool()
    def get_administrative_records(
        province: str | None = None,
        city: str | None = None,
        district: str | None = None,
        level: str | None = None,
        country: str | None = None,
        source: str | None = None,
        provider: str | None = None,
        record: str = "all",
        wgs84: bool = True,
        simplify: bool = False,
        limit: int = DEFAULT_RECORD_LIMIT,
    ) -> dict[str, Any]:
        """Query boundary records and return metadata plus bounding boxes."""

        return _query_adm_records(
            province=province,
            city=city,
            district=district,
            level=level,
            country=country,
            source=source,
            provider=provider,
            record=record,
            wgs84=wgs84,
            simplify=simplify,
            limit=limit,
        )

    @mcp.tool()
    def get_administrative_geojson(
        province: str | None = None,
        city: str | None = None,
        district: str | None = None,
        level: str | None = None,
        country: str | None = None,
        source: str | None = None,
        provider: str | None = None,
        record: str = "all",
        wgs84: bool = True,
        simplify: bool = False,
        limit: int = 20,
    ) -> dict[str, Any]:
        """Query administrative boundaries and return GeoJSON features."""

        return _query_adm_geojson(
            province=province,
            city=city,
            district=district,
            level=level,
            country=country,
            source=source,
            provider=provider,
            record=record,
            wgs84=wgs84,
            simplify=simplify,
            limit=limit,
        )

    return mcp


def main() -> None:
    """Run the cnmaps MCP server over stdio."""

    build_server().run(transport="stdio")


if __name__ == "__main__":
    main()
