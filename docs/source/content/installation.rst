安装
=====

**Python 版本**：需要 **Python 3.9 及以上、3.13 以下**。项目根目录 :file:`pyproject.toml` 中 ``python`` 字段为 ``>=3.9`` 且 ``<3.13`` （与 PyPI 元数据一致；详见 `PyPI <https://pypi.org/project/cnmaps/>`_）。

**多平台**：本项目已在 macOS、Linux、Windows 等环境经过测试，可在上述平台正常使用。

使用 pip 安装
---------------

推荐使用 pip：

.. code-block:: bash

   pip install -U cnmaps

.. note::

   自 **cnmaps 2.x** 起，官方边界与样例数据已独立为 PyPI 上的 `cnmaps-data <https://pypi.org/project/cnmaps-data/>`_ 包；安装 ``cnmaps`` 时会默认一并安装该数据包，通常无需额外命令。

使用 conda 安装
-----------------

也可从 conda-forge 安装：

.. code-block:: bash

   conda install -c conda-forge cnmaps

.. warning::

   conda-forge 上当前仅维护到 **1.1.7**；**2.x** 及后续版本仅发布到 PyPI，conda 渠道不再继续跟进。

从源码安装（参与开发）
------------------------

若需本地修改源码并即时生效，可克隆 `主仓库 <https://github.com/cnmetlab/cnmaps>`_ 后进入仓库根目录，在虚拟环境中执行：

.. code-block:: bash

   pip install -e .

上述命令以 **可编辑模式** 安装 ``cnmaps``，依赖会按 :file:`pyproject.toml` 解析。若要 **运行测试、flake8、black** 等，还需安装开发依赖：推荐使用 `Poetry <https://python-poetry.org/>`_ 执行

.. code-block:: bash

   poetry install

或根据 :file:`pyproject.toml` 里 ``[tool.poetry.group.dev.dependencies]`` 自行用 pip 安装对应包。其中 **pytest-memray** 仅在非 Windows 平台作为可选依赖（用于性能相关测试）。

构建本 Sphinx 文档时，Read the Docs 使用 :file:`requirements/requirements-doc.txt` 列出文档构建依赖（Sphinx、sphinx-rtd-theme 等），站点配置见 :file:`.readthedocs.yaml`。
