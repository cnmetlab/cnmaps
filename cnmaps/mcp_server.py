"""MCP server for cnmaps."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from shapely.geometry import mapping

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:  # pragma: no cover - depends on optional Python>=3.10 dependency
    FastMCP = None

from . import __version__
from .drawing import (
    clip_contours_by_map,
    clip_pcolormesh_by_map,
    clip_quiver_by_map,
    draw_map,
    draw_maps,
)
from .maps import MapNotFoundError, get_adm_maps, get_adm_names
from .provider import get_available_data_providers, get_data_provider
from .sample import load_dem, load_temp, load_wind


SERVER_NAME = "cnmaps"
DEFAULT_RECORD_LIMIT = 100
DEFAULT_OUTPUT_DIR = Path.cwd() / "tmp" / "mcp"

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


def _ensure_output_path(output_path: str | None, default_name: str) -> Path:
    if output_path:
        path = Path(output_path).expanduser().resolve()
    else:
        path = (DEFAULT_OUTPUT_DIR / default_name).resolve()
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def _make_projection(
    projection: str,
    *,
    central_longitude: float = 105.0,
    central_latitude: float = 35.0,
):
    import cartopy.crs as ccrs

    projection_name = projection.lower()
    if projection_name == "platecarree":
        return ccrs.PlateCarree(central_longitude=central_longitude)
    if projection_name == "mercator":
        return ccrs.Mercator(central_longitude=central_longitude)
    if projection_name == "robinson":
        return ccrs.Robinson(central_longitude=central_longitude)
    if projection_name == "mollweide":
        return ccrs.Mollweide(central_longitude=central_longitude)
    if projection_name == "orthographic":
        return ccrs.Orthographic(
            central_longitude=central_longitude,
            central_latitude=central_latitude,
        )
    raise ValueError(f"不支持的投影: {projection}")


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

    @mcp.tool()
    def list_sample_datasets() -> dict[str, Any]:
        """List built-in sample datasets suitable for scientific plotting demos."""

        return {
            "samples": [
                {
                    "name": "temp",
                    "description": "中国区域气温网格样例，可用于 contourf 或 pcolormesh。",
                },
                {
                    "name": "dem",
                    "description": "中国区域高程样例，可用于 contourf 或 pcolormesh。",
                },
                {
                    "name": "wind",
                    "description": "中国区域风矢量样例，可用于 quiver。",
                },
            ]
        }

    @mcp.tool()
    def render_administrative_map(
        province: str | None = None,
        city: str | None = None,
        district: str | None = None,
        level: str | None = None,
        country: str | None = None,
        source: str | None = None,
        provider: str | None = None,
        projection: str = "PlateCarree",
        central_longitude: float = 105.0,
        central_latitude: float = 35.0,
        figsize_width: float = 10.0,
        figsize_height: float = 6.0,
        linewidth: float = 0.8,
        color: str = "#444444",
        output_path: str | None = None,
        set_extent: bool = True,
    ) -> dict[str, Any]:
        """Render an administrative boundary map and save it as a PNG file."""

        import matplotlib

        matplotlib.use("Agg")
        import matplotlib.pyplot as plt
        import cartopy.crs as ccrs

        maps = get_adm_maps(
            province=province,
            city=city,
            district=district,
            level=level,
            country=country,
            source=source,
            provider=provider,
        )

        projection_obj = _make_projection(
            projection,
            central_longitude=central_longitude,
            central_latitude=central_latitude,
        )
        path = _ensure_output_path(output_path, "administrative-map.png")

        fig = plt.figure(figsize=(figsize_width, figsize_height))
        ax = fig.add_subplot(111, projection=projection_obj)
        draw_maps(maps, ax=ax, linewidth=linewidth, color=color)

        if set_extent and projection.lower() == "platecarree":
            records = _normalize_records(maps)
            if records:
                left = min(record["geometry"].bounds[0] for record in records)
                lower = min(record["geometry"].bounds[1] for record in records)
                right = max(record["geometry"].bounds[2] for record in records)
                upper = max(record["geometry"].bounds[3] for record in records)
                ax.set_extent([left - 2, right + 2, lower - 2, upper + 2], crs=ccrs.PlateCarree())

        fig.savefig(path, dpi=200, bbox_inches="tight")
        plt.close(fig)
        return {
            "output_path": str(path),
            "projection": projection,
            "count": len(_normalize_records(maps)),
        }

    @mcp.tool()
    def render_sample_map(
        sample: str = "temp",
        plot_type: str = "contourf",
        province: str | None = None,
        city: str | None = None,
        district: str | None = None,
        level: str | None = None,
        country: str | None = "中国",
        source: str | None = None,
        provider: str | None = None,
        projection: str = "PlateCarree",
        central_longitude: float = 105.0,
        central_latitude: float = 35.0,
        figsize_width: float = 10.0,
        figsize_height: float = 6.0,
        linewidth: float = 0.8,
        boundary_color: str = "#222222",
        output_path: str | None = None,
        set_extent: bool = True,
    ) -> dict[str, Any]:
        """Render a built-in scientific plotting sample clipped by an administrative boundary."""

        import matplotlib

        matplotlib.use("Agg")
        import matplotlib.pyplot as plt

        sample_name = sample.lower()
        plot_kind = plot_type.lower()
        if sample_name not in {"temp", "dem", "wind"}:
            raise ValueError("sample 仅支持 temp、dem、wind")
        if plot_kind not in {"contourf", "pcolormesh", "quiver"}:
            raise ValueError("plot_type 仅支持 contourf、pcolormesh、quiver")
        if sample_name == "wind" and plot_kind != "quiver":
            raise ValueError("wind 样例仅支持 quiver")
        if sample_name in {"temp", "dem"} and plot_kind == "quiver":
            raise ValueError("temp/dem 样例不支持 quiver")

        map_polygon = get_adm_maps(
            province=province,
            city=city,
            district=district,
            level=level,
            country=country,
            source=source,
            provider=provider,
            only_polygon=True,
            record="first",
        )

        projection_obj = _make_projection(
            projection,
            central_longitude=central_longitude,
            central_latitude=central_latitude,
        )
        path = _ensure_output_path(output_path, f"{sample_name}-{plot_kind}.png")

        fig = plt.figure(figsize=(figsize_width, figsize_height))
        ax = fig.add_subplot(111, projection=projection_obj)

        if sample_name == "temp":
            lons, lats, data = load_temp(provider=provider)
            if plot_kind == "contourf":
                artist = ax.contourf(lons, lats, data, transform=_make_projection("PlateCarree"))
                clip_contours_by_map(artist, map_polygon, ax=ax, set_extent=set_extent)
            else:
                artist = ax.pcolormesh(lons, lats, data, transform=_make_projection("PlateCarree"))
                clip_pcolormesh_by_map(artist, map_polygon, ax=ax, set_extent=set_extent)
        elif sample_name == "dem":
            lons, lats, data = load_dem(provider=provider)
            if plot_kind == "contourf":
                artist = ax.contourf(lons, lats, data, transform=_make_projection("PlateCarree"))
                clip_contours_by_map(artist, map_polygon, ax=ax, set_extent=set_extent)
            else:
                artist = ax.pcolormesh(lons, lats, data, transform=_make_projection("PlateCarree"))
                clip_pcolormesh_by_map(artist, map_polygon, ax=ax, set_extent=set_extent)
        else:
            lons, lats, u, v = load_wind(provider=provider)
            artist = ax.quiver(lons, lats, u, v, transform=_make_projection("PlateCarree"))
            clip_quiver_by_map(artist, map_polygon, ax=ax, set_extent=set_extent)

        draw_map(map_polygon, ax=ax, linewidth=linewidth, color=boundary_color)
        fig.savefig(path, dpi=200, bbox_inches="tight")
        plt.close(fig)
        return {
            "output_path": str(path),
            "sample": sample_name,
            "plot_type": plot_kind,
            "country": country,
        }

    return mcp


def main() -> None:
    """Run the cnmaps MCP server over stdio."""

    build_server().run(transport="stdio")


if __name__ == "__main__":
    main()
