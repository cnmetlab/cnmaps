########
常见问题
########

导出 ``EPS`` / ``PS`` 时，按复杂边界裁剪后的结果打不开或转换失败
======================================================================

相关 issue：`#125 <https://github.com/cnmetlab/cnmaps/issues/125>`_

这类问题通常出现在下面这一类工作流里：

1. 先用 ``contourf`` 之类的对象绘制较大范围的数据场。
2. 再用 ``clip_contours_by_map`` 按中国边界或其他复杂边界做裁剪。
3. 最后导出为 ``EPS`` / ``PS`` 文件。

在这种情况下，``PNG``、``JPG`` 之类的栅格格式往往仍然可以正常导出，但 ``EPS`` / ``PS`` 可能会生成“看似导出了文件、实际上却无法被正常打开或转换”的结果。常见表现包括：

- ``GSview`` 打不开文件。
- ``Ghostscript`` 转换时报错。
- 在线转换工具无法正常解析该文件。

这通常不是因为 ``savefig`` 没有执行成功，而是因为生成出来的 ``EPS`` / ``PS`` 文件对于相关工具链来说已经过于复杂，尤其是裁剪路径包含了大量海岸线、岛屿和边界细节时，更容易触发这类问题。

为什么会这样？
----------------

``clip_contours_by_map`` 的本质，是把地图边界转换成裁剪路径，再交给 Matplotlib 的绘图后端处理。对于 ``EPS`` / ``PS`` 这种基于 PostScript 的输出格式，过于复杂的裁剪路径可能会使导出的文件难以被后续工具正确解析。

因此，你会看到这样一种现象：

- 同一段绘图代码，输出 ``PNG`` / ``JPG`` 没问题。
- 但输出 ``EPS`` / ``PS`` 时，如果裁剪范围更大、边界更复杂，就可能失败。

推荐做法是什么？
----------------

如果你的目标是导出 ``EPS`` / ``PS``，并且使用了按行政边界裁剪的工作流，推荐优先尝试在查询边界时开启 ``simplify=True``，先对边界几何做适度简化，再用于裁剪。

示例：

.. code:: python

    import cartopy.crs as ccrs
    import matplotlib.pyplot as plt
    from cnmaps import get_adm_maps, clip_contours_by_map, draw_map
    from cnmaps.sample import load_temp

    lons, lats, data = load_temp()

    fig = plt.figure(figsize=(6, 5), dpi=300)
    ax = fig.add_subplot(111, projection=ccrs.PlateCarree())

    china = get_adm_maps(
        country='中国',
        level='国',
        record='first',
        only_polygon=True,
        simplify=True,
    )

    cs = ax.contourf(lons, lats, data, transform=ccrs.PlateCarree())
    clip_contours_by_map(cs, china, ax=ax)
    draw_map(china, ax=ax, color='black', linewidth=0.8)
    ax.set_extent([70, 140, 20, 55], crs=ccrs.PlateCarree())

    fig.savefig('china-clipped.eps', bbox_inches='tight')

``simplify=True`` 的作用不是改变你的绘图流程，而是减少裁剪边界的几何复杂度，从而让 ``EPS`` / ``PS`` 导出更稳定。对于这类问题，简化后的结果通常在视觉上仍能保持一致，但导出的文件体积和复杂度会显著下降。

这是不是意味着 ``simplify=True`` 应该一直开启？
-------------------------------------------------

不一定。

``simplify=True`` 会对边界几何做简化，因此虽然大多数情况下肉眼效果差异不大，但它毕竟不是完全无损的。如果你的任务更重视边界细节本身，而不是 ``EPS`` / ``PS`` 导出的兼容性，可以继续使用默认的 ``simplify=False``。

比较稳妥的建议是：

- 正常查询、分析和常规绘图时，继续使用默认设置。
- 如果明确要导出 ``EPS`` / ``PS``，而且又使用了复杂边界裁剪，可以优先尝试 ``simplify=True``。
- 如果你不依赖 ``EPS`` / ``PS`` 工作流，也可以优先考虑 ``PNG``、``JPG``、``PDF``、``SVG`` 等格式。

如何判断导出的 ``EPS`` 文件是否“正确”？
----------------------------------------

这里的“正确”，通常不是指图面肉眼看起来差不多，而是指这个文件能够被常见工具链正常消费，例如：

- 能被 ``GSview`` 正常打开。
- 能被 ``Ghostscript`` 正常转换。
- 能被下游排版或图像处理软件正常读取。

如果 ``EPS`` 文件虽然生成了，但无法被这些工具正常打开或转换，那么通常就应视为输出结果不正确。
