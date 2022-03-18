var wms_layers = [];

var lyr_lycee_elargi_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_elargi_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_elargi_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Marche_matinaletracks_1 = new ol.format.GeoJSON();
var features_Marche_matinaletracks_1 = format_Marche_matinaletracks_1.readFeatures(json_Marche_matinaletracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinaletracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinaletracks_1.addFeatures(features_Marche_matinaletracks_1);
var lyr_Marche_matinaletracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinaletracks_1, 
                style: style_Marche_matinaletracks_1,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinaletracks_1.png" /> Marche_matinale, tracks'
            });
var format_Marche_matinaleroutes_2 = new ol.format.GeoJSON();
var features_Marche_matinaleroutes_2 = format_Marche_matinaleroutes_2.readFeatures(json_Marche_matinaleroutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinaleroutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinaleroutes_2.addFeatures(features_Marche_matinaleroutes_2);
var lyr_Marche_matinaleroutes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinaleroutes_2, 
                style: style_Marche_matinaleroutes_2,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinaleroutes_2.png" /> Marche_matinale, routes'
            });
var format_Marche_matinalewaypoints_3 = new ol.format.GeoJSON();
var features_Marche_matinalewaypoints_3 = format_Marche_matinalewaypoints_3.readFeatures(json_Marche_matinalewaypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinalewaypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinalewaypoints_3.addFeatures(features_Marche_matinalewaypoints_3);
var lyr_Marche_matinalewaypoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinalewaypoints_3, 
                style: style_Marche_matinalewaypoints_3,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinalewaypoints_3.png" /> Marche_matinale, waypoints'
            });

lyr_lycee_elargi_georef_0.setVisible(true);lyr_Marche_matinaletracks_1.setVisible(true);lyr_Marche_matinaleroutes_2.setVisible(true);lyr_Marche_matinalewaypoints_3.setVisible(true);
var layersList = [lyr_lycee_elargi_georef_0,lyr_Marche_matinaletracks_1,lyr_Marche_matinaleroutes_2,lyr_Marche_matinalewaypoints_3];
lyr_Marche_matinaletracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Marche_matinaleroutes_2.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Marche_matinalewaypoints_3.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Marche_matinaletracks_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Marche_matinaleroutes_2.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Marche_matinalewaypoints_3.set('fieldImages', {'name': 'TextEdit', 'elevation': 'TextEdit', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Marche_matinaletracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Marche_matinaleroutes_2.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Marche_matinalewaypoints_3.set('fieldLabels', {'name': 'inline label', 'elevation': 'inline label', 'comment': 'inline label', 'description': 'inline label', 'source': 'no label', 'url': 'no label', 'url name': 'inline label', });
lyr_Marche_matinalewaypoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});