from cnmaps import get_adm_maps

china = get_adm_maps(country="中国", level="国", record="first", only_polygon=True, wgs84=True)

china.to_file("./china.geojson")
china.to_file("./china.shp", engine="ESRI Shapefile")
