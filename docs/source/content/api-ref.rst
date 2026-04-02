###########
API参考
###########

maps
=========
maps模块主要存放与地图边界对象相关的类和函数。

.. py:class:: MapRecord
    :module: cnmaps.maps

    默认 ``engine=None`` 且 ``only_polygon=False`` 时返回的地图记录对象。

    ``MapRecord`` 基于 ``dict``，支持：

    - 英文 key 访问，例如 ``record['country']``、``record['longitude']``
    - 点号访问，例如 ``record.country``、``record.longitude``
    - 中文 key 兼容访问，例如 ``record['国家']``、``record['经度']``

    其中中文 key 当前仍兼容，但访问时会触发 ``DeprecationWarning``，并计划在未来 ``3.x`` 版本中移除。

.. py:class:: MapPolygon
    :module: cnmaps.maps

    地图多边形类（内部持有一个 ``shapely.geometry.MultiPolygon``，组合实现，兼容 Shapely 2.0+）

    该类基于 ``shapely.geometry.MultiPolygon`` 的自定义封装，
    并实现了加号等运算符以合并边界。

    .. py:method:: drop_inner_duplicate(map_polygon)

        地图对象的自我纠正，剔除内含的多余多边形，常见于多个地图多边形对象合并时

        :param cnmaps.maps.MapPolygon map_polygon:
            地图边界对象, 可以通过 ``get_adm_maps()`` 获取
        
        :return:
            经过纠正后的MapPolygon对象

        :rtype: cnmaps.maps.MapPolygon
    
    .. py:method:: get_extent(buffer=2)

        获取范围坐标

        :param buffer:
            外扩缓冲边缘, 单位为°, 该值越大, 所取的范围越大. 默认为 2.
        
        :type buffer: float or int

        :return:
            坐标范围点, 该值可直接传入 ``ax.set_extent()`` 使用

        :rtype: tuple

    .. py:method:: to_file(savefp, engine="GeoJSON", meta={"id": None, "name": None}, encoding="utf-8")

        存储为文件

        :param str savefp: 
            保存路径

        :param str engine: 
            存储引擎，支持的选项为 ``'ESRI Shapefile'`` 和 ``'GeoJSON'`` ，不区分大小写。默认为 ``'GeoJSON'`` 。

        :param dict meta: 
            元信息，写入要素属性。默认为 ``{'id': None, 'name': None}`` 。

        :param str encoding: 编码类型。默认为 ``'utf-8'`` 。

    .. py:method:: make_mask_array(lons, lats)

        生成边界以外的遮罩（掩膜）数组

        :param numpy.ndarray lons: 经度矩阵（2维）
        :param numpy.ndarray lats: 纬度矩阵（2维）

        :return:
            由 ``True`` 和 ``False`` 组成的遮罩（掩膜）数组
        :rtype: numpy.ndarray

    .. py:method:: maskout(lons, lats, data)

        对边界以外的数据进行遮罩处理

        :param numpy.ndarray lons: 经度矩阵（2维）
        :param numpy.ndarray lats: 纬度矩阵（2维）
        :param numpy.ndarray data: 数据矩阵（2维）

        :return:
            遮罩后的数据矩阵
        :rtype: numpy.ma.MaskedArray
        

.. py:function:: read_mapjson(fp: str, wgs84=True)
    :module: cnmaps.maps

    读取geojson地图边界文件（仅对符合特定格式要求的geojson有效）

    :param str fp:
        geojson文件路径.
    :param bool wgs84:
        是否使用 WGS84 坐标，若为 True 则转为 WGS84 坐标，若为 False 则为原始的 GCJ02 坐标（火星坐标）

    :return:
        地图边界对象
    :rtype:
        cnmaps.maps.MapPolygon


.. py:function:: validate_boundary_file(fp, allow_multi_feature=True)
    :module: cnmaps.maps

    检查一个外部 ``GeoJSON`` / ``Shapefile`` 是否符合 ``cnmaps boundary spec``。

    当前规范要求：

    - 文件格式为 ``.geojson`` / ``.json`` / ``.shp``
    - CRS 必须明确且等价为 WGS84（``EPSG:4326``）
    - 几何必须全部为 ``Polygon`` 或 ``MultiPolygon``
    - 不能包含空几何或无效几何

    :param fp:
        待检查的边界文件路径。
    :param bool allow_multi_feature:
        是否允许文件包含多个 feature。默认为 ``True``；若允许，读取时会先合并为一个统一边界。

    :return:
        结构化检查结果对象，包含是否通过、geometry 类型、CRS、错误列表与警告列表等信息。


.. py:function:: read_boundary_file(fp, dissolve=True)
    :module: cnmaps.maps

    读取一个符合 ``cnmaps boundary spec`` 的外部 ``GeoJSON`` / ``Shapefile`` 文件，并将其转换为 ``MapPolygon``。

    :param fp:
        边界文件路径。
    :param bool dissolve:
        是否在读取时先将多个 feature 合并为一个统一边界。默认为 ``True``。

    :return:
        可直接用于 ``make_mask_array``、``maskout``、``clip_*`` 等工作流的 ``MapPolygon``。

    :raises BoundarySpecError:
        当文件不符合 ``cnmaps boundary spec`` 时抛出。


.. py:function:: get_adm_names(province: str = None, city: str = None, district: str = None, level: str = '省', country: str = None, source: str = None, provider: str = None)
    :module: cnmaps.maps

    获取行政名称（内部调用 ``get_adm_maps`` 再抽取名称字段）。

    :param str | list[str] province:
        省/自治区/直辖市/行政特区中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str | list[str] city:
        地级市中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str | list[str] district:
        区/县中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str level:
        边界等级，请使用 ``'国'``、``'省'``、``'市'``、``'区县'`` 之一（与 ``get_adm_maps`` 的 ``level`` 含义一致）。默认为 ``'省'``。
    :param str | list[str] country:
        国家名称。国家级查询可传中文名、``ISO3`` 或组合码；也支持传入名称或代码列表做批量过滤；不传时不做国家过滤。
        
        从 ``2.0.0`` 开始，``'中国'`` 也会自动视为 ``'中华人民共和国'`` 的别称。
    :param str source:
        数据源过滤条件；不传时不做来源过滤。
    :param str provider:
        数据提供者名称。默认为官方 ``'cnmaps-data'``；传入其他名称时，会按已安装 provider 的 ``name`` 进行匹配。

    :return:
        满足条件的名称列表

    :rtype: list

    .. note::

        从 ``2.0.0`` 开始，国家级查询里传入 ``country='中国'`` 会自动等价于 ``country='中华人民共和国'``。
        一次查询仍然只对应一个 ``level`` ；列表过滤只是在该等级下批量选择多个名称，不支持在同一次调用里混合 ``国``、``省``、``市``、``区县`` 结果。下同。


.. py:function:: get_adm_maps(province: str = None, city: str = None, district: str = None, level: str = None, country: str = None, source: str = None, db: str = None, engine: str = None, record: str = 'all', only_polygon: bool = False, wgs84: bool = True, simplify: bool = False, provider: str = None, *args, **kwargs)
    :module: cnmaps.maps

    获取行政地图的边界对象。

    :param str | list[str] province:
        省/自治区/直辖市/行政特区中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str | list[str] city:
        地级市中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str | list[str] district:
        区/县中文名，必须为全称；也支持传入名称列表进行批量过滤。默认为 ``None``。
    :param str level:
        边界等级，须为 ``'国'``、``'省'``、``'市'``、``'区县'`` 之一；也可使用 ``'区'``、``'县'``、``'区/县'`` 等写法（内部归一为 ``'区县'``）。若为 ``None``，则根据是否传入 ``province`` / ``city`` / ``district`` 自动推断等级。国界查询使用 ``level='国'`` （全国陆地与南海诸岛等为多条记录，常见用法为 ``record='first'`` 等）。
    :param str | list[str] country:
        国家名称。国家级查询可传中文名、``ISO3`` 或组合码；也支持传入名称或代码列表做批量过滤；不传时不做国家过滤。
        
        从 ``2.0.0`` 开始，``'中国'`` 也会自动视为 ``'中华人民共和国'`` 的别称。
    :param str source:
        数据源过滤条件；不传时不做来源过滤。
    :param str db:
        SQLite 数据库文件路径。默认使用所选 provider 的索引库。
    :param str engine:
        输出引擎：``None`` 时为 ``list`` （元素为字典或 ``MapPolygon``）；``'geopandas'`` 时为 ``GeoDataFrame``。当 ``engine='geopandas'`` 时，几何列保持为原生 Shapely geometry；当 ``engine is None`` 时，对外仍返回 ``MapPolygon`` 以保持历史接口。
    :param str record:
        ``'all'`` 返回全部匹配记录；``'first'`` 仅返回第一条。
    :param bool only_polygon:
        ``True`` 时只返回 ``MapPolygon`` 或 ``MapPolygon`` 列表；``False`` 时返回带 ``'geometry'`` 等字段的字典列表（或 ``GeoDataFrame``）。
    :param bool wgs84:
        ``True`` 为 WGS84，``False`` 为 GCJ02（火星坐标）。
    :param bool simplify:
        是否对几何做简化。默认为 ``False``。当你需要把按边界裁剪后的结果导出为 ``EPS`` / ``PS``，且遇到文件无法被正常打开或转换的问题时，可以优先尝试 ``simplify=True``；详见 :doc:`faq`。
    :param str provider:
        数据提供者名称。默认为官方 ``'cnmaps-data'``；传入其他名称时，会按已安装 provider 的 ``name`` 进行匹配。

    :return:
        根据参数查到的地图元信息与几何。
        
        - 当 ``engine is None`` 且 ``only_polygon=False`` 时，返回 ``MapRecord`` 对象（或其列表）。
          记录中同时包含英文字段 ``country``、``province``、``city``、``district``、``level``、``source``、``kind``、``longitude``、``latitude``，
          并兼容中文字段访问；中文 key 计划在未来 ``3.x`` 版本中移除。
        - 当 ``engine='geopandas'`` 时，返回 ``GeoDataFrame``。其中 ``geometry`` 列为原生 Shapely geometry，
          并同时保留英文列和兼容性的中文列；``geometry`` 只保留一份，不额外复制中文别名列。
        - 当 ``only_polygon=True`` 时，返回 ``MapPolygon`` 或 ``MapPolygon`` 列表。

    :rtype: list or geopandas.GeoDataFrame



.. py:function:: get_available_data_providers()
    :module: cnmaps.provider

    返回当前环境中已发现的 provider 名称列表。

    :return:
        已发现的数据提供者名称

    :rtype: tuple


.. py:function:: get_data_provider(name: str = None)
    :module: cnmaps.provider

    返回当前使用的数据提供者对象。

    :param str name:
        可选的 provider 名称。若为 ``None``，则返回当前默认 provider；传入名称时，会按已安装 provider 的 ``name`` 进行匹配。

    :return:
        数据提供者对象

drawing
==========
drawing模块主要存放与绘图相关的函数

.. py:function:: clip_contours_by_map(contours, map_polygon, ax=None, extent=None, set_extent=False)
    :module: cnmaps.drawing

    使用地图边界对等值线 / 填色等值线（``contour`` / ``contourf``）结果裁剪。

    :param cartopy.mpl.contour.GeoContourSet contours:
        ``ax.contour()`` 或 ``ax.contourf()`` 的返回值，须带投影信息。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、``MapPolygon`` 列表或 ``GeoDataFrame`` 几何列，通常由 ``get_adm_maps(..., only_polygon=True)`` 或 ``get_adm_maps(..., engine='geopandas')`` 得到。
    :param ax:
        坐标轴；默认优先使用 ``contours.axes``，拿不到时再回退到 ``matplotlib.pyplot.gca()``。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``。若传入，则会先用地图边界裁剪，再与该矩形范围求交。
    :param bool set_extent:
        若为 ``True`` 且同时传入 ``extent``，则自动调用 ``ax.set_extent(extent, crs=ccrs.PlateCarree())``。


.. py:function:: clip_pcolormesh_by_map(mesh, map_polygon, ax=None, extent=None, set_extent=False)
    :module: cnmaps.drawing

    对 ``pcolormesh`` 结果按地图边界裁剪。

    :param cartopy.mpl.geocollection.GeoQuadMesh mesh:
        ``ax.pcolormesh()`` 的返回值，须带投影信息。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、列表或 ``GeoDataFrame``。
    :param ax:
        坐标轴；默认优先使用 ``mesh.axes``，拿不到时再回退到当前轴。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``。
    :param bool set_extent:
        若为 ``True`` 且同时传入 ``extent``，则自动设置坐标范围。


.. py:function:: clip_quiver_by_map(quiver, map_polygon, ax=None, extent=None, set_extent=False)
    :module: cnmaps.drawing

    对箭矢图 ``quiver`` 按地图边界裁剪。

    :param matplotlib.quiver.Quiver quiver:
        ``ax.quiver()`` 的返回值，须带投影信息。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、列表或 ``GeoDataFrame``。
    :param ax:
        坐标轴；默认优先使用 ``quiver.axes``，拿不到时再回退到当前轴。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``。
    :param bool set_extent:
        若为 ``True`` 且同时传入 ``extent``，则自动设置坐标范围。


.. py:function:: clip_streamplot_by_map(streamplot, map_polygon, ax=None, extent=None, set_extent=False)
    :module: cnmaps.drawing

    对流线图 ``streamplot`` 按地图边界裁剪。

    :param streamplot:
        ``ax.streamplot()`` 的返回值。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、列表或 ``GeoDataFrame``。
    :param ax:
        坐标轴；默认优先使用 ``streamplot.lines.axes``，拿不到时再回退到当前轴。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``。
    :param bool set_extent:
        若为 ``True`` 且同时传入 ``extent``，则自动设置坐标范围。


.. py:function:: clip_scatter_by_map(scatter, map_polygon, ax=None, extent=None, set_extent=False)
    :module: cnmaps.drawing

    对 ``scatter`` 散点按地图边界裁剪（设置 ``set_clip_path``）。

    :param matplotlib.collections.PathCollection scatter:
        ``ax.scatter()`` 的返回值。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、列表或 ``GeoDataFrame``。
    :param ax:
        坐标轴；默认优先使用 ``scatter.axes``，拿不到时再回退到当前轴。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``。
    :param bool set_extent:
        若为 ``True`` 且同时传入 ``extent``，则自动设置坐标范围。


.. py:function:: clip_clabels_by_map(clabel_text, map_polygon, ax=None, extent=None)
    :module: cnmaps.drawing

    按边界隐藏落在区域外的等值线标签，一般与 ``contour`` + ``clabel`` 联用。

    **注意：依赖 Cartopy 与地图投影，建议在 cartopy >= 0.19.0 环境下使用。**

    :param clabel_text:
        ``ax.clabel()`` 返回的可迭代标签集合（内部对逐个 ``matplotlib.text.Text`` 判断位置是否在 ``map_polygon`` 内）。
    :param map_polygon:
        地图边界对象；支持单个 ``MapPolygon``、列表或 ``GeoDataFrame``。
    :param ax:
        坐标轴；默认优先使用首个标签对象所在的 ``axes``，拿不到时再回退到当前轴。
    :param extent:
        可选的经纬度范围 ``[left, right, lower, upper]``；标签可见性会基于地图边界与该范围的交集判断。

.. py:function:: draw_map(map_polygon, ax=None, **kwargs)
    :module: cnmaps.drawing

    绘制单个地图边界线（或 ``MultiLineString``）。

    :param map_polygon:
        ``MapPolygon`` 或 ``shapely.geometry.MultiLineString``。
    :param ax:
        坐标轴；默认当前轴。
    :param kwargs:
        其余关键字参数会透传给 ``ax.add_geometries``。若未传 ``color`` / ``c``，默认使用黑色。
        额外支持 ``autoscale`` 参数（默认为 ``True``），用于在绘制后自动缩放到当前几何范围。

.. py:function:: draw_maps(maps, ax=None, **kwargs)
    :module: cnmaps.drawing

    批量绘制多个地图边界。

    :param maps:
        ``list`` （``MapPolygon``、``MapRecord`` 或含 ``geometry`` 的字典）、单个 ``MapPolygon``，或 ``geopandas.GeoDataFrame``。
    :param ax:
        坐标轴；默认当前轴。

regions
==========

regions模块主要存放组合后的边界对象

.. py:data:: cnmaps.regions.region_polygons

    区域性组合地图多边形数据字典，包含的键有：

    东北地区、华北地区、华中地区、华南地区、华东地区、西南地区、西北地区、川渝、京津冀、江浙沪、长三角

sample
==========
sample模块主要存放示例数据

.. py:function:: load_dem(provider: str = None)
    :module: cnmaps.sample

    加载中国地区的 DEM 海拔样例数据。

    :param str provider:
        数据提供者名称。默认为官方 ``'cnmaps-data'``。

    :return:
        ``(lons, lats, data)``


.. py:function:: load_temp(provider: str = None)
    :module: cnmaps.sample

    加载中国地区的气温样例数据。

    :param str provider:
        数据提供者名称。默认为官方 ``'cnmaps-data'``。

    :return:
        ``(lons, lats, data)``


.. py:function:: load_wind(provider: str = None)
    :module: cnmaps.sample

    加载中国地区的风场样例数据（``u``、``v`` 分量）。

    :param str provider:
        数据提供者名称。默认为官方 ``'cnmaps-data'``。

    :return:
        ``(lons, lats, u, v)``

cli
==========

命令行工具目前主要包括 ``install-skill`` 与 ``export`` 两个子命令。

.. program:: cnmaps

.. option:: install-skill {codex,cursor,claudecode} [--dir DIR] [--mode {local,global}] [--force]

    安装 ``cnmaps`` 自带的 AI Skill 描述。

    - ``codex`` / ``cursor`` / ``claudecode``：目标助手类型
    - ``--dir DIR``：本地安装时指定项目目录，默认是当前目录
    - ``--mode local``：安装到当前项目目录
    - ``--mode global``：安装到用户主目录下的全局目录
    - ``--force``：覆盖已有安装

.. option:: export OUTPUT [--country ...] [--province ...] [--city ...] [--district ...] [--level ...] [--source ...] [--provider ...] [--record {all,first}] [--engine ENGINE] [--encoding ENCODING] [--gcj02] [--simplify]

    直接在命令行里完成“查询边界 + 导出文件”。

    - ``OUTPUT``：目标输出路径；默认按后缀推断格式，其中 ``.geojson`` / ``.json`` 对应 GeoJSON，``.shp`` 对应 ESRI Shapefile
    - ``--country``、``--province``、``--city``、``--district``：边界筛选条件，均支持多个值
    - ``--level``：行政等级，例如 ``国``、``省``、``市``、``区县``
    - ``--source``：数据源筛选
    - ``--provider``：数据提供者名称
    - ``--record all``：导出所有匹配记录
    - ``--record first``：只导出第一条匹配记录
    - ``--engine``：显式指定导出格式
    - ``--encoding``：指定输出编码
    - ``--gcj02``：导出 GCJ02 坐标，而不是默认的 WGS84
    - ``--simplify``：导出前先简化几何

    其中各类筛选规则尽量与 ``get_adm_maps`` 保持一致；如果需要多个名称筛选，可在同一个参数后依次写出多个值。

.. option:: check-boundary PATH [--json]

    检查一个外部边界文件是否符合 ``cnmaps boundary spec``。

    - ``PATH``：待检查的 ``GeoJSON`` / ``Shapefile`` 文件路径
    - ``--json``：输出结构化 JSON 检查结果；这只是检查结果的输出格式，与输入文件格式无关

    若检查通过，文件即可进一步通过 ``read_boundary_file(...)`` 读取并转换为 ``MapPolygon``。
