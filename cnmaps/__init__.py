"""cnmaps包入口."""

import os
import re
import warnings

try:
    import cartopy
except ModuleNotFoundError:
    cartopy = None

try:
    from shapely.errors import ShapelyDeprecationWarning
except ModuleNotFoundError:
    ShapelyDeprecationWarning = None


from .maps import *  # noqa: F403, F401
from .provider import get_available_data_providers, get_data_provider  # noqa: F401

try:
    from .drawing import *  # noqa: F403, F401
except ModuleNotFoundError:
    pass

__version__ = "2.1.0"

if cartopy is not None:
    CARTOPY_DIGIT_VERSION = re.match(r"(\d*\.\d*\.\d*)", cartopy.__version__).group(1)
    if CARTOPY_DIGIT_VERSION < "0.22.0":
        warnings.warn(("由于Cartopy的版本低于0.22.0, 请将Cartopy的版本升级到0.22.0及以上, 否则会影响功能的使用"))

if ShapelyDeprecationWarning is not None:
    warnings.filterwarnings("ignore", category=ShapelyDeprecationWarning)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DATA_DIR = get_data_provider().get_dataset_root("administrative")

if __name__ == "__main__":
    pass
