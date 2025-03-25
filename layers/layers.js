var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_esri_geocoded_1 = new ol.format.GeoJSON();
var features_esri_geocoded_1 = format_esri_geocoded_1.readFeatures(json_esri_geocoded_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_esri_geocoded_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_esri_geocoded_1.addFeatures(features_esri_geocoded_1);
var lyr_esri_geocoded_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_esri_geocoded_1, 
                style: style_esri_geocoded_1,
                popuplayertitle: 'esri_geocoded',
                interactive: true,
                title: '<img src="styles/legend/esri_geocoded_1.png" /> esri_geocoded'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_esri_geocoded_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_esri_geocoded_1];
lyr_esri_geocoded_1.set('fieldAliases', {'address_source': 'address_source', 'address_geocoded': 'address_geocoded', 'lon': 'lon', 'lat': 'lat', });
lyr_esri_geocoded_1.set('fieldImages', {'address_source': '', 'address_geocoded': '', 'lon': '', 'lat': '', });
lyr_esri_geocoded_1.set('fieldLabels', {'address_source': 'inline label - visible with data', 'address_geocoded': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_esri_geocoded_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});