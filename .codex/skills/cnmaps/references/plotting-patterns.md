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
- If clipping is involved, create the artist first, clip it second, then draw the boundary on top.
- For new examples, prefer English fields such as `record.longitude` and `record.latitude`.
