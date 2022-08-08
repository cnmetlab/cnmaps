cnmaps使用指南
==================================

.. image:: _static/logo.png


cnmaps是一个致力于让中国地图的获取和使用更丝滑的python扩展包。

当前版本具有以下几个主要功能：

1. 自带合规地图边界，数据源来自于高德等测绘机构，让你无需再额外寻找地图边界文件。
2. 支持地图边界之间的加减、交并集等常规操作，让你可以自由地组合想要的地图形状。
3. 具有易于使用的地图裁剪功能，且裁剪效果好，平滑无锯齿。
4. 与cartopy集成，可以自动转换地图边界的投影。

.. image:: _static/china-clip-projections.png
   :width: 600 px

cnmaps使用指南
---------------

.. toctree::
   :maxdepth: 3

   content/installation
   content/quick-start
   content/examples
   content/api-ref
   content/contributor-guide
   content/license
   content/citation
   content/changelog
