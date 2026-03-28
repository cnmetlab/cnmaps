cnmaps 使用指南
==================================

.. image:: _static/logo.png


cnmaps 是一个致力于让中国地图的获取和使用更顺手的 Python 扩展包，与 `Cartopy <https://scitools.org.uk/cartopy/>`_ 配合使用。源码与问题反馈见 `GitHub：cnmetlab/cnmaps <https://github.com/cnmetlab/cnmaps>`_ 。

当前版本具有以下几个主要功能：

1. 自带合规地图边界数据（行政边界等，数据源包括高德等），无需再单独寻找边界文件。
2. 支持地图边界之间的加、减、交、并等运算，便于组合出需要的范围。
3. 提供针对 contour、pcolormesh、quiver、scatter、clabel 等对象的按边界裁剪，效果平滑。
4. 与 Cartopy 集成，可在不同投影下绘制与裁剪。

.. image:: _static/china-clip-projections.png
   :width: 600 px

目录
----

.. toctree::
   :maxdepth: 3

   content/installation
   content/usage
   content/examples
   content/api-ref
   content/contributor-guide
   content/license
   content/citation
   content/changelog
