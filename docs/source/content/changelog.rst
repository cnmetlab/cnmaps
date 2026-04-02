版本日志
===========

2.1.0
-------
*发布日以 PyPI 为准。*

* **版本与数据依赖**：主包版本提升到 ``2.1.0`` ，并将官方数据包依赖提升到 ``cnmaps-data>=1.1.2`` 。
* **行政区记录增强**：``get_adm_maps`` 返回的 ``MapRecord`` 现在显式提供 ``longitude`` / ``latitude`` 中心点坐标字段，便于直接做标注、打点和文本放置；相关文档、示例和技能说明同步补全。
* **多名称批量筛选**：``get_adm_maps`` / ``get_adm_names`` 支持在同一 ``level`` 下使用 ``province`` / ``city`` / ``district`` / ``country`` 的多值筛选，一次查询可返回多个精确命名对象，但仍不支持在单次调用中混合 ``国`` / ``省`` / ``市`` / ``区县`` 层级。
* **命令行工具扩展**：新增 ``cnmaps export`` 子命令，可直接按照接近 ``get_adm_maps`` 的筛选规则导出 GeoJSON / Shapefile；文档新增独立“命令行工具”章节，并补充 CLI 相关测试。
* **外部边界规范与校验**：新增 ``validate_boundary_file(...)``、``read_boundary_file(...)`` 和 ``cnmaps check-boundary`` ，为自定义 GeoJSON / Shapefile 接入 ``MapPolygon`` 工作流提供统一的 boundary spec、校验入口与读取入口。
* **绘图裁剪能力扩展**：新增 ``clip_streamplot_by_map(...)`` 与 ``clip_imshow_by_map(...)`` ，分别支持对 ``streamplot`` 流线图和 ``imshow`` 图像对象（包括 hillshade）按行政区边界裁剪。
* **EPS / PS 导出经验沉淀**：新增“常见问题”文档，记录复杂边界裁剪后导出 ``EPS`` / ``PS`` 可能失效的场景，并补充 ``simplify=True`` 的 workaround 与相关技能说明。
* **AI Skill 体系上线**：主包内置 bundled skill 结构，支持通过 ``cnmaps install-skill`` 安装到 Codex、Cursor、Claude Code 等助手环境；同时补充共享 references / examples，使 AI 更稳定地理解 ``cnmaps`` 的查询、绘图、裁剪、遮罩、导出与能力边界。
* **文档与示例重构**：整体刷新 README 与 Sphinx 文档，新增 CLI、FAQ、数据来源、国家中心点、世界地图与能力边界等内容，补充大量静态示例图和可运行示例脚本，并统一本地文档构建脚本。

2.0.1
-------
*发布日以 PyPI 为准。*

* **数据依赖约束**：将官方数据包依赖明确收紧为 ``cnmaps-data>=1.1.1``，确保国家级边界、``iso3`` 查询和最新争议地区处理规则能够稳定生效。
* **性能测试**：重构 benchmark 项目与性能页面统计口径，避免将不同 workload 的历史曲线混在同一条线上。
* **性能优化**：对 ``maskout`` / ``make_mask_array`` 的核心路径进行了针对性优化，改善重复网格计算场景下的性能表现。
* **测试与文档**：补齐国家级查询、文档示例和性能测试用例的查询口径，使其与 ``cnmaps-data`` 拆分后的语义保持一致。

2.0.0
-------
*发布日以 PyPI 为准。*

* **数据包拆分**：``cnmaps`` 自 2.0 起不再内置官方行政区、地理边界与样例数据，官方数据已迁移到独立包 ``cnmaps-data``；安装 ``cnmaps`` 时会默认安装 ``cnmaps-data``。
* **数据提供者机制**：运行时默认通过已安装的 ``cnmaps-data`` 或兼容 ``cnmaps.data_providers`` entry point 协议的第三方数据包提供数据，不再回退到仓库内置数据目录。
* **Shapely 2.0**：本版本最重要的变更是将依赖与实现全面对齐 Shapely 2.x（``pyproject.toml`` 中为 ``shapely>=2.0.0``），在保留 ``MapPolygon`` 等既有 API 的前提下，消除此前与 Shapely 2.0 迁移相关的兼容性问题；该项变更对应 `Issue 106 <https://github.com/cnmetlab/cnmaps/issues/106>`_。
* **Cartopy 兼容**：绘图裁剪逻辑同时兼容新版 ``cartopy.mpl.path.shapely_to_path`` 与旧版 ``cartopy.mpl.patch.geos_to_path``，并适配新的 ``GeoContourSet`` 接口。
* **Python / CI**：项目 Python 版本范围更新为 ``>=3.9,<4.0``，主 CI 覆盖 Python 3.9–3.14 与 macOS / Ubuntu / Windows；绘图测试统一使用 ``MPLBACKEND=Agg``，依赖安装步骤增加自动重试以减少网络抖动导致的偶发失败。
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
