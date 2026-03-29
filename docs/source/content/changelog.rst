版本日志
===========

1.1.10
------
*发布日以 PyPI 为准。*

* **Shapely 2.0**：本版本最重要的变更是将依赖与实现全面对齐 **Shapely 2.x**（``pyproject.toml`` 中为 ``shapely>=2.0.0``），在保留 ``MapPolygon`` 等既有 API 的前提下，消除此前与 Shapely 2.0 迁移相关的兼容性问题；该项变更对应 `Issue #106 <https://github.com/cnmetlab/cnmaps/issues/106>`_。
* **Cartopy 兼容**：绘图裁剪逻辑同时兼容新版 ``cartopy.mpl.path.shapely_to_path`` 与旧版 ``cartopy.mpl.patch.geos_to_path``，并适配新的 ``GeoContourSet`` 接口。
* **Python / CI**：项目 Python 版本范围更新为 ``>=3.9,<3.13``，主 CI 覆盖 Python 3.9–3.12 与 macOS / Ubuntu / Windows；绘图测试统一使用 ``MPLBACKEND=Agg``，依赖安装步骤增加自动重试以减少网络抖动导致的偶发失败。
* **性能**：对样例数据加载、GeoJSON 读取、行政区查询与 ``MapPolygon`` 内部重复多边形清理进行了缓存和热点优化，全量测试耗时显著下降。
* 文档：安装说明、贡献者指南、API 参考等与当前工程及 CI 同步（Python/NumPy/Shapely 约束、GitHub Actions、函数签名与返回行为等）。

1.1.7
------
*发布时间: 2023-08-10*

* Python 解释器要求升级到 3.9。
* Cartopy 版本要求升级到 0.22.0。
* 修复了由于 ``shapely>=2.0`` 导致的错误。
* 修复了 Numba、Geopandas 的警告提示问题。
* pip 安装时不再需要手动安装依赖。


1.0.1
-------
*发布时间: 2022-04-05*

* 修复了安装依赖缺少 geopandas 的问题。

1.0.0
-------
*发布时间: 2022-04-05*

* 增加了 ``cnmaps.maps.get_adm_maps`` 函数以支持对市、区县等行政边界的查询，高德的行政边界数据上已下探到区县级别。

   * 支持多条件筛选和一次性返回多个对象功能。
   * 集成了geopandas引擎。

* 增加了 ``cnmaps.maps.get_adm_names`` 函数以支持对支持的行政区关键字的查询。
* 增加了 ``cnmaps.drawing.draw_maps`` 函数以方便一次性绘制多个地图边界。
* 增加了 ``cnmaps.regions.region_polygons`` 可以直接获取例如华北地区、华东地区、京津冀、江浙沪等边界对象。
* 删除了 ``cnmaps.get_map`` 函数，其行政边界查询的功能转移至 ``get_adm_maps`` ，但用法上会有一些变化。
* 暂时删除了对青藏高原边界的支持。

0.2.1
---------
*发布时间: 2022-03-02*

* 修复了Windows系统中GBK编码无法加载数据的问题。

0.2.0
---------
*发布时间: 2022-02-16*

* 增加了对pcolormesh图的裁剪支持。
* 修复了边界错误的问题。

0.1.11
---------
*发布时间: 2022-02-14*

* 尝试修复安装时出现gbk编码异常的问题。

0.1.10
---------
*发布时间: 2022-02-13*

* 增加功能: cnmaps.get_map函数: 获取地图。
* 增加功能: cnmaps.draw_map函数: 绘制地图。
* 增加功能: cnmaps.MapPolygon类: 地图对象, 包括: 加号(合并)、减号(剪切)、逻辑与(交集)运算符的支持，get_extent方法。
* 增加功能: cnmaps.clip_contours_by_map函数: 基于MapPolygon类对等值线图做裁减。
* 增加功能: cnmaps.sample.load_dem函数: 加载dem样例数据。
* 增加功能: cnmaps.clip_clabels_by_map函数: 基于MapPolygon类对标签做裁减。
* 对cartopy.crs各类投影的支持。
* 对全国中国国界、全国各省(特区/直辖市)地图的预置, 且处理了已知的拓扑错误。
* 集成 Travis CI 自动化测试（后续版本已迁移至 GitHub Actions）。
