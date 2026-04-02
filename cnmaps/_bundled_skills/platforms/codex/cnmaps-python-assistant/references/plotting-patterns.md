# cnmaps Plotting Patterns

## Draw China Boundary

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_maps, get_adm_maps

fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(country="中国", level="国"), ax=ax)
plt.show()
```

## Draw Global Country Boundaries

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_maps, get_adm_maps

fig = plt.figure(figsize=(14, 7))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level="国"), ax=ax, linewidth=0.4, color="#666666")
draw_maps(get_adm_maps(country="中国", level="国"), ax=ax, linewidth=1.0, color="crimson")
plt.show()
```

## Draw One Foreign Country By ISO3

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_map, get_adm_maps

japan = get_adm_maps(country="JPN", level="国", record="first")

fig = plt.figure(figsize=(7, 7))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_map(japan.geometry, ax=ax, linewidth=1.0, color="#1f4e79")
ax.scatter(japan.longitude, japan.latitude, s=16, color="crimson", transform=ccrs.PlateCarree())
ax.set_extent(japan.geometry.get_extent(buffer=2.0), crs=ccrs.PlateCarree())
plt.show()
```

## Highlight One Foreign Country In A World Map

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_map, draw_maps, get_adm_maps

world = get_adm_maps(level="国")
germany = get_adm_maps(country="德国", level="国", record="first")

fig = plt.figure(figsize=(14, 7))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
ax.set_global()

draw_maps(world, ax=ax, linewidth=0.35, color="#666666")
draw_map(germany.geometry, ax=ax, linewidth=1.2, color="crimson")
plt.show()
```

## Label Selected Countries On A World Map

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_maps, get_adm_maps

world = get_adm_maps(level="国")
label_countries = ["中国", "日本", "印度", "德国", "美国"]

fig = plt.figure(figsize=(14, 7))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
ax.set_global()

draw_maps(world, ax=ax, linewidth=0.35, color="#666666")

for country_name in label_countries:
    record = get_adm_maps(country=country_name, level="国", record="first")
    ax.scatter(record.longitude, record.latitude, s=10, color="crimson", transform=ccrs.PlateCarree())
    ax.text(
        record.longitude,
        record.latitude,
        country_name,
        fontsize=8,
        ha="center",
        va="bottom",
        transform=ccrs.PlateCarree(),
    )

plt.show()
```

## Mark Beijing With A Star

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_maps, get_adm_maps

fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(country="中国", level="国"), ax=ax, linewidth=1.0, color="#666666")

beijing = get_adm_maps(city="北京市", record="first")
ax.scatter(
    beijing.longitude,
    beijing.latitude,
    s=80,
    marker="*",
    color="crimson",
    transform=ccrs.PlateCarree(),
)

plt.show()
```

## Clip A Contourf Map

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_contours_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_temp

lons, lats, data = load_temp()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
cs = ax.contourf(lons, lats, data, transform=ccrs.PlateCarree())

clip_contours_by_map(cs, china, ax=ax)
draw_map(china, ax=ax, color="black", linewidth=1.0)
plt.show()
```

## Clip A Contourf Map On Multiple Axes

```python
import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_contours_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_dem, load_temp

dem_lons, dem_lats, dem = load_dem()
temp_lons, temp_lats, temp = load_temp()
beijing = get_adm_maps(city="北京市", record="first", only_polygon=True)
extent = beijing.get_extent(buffer=0.15)

fig, axes = plt.subplots(
    1,
    2,
    figsize=(10, 4.6),
    subplot_kw={"projection": ccrs.PlateCarree()},
)

panels = [
    ("Beijing DEM", dem_lons, dem_lats, dem, plt.cm.terrain, np.linspace(-200, dem.max(), 10)),
    ("Beijing Temperature", temp_lons, temp_lats, temp, plt.cm.coolwarm, np.linspace(-20, 36, 10)),
]

for ax, (title, lons, lats, data, cmap, levels) in zip(axes, panels):
    cs = ax.contourf(
        lons,
        lats,
        data,
        levels=levels,
        cmap=cmap,
        transform=ccrs.PlateCarree(),
    )
    clip_contours_by_map(cs, beijing, extent=extent, set_extent=True)
    draw_map(beijing, ax=ax, color="black", linewidth=1.0)
    ax.set_title(title)

plt.tight_layout()
plt.show()
```

## Clip A Pcolormesh

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_pcolormesh_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_dem

lons, lats, dem = load_dem()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
mesh = ax.pcolormesh(lons, lats, dem, cmap=plt.cm.terrain, vmin=-2800, transform=ccrs.PlateCarree())

clip_pcolormesh_by_map(mesh, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
ax.set_extent(china.get_extent(), crs=ccrs.PlateCarree())
plt.show()
```

## Clip Quiver And Background Field

```python
import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_contours_by_map, clip_quiver_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_wind

lons, lats, u, v = load_wind()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)
speed = (u**2 + v**2) ** 0.5

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
quiver = ax.quiver(lons, lats, u, v, transform=ccrs.PlateCarree(), zorder=2)
contours = ax.contourf(
    lons,
    lats,
    speed,
    levels=np.linspace(speed.min(), speed.max(), 50),
    cmap=plt.cm.RdYlBu_r,
    transform=ccrs.PlateCarree(),
    zorder=1,
)

clip_contours_by_map(contours, china)
clip_quiver_by_map(quiver, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
plt.show()
```

## Clip Scatter Points

```python
import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_scatter_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_wind

lons, lats, u, v = load_wind()
speed = (u**2 + v**2) ** 0.5

x = lons.flatten()
y = lats.flatten()
z = speed.flatten()

china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
scatter = ax.scatter(
    x,
    y,
    s=z * 10,
    c=z,
    cmap=plt.cm.RdYlBu_r,
    transform=ccrs.PlateCarree(),
)

clip_scatter_by_map(scatter, china)
draw_map(china, ax=ax, linewidth=1.0)
ax.set_extent(china.get_extent(buffer=1.0), crs=ccrs.PlateCarree())
plt.show()
```

## Clip Contour Labels

```python
import numpy as np
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import clip_clabels_by_map, clip_contours_by_map, draw_map, get_adm_maps
from cnmaps.sample import load_dem

lons, lats, dem = load_dem()
china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())
contours = ax.contour(
    lons,
    lats,
    dem,
    levels=np.linspace(-2500, dem.max(), 20),
    cmap=plt.cm.terrain,
    transform=ccrs.PlateCarree(),
)

clip_contours_by_map(contours, china)
clabels = ax.clabel(contours, levels=contours.levels, colors="k", fmt="%i", inline=True)
clip_clabels_by_map(clabels, china)
draw_map(china, ax=ax, color="black", linewidth=1.0)
plt.show()
```

## Create A Raster Mask Array

```python
import numpy as np
from cnmaps import get_adm_maps

lon = np.linspace(60, 150, 1000)
lat = np.linspace(0, 60, 1000)
lons, lats = np.meshgrid(lon, lat)

china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)
mask = china.make_mask_array(lons, lats)
```

## Mask Raster Data In Place

```python
import numpy as np
from cnmaps import get_adm_maps

lon = np.linspace(60, 150, 1000)
lat = np.linspace(0, 60, 1000)
lons, lats = np.meshgrid(lon, lat)
data = np.random.random(lons.shape)

china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)
masked = china.maskout(lons, lats, data)
```

## Export A Boundary To GeoJSON Or Shapefile

```python
from cnmaps import get_adm_maps

china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)

china.to_file("./china.geojson")
china.to_file("./china.shp", engine="ESRI Shapefile")
```

## Label Province Capitals With Centroid Coordinates

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import draw_maps, get_adm_maps

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level="省"), ax=ax, linewidth=0.8, color="black")

capitals = [
    ("北京市", "Beijing"),
    ("上海市", "Shanghai"),
    ("广州市", "Guangzhou"),
    ("成都市", "Chengdu"),
]

for city_name, label in capitals:
    record = get_adm_maps(city=city_name, record="first")
    ax.scatter(record.longitude, record.latitude, s=10, color="crimson", transform=ccrs.PlateCarree())
    ax.text(
        record.longitude,
        record.latitude + 0.3,
        label,
        ha="center",
        va="bottom",
        transform=ccrs.PlateCarree(),
    )

plt.show()
```

## Common Plotting Advice

- Always be explicit about the projection.
- Pass `ax=ax` in examples that build more than one axes.
- For China-only examples, write `country="中国", level="国"` explicitly.
- For one foreign country, prefer querying a single `MapRecord` and using `record.geometry`, `record.longitude`, and `record.latitude`.
- For country, province, city, or district labels, prefer `record.longitude` and `record.latitude` instead of recomputing centroids from geometry.
- If the user mainly wants a star, marker, or text annotation, do not switch to `only_polygon=True`; keep the `MapRecord` and use its metadata coordinates.
- For global maps, `get_adm_maps(level="国")` is the default broad query; add `source="世界银行"` only when the user specifically wants that source.
- If clipping is involved, create the artist first, clip it second, then draw the boundary on top.
- `extent=...` plus `set_extent=True` is the built-in way to combine boundary clipping with rectangular zooming.
- Clipping helpers can work with a single `MapPolygon`, a list of polygons, or a `GeoDataFrame`.
- In subplot workflows, clipping helpers usually detect the target `Axes` from the plotted artist.
- For new examples, prefer English fields such as `record.longitude` and `record.latitude`.
- If a country label lands in an unintuitive place for a very large or fragmented country, explain the whole-geometry centroid rule before trying custom label heuristics.
- If a world map shows seams or gaps near disputed borders, treat it as a data-semantics issue to explain, not a plotting artifact to hide.
