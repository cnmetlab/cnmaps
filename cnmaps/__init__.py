"""cnmaps包入口."""

import os
import re
import warnings

import cartopy

from .maps import *  # noqa: F403, F401
from .drawing import *  # noqa: F403, F401

__version__ = "1.0.3"

CARTOPY_DIGIT_VERSION = re.match(r"(\d*\.\d*\.\d*)", cartopy.__version__).group(1)
if CARTOPY_DIGIT_VERSION < "0.19.0":
    warnings.warn(
        (
            "由于Cartopy的版本低于0.19.0, "
            "因此clip_clabels_by_polygons函数将无法使用, 其他函数不受影响, "
            "若需要使用clip_clabels_by_polygons函数, "
            "请将Cartopy的版本升级到0.19.0及以上."
        )
    )

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = os.path.join(BASE_DIR, "data", "geojson.min")

if __name__ == "__main__":
    pass
