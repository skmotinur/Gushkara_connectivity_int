var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_GUSHKARA_1 = new ol.format.GeoJSON();
var features_GUSHKARA_1 = format_GUSHKARA_1.readFeatures(json_GUSHKARA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUSHKARA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUSHKARA_1.addFeatures(features_GUSHKARA_1);
var lyr_GUSHKARA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUSHKARA_1, 
                style: style_GUSHKARA_1,
                popuplayertitle: 'GUSHKARA',
                interactive: true,
    title: 'GUSHKARA<br />\
    <img src="styles/legend/GUSHKARA_1_0.png" /> 0.45 - 0.689<br />\
    <img src="styles/legend/GUSHKARA_1_1.png" /> 0.689 - 0.77<br />\
    <img src="styles/legend/GUSHKARA_1_2.png" /> 0.77 - 0.869<br />\
    <img src="styles/legend/GUSHKARA_1_3.png" /> 0.869 - 0.92<br />\
    <img src="styles/legend/GUSHKARA_1_4.png" /> 0.92 - 1.103<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_GUSHKARA_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GUSHKARA_1];
lyr_GUSHKARA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'WARD_NO': 'Word No.:', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WARD_AREA': 'WARD_AREA', 'Integrated': 'Integrated Connectivity:', 'Pi': 'Pi', 'network_in': 'network_in', 'DI': 'DI', 'FD': 'FD', 'Road_den': 'Road_den', });
lyr_GUSHKARA_1.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'WARD_NO': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'WARD_AREA': 'Hidden', 'Integrated': 'TextEdit', 'Pi': 'Hidden', 'network_in': 'Hidden', 'DI': 'Hidden', 'FD': 'Hidden', 'Road_den': 'Hidden', });
lyr_GUSHKARA_1.set('fieldLabels', {'WARD_NO': 'inline label - always visible', 'Integrated': 'header label - always visible', });
lyr_GUSHKARA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});