命令行工具
===========

``cnmaps`` 提供了一个轻量的命令行工具，目前主要包括：

- AI Skill 安装
- 行政边界查询后直接导出为矢量文件

总览与帮助
------------

主命令形式如下：

.. code-block:: bash

   cnmaps <subcommand> [options]

当前主要子命令包括：

- ``install-skill``
- ``export``
- ``check-boundary``

如果你想查看命令行程序自动生成的帮助信息，也可以执行：

.. code-block:: bash

   cnmaps -h
   cnmaps install-skill -h
   cnmaps export -h
   cnmaps check-boundary -h

这些帮助信息由参数定义自动生成，通常会与当前版本保持同步；不过你通常不需要先看它们，本页已经给出常见用法与参数说明。

``install-skill`` 子命令
--------------------------

``install-skill`` 用于把 ``cnmaps`` 自带的 AI Skill 描述安装到当前项目目录或用户全局目录。

命令形式：

.. code-block:: bash

   cnmaps install-skill {codex,cursor,claudecode} [--dir DIR] [--mode {local,global}] [--force]

位置参数：

- ``codex`` / ``cursor`` / ``claudecode``：目标助手类型

常用参数：

- ``--dir DIR``：本地安装时指定项目目录，默认是当前目录
- ``--mode local``：安装到当前项目目录
- ``--mode global``：安装到用户主目录下的全局目录
- ``--force``：覆盖已有安装

最常见的本地安装方式：

.. code-block:: bash

   cnmaps install-skill codex --mode local
   cnmaps install-skill cursor --mode local
   cnmaps install-skill claudecode --mode local

全局安装方式：

.. code-block:: bash

   cnmaps install-skill codex --mode global
   cnmaps install-skill cursor --mode global
   cnmaps install-skill claudecode --mode global

如需覆盖已有安装，可追加 ``--force``：

.. code-block:: bash

   cnmaps install-skill codex --mode local --force

更多关于 Skill 的背景说明与安装建议，可参见 :doc:`installation`。

``export`` 子命令
-------------------

``export`` 用于直接在命令行里完成“查询边界 + 导出文件”。

命令形式：

.. code-block:: bash

   cnmaps export <output> [--country ...] [--province ...] [--city ...] [--district ...]
                 [--level ...] [--source ...] [--provider ...] [--record {all,first}]
                 [--engine ENGINE] [--encoding ENCODING] [--gcj02] [--simplify]

位置参数：

- ``<output>``：目标输出路径

常用参数：

- ``--country``：国家名称或 ISO3 代码，可写多个值
- ``--province``：省级名称，可写多个值
- ``--city``：市级名称，可写多个值
- ``--district``：区县名称，可写多个值
- ``--level``：行政等级，例如 ``国``、``省``、``市``、``区县``
- ``--source``：数据源筛选，可写多个值
- ``--provider``：数据提供者名称
- ``--record all``：导出所有匹配记录
- ``--record first``：只导出第一条匹配记录
- ``--engine``：显式指定导出格式
- ``--encoding``：指定输出编码
- ``--gcj02``：导出 GCJ02 坐标，而不是默认的 WGS84
- ``--simplify``：导出前先简化几何

其中 ``<output>`` 是目标输出路径。默认按文件后缀推断格式：

- ``.geojson`` / ``.json`` 对应 GeoJSON
- ``.shp`` 对应 ESRI Shapefile

如果输出路径后缀不标准，也可以显式指定格式：

.. code-block:: bash

   cnmaps export ./output/boundary.data --engine GeoJSON --province 河南省 --level 省

常见示例：

.. code-block:: bash

   cnmaps export ./jingjin.geojson --province 北京市 天津市 --level 省
   cnmaps export ./east-asia.geojson --country 中国 JPN KOR --level 国
   cnmaps export ./henan.shp --province 河南省 --level 省 --record first

筛选规则
~~~~~~~~~~

``export`` 的筛选能力尽量与 ``get_adm_maps`` 保持一致，常用参数包括：

- ``--country``
- ``--province``
- ``--city``
- ``--district``
- ``--level``
- ``--source``
- ``--provider``
- ``--record {all,first}``
- ``--simplify``
- ``--gcj02``

其中 ``--country``、``--province``、``--city``、``--district``、``--source`` 都支持在同一个参数后追加多个值，例如：

.. code-block:: bash

   cnmaps export ./jingjin.geojson --province 北京市 天津市 --level 省

这表示在同一个等级下批量筛选多个名称，而不是跨等级混合查询。像“日本”和“四川省”这样的组合，仍然需要拆成两次查询。

导出坐标与格式
~~~~~~~~~~~~~~~~

- 默认导出 WGS84 坐标
- 如需导出 GCJ02，可加 ``--gcj02``
- GeoJSON 与 Shapefile 都会保留主要属性字段，例如 ``country``、``province``、``city``、``district``、``level``、``source``、``kind``、``longitude``、``latitude``

与 Python API 的关系
----------------------

如果你已经在 Python 代码中拿到了 ``MapPolygon``，仍然可以继续使用 ``MapPolygon.to_file(...)`` 导出。

``cnmaps export`` 更适合这些场景：

- 想在 shell 里直接把边界筛选并导出
- 不想为了简单导出任务专门写一段 Python 脚本
- 想把 ``get_adm_maps`` 的筛选逻辑复用到命令行工作流中

``check-boundary`` 子命令
---------------------------

``check-boundary`` 用于检查一个外部 ``GeoJSON`` / ``Shapefile`` 是否符合 ``cnmaps boundary spec``，从而可以被 ``read_boundary_file(...)`` 稳定读取并转换为 ``MapPolygon``。

命令形式：

.. code-block:: bash

   cnmaps check-boundary <path> [--json]

位置参数：

- ``<path>``：待检查的边界文件路径

常用参数：

- ``--json``：以 JSON 形式输出结构化检查结果，便于脚本或 AI 消费；这只是检查结果的输出格式，与输入文件本身是 ``shp`` 还是 ``geojson`` 无关

当前规范要求：

- 文件格式为 ``.geojson`` / ``.json`` / ``.shp``
- CRS 必须明确且等价为 WGS84（``EPSG:4326``）
- 几何必须全部为 ``Polygon`` 或 ``MultiPolygon``
- 不能包含空几何或无效几何

如果文件包含多个 feature，``cnmaps`` 在读取时会先将它们合并为一个统一边界。

常见示例：

.. code-block:: bash

   cnmaps check-boundary ./my-boundary.geojson
   cnmaps check-boundary ./my-boundary.shp --json  # 将检查结果以 JSON 输出

如果检查通过，就可以继续在 Python 代码中调用 ``read_boundary_file(...)`` 读取，并进一步执行 ``make_mask_array(...)``、``maskout(...)`` 或 ``clip_*`` 等操作。
