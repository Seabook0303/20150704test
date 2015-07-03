var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('http://seabook0303.github.io/20150704test/cesium-starter-app-master/Source/20150704KML.kml'));

viewer.dataSources.add(Cesium.CzmlDataSource.load('http://seabook0303.github.io/20150704test/cesium-starter-app-master/Source/okinawatimes_shogen.czml'));