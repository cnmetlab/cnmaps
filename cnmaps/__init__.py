"""cnmaps包入口."""

import os
import re
import warnings

import cartopy
from shapely.errors import ShapelyDeprecationWarning

from .maps import *  # noqa: F403, F401
from .drawing import *  # noqa: F403, F401

__version__ = "1.1.0"

CARTOPY_DIGIT_VERSION = re.match(r"(\d*\.\d*\.\d*)", cartopy.__version__).group(1)
if CARTOPY_DIGIT_VERSION < "0.20.0":
    warnings.warn(("由于Cartopy的版本低于0.20.0, 请将Cartopy的版本升级到0.20.0及以上."))

warnings.filterwarnings("ignore", category=ShapelyDeprecationWarning)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, "data", "geojson.min")

if __name__ == "__main__":
    pass
