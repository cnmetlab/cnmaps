import json

import matplotlib.pyplot as plt
from matplotlib.path import Path
from matplotlib.patches import PathPatch


def clip_by_polygons(cs, ax, polygons: list):
    vertices = []
    codes = []

    for coords in polygons:
        prt = len(coords)
        for coord in coords:
            vertices.append(coord)
        codes += [Path.MOVETO]
        codes += [Path.LINETO] * (prt - 2)
        codes += [Path.CLOSEPOLY]
        clip = Path(vertices, codes)
        clip = PathPatch(clip, transform=ax.transData)

        for contour in cs.collections:
            contour.set_clip_path(clip)

    return ax