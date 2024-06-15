"""cnmaps包入口."""

import os
import re
import warnings

import cartopy
import shapely
from shapely.errors import ShapelyDeprecationWarning


from .maps import *  # noqa: F403, F401
from .drawing import *  # noqa: F403, F401

__version__ = "1.1.9"

CARTOPY_DIGIT_VERSION = re.match(r"(\d*\.\d*\.\d*)", cartopy.__version__).group(1)
if CARTOPY_DIGIT_VERSION < "0.22.0":
    warnings.warn(("由于Cartopy的版本低于0.22.0, 请将Cartopy的版本升级到0.22.0及以上, 否则会影响功能的使用"))

SHAPELY_DIGIT_VERSION = re.match(r"(\d*\.\d*\.\d*)", shapely.__version__).group(1)
if SHAPELY_DIGIT_VERSION >= "2.0.0":
    warnings.warn(("由于Shapely的版本高于2.0.0, 请将Shapely的版本降级到2.0.0以下, 否则会影响功能的使用"))

warnings.filterwarnings("ignore", category=ShapelyDeprecationWarning)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, "data", "geojson.min")

if __name__ == "__main__":
    pass
