import numpy as np

from cnmaps import get_adm_maps
from cnmaps.sample import load_temp

# cnmaps provides the boundary object and mask helper.
# The full raster processing workflow may still involve NumPy, xarray,
# or plotting code outside cnmaps itself.
lons, lats, temp = load_temp()
henan = get_adm_maps(province="河南省", record="first", only_polygon=True)

masked_temp = henan.maskout(lons, lats, temp)
print(np.ma.min(masked_temp), np.ma.max(masked_temp))
