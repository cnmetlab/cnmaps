<h4>
    cnmaps 是一个可以让中国地图画起来更丝滑的地图类python扩展包
</h4>

<a href="https://github.com/cnmetlab/cnmaps/actions/workflows/python-package-conda.yml">
<img src="https://github.com/cnmetlab/cnmaps/actions/workflows/python-package-conda.yml/badge.svg?branch=main"
 alt="Pytest" /></a>

<a href="https://github.com/cnmetlab/cnmaps/actions/workflows/pypi-publish.yml">
<img src="https://github.com/cnmetlab/cnmaps/actions/workflows/pypi-publish.yml/badge.svg" 
 alt="Pypi publish"/> </a>

<a href="https://anaconda.org/conda-forge/cnmaps">
<img src="https://anaconda.org/conda-forge/cnmaps/badges/version.svg"
 alt="Anaconda" /></a>

<a href="https://anaconda.org/conda-forge/cnmaps">
<img src="https://anaconda.org/conda-forge/cnmaps/badges/platforms.svg" /> </a>

<a href="https://anaconda.org/conda-forge/cnmaps">
<img src="https://anaconda.org/conda-forge/cnmaps/badges/latest_release_relative_date.svg" /> </a>

<a href="https://anaconda.org/conda-forge/cnmaps">
<img src="https://anaconda.org/conda-forge/cnmaps/badges/downloads.svg" 
 alt="Conda downloads"/> </a>

<a href="https://badge.fury.io/py/cnmaps">
<img src="https://badge.fury.io/py/cnmaps.svg"
 alt="PyPI version" /></a>

<a href="https://pepy.tech/project/cnmaps">
<img src="https://static.pepy.tech/personalized-badge/cnmaps?period=total&units=international_system&left_color=grey&right_color=orange&left_text=Pypi%20Downloads"
 alt="Pypi Downloads" /></a>
  
<a href='https://cnmaps.readthedocs.io/zh_CN/latest/'>
    <img src='https://readthedocs.org/projects/cnmaps/badge/?version=latest' alt='Documentation Status' />
</a>
  
<a href="https://www.codacy.com/gh/Clarmy/cnmaps/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Clarmy/cnmaps&amp;utm_campaign=Badge_Grade">
  <img src="https://app.codacy.com/project/badge/Grade/ef6ab1893b0b47428b287f2f2875021c"/>
 </a>
 
<a href="https://cnmetlab.github.io/cnmaps/performance/">
  <img src="https://img.shields.io/badge/performance-benchmark-yellow"/>
 </a>

<a href="https://codecov.io/gh/cnmetlab/cnmaps" > 
 <img src="https://codecov.io/gh/cnmetlab/cnmaps/branch/main/graph/badge.svg?token=CF80D3CSR9"/> 
 </a>

<a href="https://github.com/Clarmy/cnmaps/issues">
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"
 alt="contributions welcome" /></a>

<a href="https://github.com/psf/black">
<img src="https://img.shields.io/badge/code%20style-black-000000.svg"
 alt="style" /></a>


## 安装
安装 cnmaps 需要满足 Python 的解释器在 3.9 版本及以上。

### 使用pip安装
cnmaps 最简单也最快的安装方法是使用 pip 来安装 cnmaps： `$ pip install -U cnmaps`

### 使用conda安装
你也可以使用 conda 安装： ``$ conda install -c conda-forge cnmaps``


## 快速开始

### 绘制国界

用最简单直接的方式，来绘制你的第一张中国地图。   

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import get_adm_maps, draw_maps

fig = plt.figure(figsize=(10,10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level='国')) 
plt.show()
```

### 绘制省界

cnmaps还可以绘制各省（特区/直辖市）的地图

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import get_adm_maps, draw_maps

fig = plt.figure(figsize=(10,10))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level='省'), linewidth=0.8, color='r') 

plt.show()
```

### 绘制市界

cnmaps可以绘制市级的行政区地图。

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import get_adm_maps, draw_maps

fig = plt.figure(figsize=(15,15))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level='市'), linewidth=0.5, color='g') 

plt.show()
```

### 绘制区县界

cnmaps可以绘制区县级的行政区地图。

```python
import cartopy.crs as ccrs
import matplotlib.pyplot as plt
from cnmaps import get_adm_maps, draw_maps

fig = plt.figure(figsize=(20,20))
ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

draw_maps(get_adm_maps(level='区县'), linewidth=0.8, color='r') 

plt.show()
```

## 使用指南

针对本项目更多的使用方法，我们还有一份更详细的文档：[cnmaps使用指南](https://cnmaps.readthedocs.io/zh_CN/latest/index.html)
