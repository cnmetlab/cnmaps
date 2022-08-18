安装
=====
安装cnmaps建议使用Python的解释器在3.8版本及以上。

使用conda安装
--------------
最简单的方法是使用conda安装： ``$ conda install -c conda-forge cnmaps``


使用pip安装
-------------
若要使用pip安装，则需要手动安装一些依赖：

* cartopy: ``$ conda install -c conda-forge "cartopy>=0.20.0"``
* fiona: ``$ conda install -c conda-forge "fiona>=1.8.21"``

在完成上述依赖的安装以后，你可以使用pip来安装cnmaps： ``$ pip install -U cnmaps``
