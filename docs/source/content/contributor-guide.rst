##############
贡献者指南
##############
开发一个开源项目，尤其是一个有活力、生命力和影响力的开源项目是一件相当困难的事情，对于cnmaps的开发，我深知一个人能力有限，所以非常欢迎各位Python和GIS爱好者能和我一起来参与这个开源项目的继续开发。

哪些人适合参与到cnmaps的开发中？
=================================

在回答这个问题之前，我们先来明确一个概念：什么人可以被称为“开源贡献者”？

在我看来，并不是只有撸代码、实现功能的人才算得上“开源贡献者”，那些为开源项目做测试、提交bug报告、补充文档以及提出新功能需求和参与讨论的人，都算是“开源贡献者”。或者换句话说，所有努力让开源项目变得更好的人，都是“开源贡献者”。

现在我们来回答哪些人适合参与到cnmaps的开发中的问题，我的答案是：

1. 对开源项目有热情且愿意付出时间与人合作一起让开源项目变得更好的人。
2. 会使用或愿意学习使用GitHub的Issue功能的人。
3. 会使用或愿意学习使用Git、Python的人。
4. 有能力且有意愿补充和完善文档的人。
5. 对代码质量有追求的人（有代码洁癖的人）。
6. 对开源项目的功能有自己想法并且愿意分享想法的人。
7. ...


如何参与到cnmaps的项目中来？
=================================
我大致将参与cnmaps项目的形式分为 **文档编写** 、 **测试** 、 **讨论** 、 **开发** 这四个部分。

文档编写
-----------
cnmaps 的文档（当前 Sphinx 工程）源码位于主仓库的 ``docs/`` 目录；`Read the Docs <https://readthedocs.org/>`_ 使用仓库根目录的 ``.readthedocs.yaml``，通过 ``requirements/requirements-doc.txt`` 安装 Sphinx 与主题后执行构建。若你想完善文档，请 fork 主仓库 `cnmetlab/cnmaps <https://github.com/cnmetlab/cnmaps>`_ ，本地可用 ``make html``（见 ``docs/Makefile``）预览，再向主仓库提交 Pull Request。

测试
-----------
以使用者的角度测试项目的各项功能；发现 bug 请到 `Issues <https://github.com/cnmetlab/cnmaps/issues>`_ 提交，并尽量附上可复现步骤或测试用例。你也可以在 ``tests/`` 中补充 `pytest <https://pytest.org/>`_ 用例。

当前主测试集为 ``tests/test_drawing.py``、``tests/test_geo.py``、``tests/test_map.py``、``tests/test_issues.py``；性能基准位于 ``tests/test_perf.py``。部分基准或耗时用例会通过 ``@pytest.mark.heavy`` 标记与日常单测区分，CI 默认使用 ``-m "not heavy"`` 运行主测试集。本地提交前建议至少执行一次 ``poetry run pytest --verbose -p no:warnings -m "not heavy" ./tests/test_drawing.py ./tests/test_geo.py ./tests/test_map.py ./tests/test_issues.py``。其中 **pytest-benchmark** 为开发依赖，**pytest-memray** 仅在非 Windows 平台安装。

代码风格方面，CI 使用 **flake8**（配置见 ``.flake8``；工作流中先跑 E9/F63/F7/F82 等严重规则，其余为告警）。``pyproject.toml`` 中还包含 **black** 等开发依赖，提交前可在项目根目录执行 ``poetry run flake8 .`` 做检查。

持续集成
-----------
主分支与 Pull Request 使用 **GitHub Actions**，主要包括：

* ``python-package.yml``：在 macOS / Ubuntu / Windows 上对 Python 3.9–3.12 执行 flake8，并运行主单元测试。工作流统一设置 ``MPLBACKEND=Agg``，以避免不同平台图形后端差异影响绘图测试。
* ``perf-test.yml``：在 Ubuntu、Python 3.9 上对 ``tests/test_perf.py`` 运行带 **pytest-benchmark** 与 **memray** 的测试，并将基准结果推送到 ``gh-pages``；随后对主测试文件运行 **pytest-cov** 并通过 Codecov 上传覆盖率（需仓库配置 ``CODECOV_TOKEN``）。依赖安装步骤带自动重试，以降低网络抖动导致的偶发失败。
* ``pypi-publish.yml``：在发布 Release 时向 PyPI 发布。

讨论
-----------
如果你对代码并不熟悉，或者对代码质量不自信，但是对项目的功能有自己的想法，也可以通过在 `Issues <https://github.com/cnmetlab/cnmaps/issues>`_ 中提出功能需求或参与讨论（GIS 认知、地图拓扑与数据源等同样欢迎）。

开发
-----------
如果是想参与到cnmaps的代码的开发，相对来说限制会多一些。首先你必须对代码质量有追求，在平时撸代码的时候会尽量以优雅地方式实现代码，具体来说可能要满足以下几条：

1. 了解 PEP 8 与常见的 Python 代码规范，并愿意遵守其大部分原则。
2. 在开发中会使用 flake8 等工具对代码做自动化检查（与仓库配置保持一致）。
3. 能够接受“测试驱动开发”（TDD）的工作方式，认同“质量优于速度”的理念。
4. 会写测试用例，会进行单元测试。
5. 乐于交流，愿意用最直接高效的方式交流，不要求所谓的空杯心态，但也不要过于傲慢。

目前cnmaps接受开发贡献的方式是fork + PR（Pull Request）+ 审查合并，但是在提交PR之前需要先有Issue议题来描述修改的动机和拟实现的功能及测试用例，所以正确的顺序是 打开议题 -> fork分支 -> 本地开发测试 -> 提交PR -> 审查合并 -> 关闭议题。
