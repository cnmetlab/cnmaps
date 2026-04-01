########
MCP 集成
########

``cnmaps`` 现在内置了一个基于 `Model Context Protocol (MCP) <https://modelcontextprotocol.io/>`_ 的服务入口，可以让支持 MCP 的 AI 工具直接调用行政边界查询能力。

适用场景包括：

- 在 Codex、Claude Code、Cursor 等支持 MCP 的客户端里直接查询中国行政区和全球国家边界
- 让 AI 读取 ``cnmaps`` 的数据提供者信息、行政名称列表和 GeoJSON 边界
- 在生成绘图脚本、分析地理范围或辅助科研制图时，让模型调用真实数据，而不是只靠静态知识猜测

安装
======

MCP 依赖当前基于官方 Python SDK，因此要求运行环境至少为 Python ``3.10``。

在 Python ``3.10+`` 环境中，正常安装 ``cnmaps`` 即可获得 MCP 服务入口：

.. code-block:: bash

   pip install -U cnmaps

如果你已经安装过 ``cnmaps``，同时希望确保使用最新版官方边界数据，也建议同步更新：

.. code-block:: bash

   pip install -U cnmaps-data

安装完成后，可执行命令为：

.. code-block:: bash

   cnmaps-mcp

这个命令会以 ``stdio`` 方式启动 MCP server，适合被 AI 客户端作为外部工具接入。

可用工具
==========

当前 MCP server 暴露了以下几个高价值工具：

- ``get_server_info``：获取 ``cnmaps`` 版本、默认 provider 和已发现的数据提供者
- ``list_data_providers``：列出当前环境中可用的 provider 及其数据目录
- ``list_sample_datasets``：列出内置科研绘图样例数据
- ``get_administrative_names``：按国家 / 省 / 市 / 区县条件查询名称列表
- ``get_administrative_records``：查询边界记录元信息，返回中心点坐标和 bounding box
- ``get_administrative_geojson``：直接返回 GeoJSON ``Feature`` / ``FeatureCollection``
- ``render_administrative_map``：直接绘制行政边界图并导出 PNG
- ``render_sample_map``：直接用内置样例数据绘制裁剪后的科研图并导出 PNG

其中国家级查询支持：

- 中文名，例如 ``中国``、``法国``
- ``ISO3``，例如 ``CHN``、``FRA``
- ``cnmaps-data`` 中定义的组合码，例如争议地区记录

命令行联调
============

如果你想先在本地确认服务能否启动，可以直接运行：

.. code-block:: bash

   cnmaps-mcp

然后在支持 MCP 调试的客户端或 Inspector 中连接这个 ``stdio`` 进程。

客户端配置思路
================

不同 AI 客户端的配置文件格式并不完全相同，但核心都一样：把 ``cnmaps-mcp`` 注册成一个 ``stdio`` server。

也就是说，无论是 Codex、Claude Code 还是 Cursor，核心命令都应当是：

.. code-block:: text

   command: cnmaps-mcp

如果客户端支持显式传递参数，当前第一版通常不需要额外参数。

使用建议
==========

- 如果你希望模型优先查中国行政区，通常直接传 ``country="中国"`` 或具体的省 / 市 / 区县名称即可。
- 如果你希望模型查全球国家边界，通常使用 ``level="国"``，并按需再传 ``country`` 或 ``source``。
- 如果你希望模型直接拿到几何用于后续处理，优先调用 ``get_administrative_geojson``。
- 如果你只希望模型先确认名称、中心点或范围，不必直接返回大几何，可以先调用 ``get_administrative_records``。
- 如果你希望模型直接帮你产出可视化结果，可以优先调用 ``render_administrative_map`` 或 ``render_sample_map``。
