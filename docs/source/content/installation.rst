安装
=====

**Python 版本**：需要 **Python 3.9 及以上**。项目根目录 :file:`pyproject.toml` 中 ``python`` 字段为 ``>=3.9`` （当前不对 Python 3 的上限做额外限制；详见 `PyPI <https://pypi.org/project/cnmaps/>`_）。

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

AI Skill 安装
---------------

``cnmaps`` 支持安装 AI Skill 描述，可以让 AI 更快、更准确地理解 ``cnmaps`` 的使用方法、常见代码套路和能力边界。对于习惯让 AI 协助写科研绘图脚本、做边界感知的数据处理、或采用 vibe coding 工作流的用户来说，安装这份 Skill 后，AI 可以具备流畅使用 ``cnmaps`` 各种函数功能的能力。

.. note::

   AI Skill 能力仅支持 ``2.1.x`` 及以上版本。

安装 ``cnmaps`` 后，可以把这份 Skill 安装到当前项目目录，生成不同助手的本地指引：

.. code-block:: bash

   cnmaps install-skill codex --mode local
   cnmaps install-skill cursor --mode local
   cnmaps install-skill claudecode --mode local

也可以安装到当前用户的全局目录：

.. code-block:: bash

   cnmaps install-skill codex --mode global
   cnmaps install-skill cursor --mode global
   cnmaps install-skill claudecode --mode global

.. note::

   ``--mode local`` 会安装到当前项目目录，只会在该安装目录下生效；如果切换到其他项目目录，需要在新的目录里重新安装。``--mode global`` 会安装到用户主目录下对应助手的全局路径，通常是 ``$HOME/.claude``、``$HOME/.cursor``、``$HOME/.agents`` 等目录，因此跨项目目录也可以生效。``cnmaps`` 版本更新后，尤其是 Skill 定义本身有更新时，通常也推荐追加 ``--force`` 重新安装一遍，使本地 Skill 描述与当前版本保持同步。

.. tip::

   目前 Cursor 兼容 Claude Code 的 Skill 定义格式，所以通常来说，如果你已经按 ``claudecode`` 模式安装了 Skill，Cursor 也往往可以自动识别这一份定义。
