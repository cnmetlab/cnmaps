###########
API参考
###########

maps
=========
maps模块主要存放与地图边界对象相关的类和函数。

.. py:class:: MapPolygon(shapely.geometry.MultiPolygon)
    :module: cnmaps.maps

    地图多边形类

    该是基于shapely.geometry.MultiPolygon的自定义类, 
    并实现了对于加号操作符的支持.

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
        
.. py:function:: get_adm_names(province: str = None, city: str = None, district: str = None,level: str = '省', country: str = '中华人民共和国', source: str = '高德')
    :module: cnmaps.maps

    获取行政名称

    :param str province:
        省/自治区/直辖市/行政特区中文名, 必须为全称, 例如查找河北省应收入 ``'河北省'`` 而非 ``'河北'`` . 默认为 ``None``.
    :param str city:
        地级市中文名, 必须为全称, 例如查找北京市应输入 ``'北京市'`` 而非 ``'北京'`` . 默认为 ``None``.
    :param str district:
        区/县中文名, 必须为全称. 默认为 ``None``.
    :param str level:
        边界等级, 目前支持的等级包括 ``'省'``, ``'市'``, ``'区县'``. 其中 ``'省'`` 级包括直辖市、特区等; ``'市'`` 级为地级市, 若为直辖市, 则名称与 ``'省'`` 级相同, 比如北京市的省级和市级都是 ``'北京市'`` ;  ``'区'`` 和 ``'县'`` 属于同一级别的不同表达形式. 默认为 ``'省'``.
    :param str country:
        国家名称, 必须为全称. 默认为 ``'中华人民共和国'``.
    :param str source:
        数据源. 默认为 ``'高德'``.

    :return:
        满足条件的名称列表

    :rtype: list

.. py:function:: get_adm_maps(province: str = None, city: str = None, district: str = None,level: str = '省', country: str = '中华人民共和国', source: str = '高德',db: str = DB_FILE, engine: str = None, record: str = 'all', only_polygon: bool = False, *args, **kwargs)
    :module: cnmaps.maps

    获取行政地图的边界对象

    :param str province:
        省/自治区/直辖市/行政特区中文名, 必须为全称, 例如查找河北省应收入 ``'河北省'`` 而非 ``'河北'`` . 默认为 ``None``.
    :param str city:
        地级市中文名, 必须为全称, 例如查找北京市应输入 ``'北京市'`` 而非 ``'北京'`` . 默认为 ``None``.
    :param str district:
        区/县中文名, 必须为全称. 默认为 ``None``.
    :param str level:
        边界等级, 目前支持的等级包括 ``'省'``, ``'市'``, ``'区县'``. 其中 ``'省'`` 级包括直辖市、特区等; ``'市'`` 级为地级市, 若为直辖市, 则名称与 ``'省'`` 级相同, 比如北京市的省级和市级都是 ``'北京市'`` ;  ``'区'`` 和 ``'县'`` 属于同一级别的不同表达形式. 默认为 ``'省'``.
    :param str country:
        国家名称, 必须为全称. 默认为 ``'中华人民共和国'``.
    :param str source:
        数据源. 默认为 ``'高德'``.
    :param str db:
        sqlite db文件路径. 默认从配置文件中取.
    :param str engine:
        输出引擎, 默认为None, 输出为list列表, 目前支持'geopandas', 若为geopandas, 则返回GeoDataFrame对象. 默认为 None.
    :param str record:
        返回记录的形式, 选项包括 ``'all'`` 和 ``'first'`` ; 若为 ``'first'`` , 则无论查询结果又几条，仅返回第一条记录, 若为 ``'all'`` , 则返回全部数据, 若 ``engine==None`` 则返回list, 若 ``engine=='geopandas'`` , 则返回GeoDataFrame对象. 默认为 ``'all'`` .
    :param bool only_polygon:
        是否仅返回地图边界对象(MapPolygon), 若为 ``True`` 则返回结果为MapPolygon对象或以MapPolygon对象组合的list, 若为 ``False`` , 则返回的结果包含元信息, MapPolygon对象存储在 ``'geometry'`` 键中. 默认为 ``False`` .

    :return:
        根据输入参数查找到的地图边界的元信息及边界对象

    :rtype: GeoDataFrame or list

drawing
==========
drawing模块主要存放与绘图相关的函数

.. py:function:: clip_contours_by_map(contours, map_polygon)
    :module: cnmaps.drawing

    使用地图边界对象对等值线对象进行裁剪

    :param cartopy.mpl.contour.GeoContourSet contours:
        等值线对象, 该对象是调用 ``ax.contour()`` 或 ``ax.contourf()`` 方法的返回值，注意: 对象须带有投影信息
                
    :param cnmaps.maps.MapPolygon map_polygon:
        地图边界对象, 可以通过 ``get_adm_maps()`` 获取


.. py:function:: clip_pcolormesh_by_map(mesh, map_polygon)
    :module: cnmaps.drawing

    使用地图边界对象对填色网格线对象进行裁剪

    :param cartopy.mpl.geocollection.GeoQuadMesh mesh:
        GeoQuadMesh对象, 该对象是调用 ``ax.pcolormesh()`` 方法的返回值，注意: 对象须带有投影信息
                
    :param cnmaps.maps.MapPolygon map_polygon:
        地图边界对象, 可以通过 ``get_adm_maps()`` 获取


.. py:function:: clip_clabels_by_map(clabel_text, map_polygon)
    :module: cnmaps.drawing

    剪切clabel文本, 一般配合contour函数使用

    **注意: 该函数仅对于cartopy>=0.19.0版本有效**

    :param matplotlib.text.Text clabel_text:
        matplotlib.text.Text对象, 由 ``clabel`` 函数返回

    :param cnmaps.maps.MapPolygon map_polygon:
        地图边界对象, 可以通过 ``get_adm_maps()`` 获取

.. py:function:: draw_map(map_polygon, **kwargs)
    :module: cnmaps.drawing

    绘制单个地图边界线

    :param cnmaps.maps.MapPolygon map_polygon:
        地图边界线对象

.. py:function:: draw_maps(maps, **kwargs)
    :module: cnmaps.drawing

    绘制多个地图边界

    :param maps:
        地图边界线对象

    :type maps: list or GeoDataFrame

regions
==========

regions模块主要存放组合后的边界对象

.. py:data:: cnmaps.regions.region_polygons

    区域性组合地图多边形数据字典，包含的键有：

    东北地区、华北地区、华中地区、华南地区、华东地区、西南地区、西北地区、川渝、京津冀、江浙沪、长三角

sample
==========
sample模块主要存放示例数据

.. py:function:: load_dem(area_name, **kwargs)
    :module: cnmaps.sample

    :param str area_name:
        区域名称, 目前仅支持 ``'京津冀'``, 若为None则取全国. 默认为 None.

    :return:
        (lons, lats, data)
