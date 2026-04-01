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
- For global maps, `get_adm_maps(level="国")` is the default broad query; add `source="世界银行"` only when the user specifically wants that source.
- If clipping is involved, create the artist first, clip it second, then draw the boundary on top.
- For new examples, prefer English fields such as `record.longitude` and `record.latitude`.
- If a country label lands in an unintuitive place for a very large or fragmented country, explain the whole-geometry centroid rule before trying custom label heuristics.
- If a world map shows seams or gaps near disputed borders, treat it as a data-semantics issue to explain, not a plotting artifact to hide.
