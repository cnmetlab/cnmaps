安装
=====
安装 cnmaps 要求 **Python 3.9 及以上、3.13 以下**（与 ``pyproject.toml`` 中 ``python = ">=3.9,<3.13"`` 及 PyPI 元数据一致；详见 `PyPI <https://pypi.org/project/cnmaps/>`_）。

运行时依赖包含 Cartopy、GeoPandas、Shapely 2.x、Matplotlib、NumPy 等；当前版本要求 **Shapely 2.0+**，并约束 NumPy 为 ``>=1.21.5,<2.0``（见 ``pyproject.toml``）。若使用 pip 安装发行包，一般无需手动逐条安装依赖。

项目当前在 GitHub Actions 中持续验证 **Python 3.9、3.10、3.11、3.12** 以及 macOS / Ubuntu / Windows 组合；绘图相关测试在 CI 中统一使用无头 Matplotlib 后端 ``Agg``。

使用 pip 安装
---------------
cnmaps 最简单也最快的安装方法是使用 pip： ``pip install -U cnmaps``

``cnmaps 2.x`` 起，官方边界与样例数据已经独立到 ``cnmaps-data`` 包中；安装 ``cnmaps`` 时会默认一并安装 ``cnmaps-data``，通常无需额外执行第二条命令。

使用 conda 安装
-----------------
也可以使用 conda-forge： ``conda install -c conda-forge cnmaps``

补充说明：conda-forge 当前仅维护到 ``1.1.7`` 版本；``2.x`` 及后续版本只发布到 PyPI，conda 发行不再继续维护。

从源码安装（参与开发）
------------------------
若需修改源码或运行测试，可在克隆 `主仓库 <https://github.com/cnmetlab/cnmaps>`_ 后使用 `Poetry <https://python-poetry.org/>`_ 安装依赖::

    poetry install

开发依赖中包含 pytest、flake8、black、pytest-benchmark、pytest-cov 等；**pytest-memray** 仅在非 Windows 平台作为可选依赖安装（用于性能相关测试）。详见项目根目录的 ``pyproject.toml``。

构建本 Sphinx 文档时，Read the Docs 使用 ``requirements/requirements-doc.txt``（Sphinx 与 sphinx-rtd-theme），配置见 ``.readthedocs.yaml``。
