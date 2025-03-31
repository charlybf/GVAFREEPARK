var wms_layers = [];


        var lyr_googlestreet_0 = new ol.layer.Tile({
            'title': 'google street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_OTC_STATIONNEMENT_V_PUBLIQUE_1 = new ol.format.GeoJSON();
var features_OTC_STATIONNEMENT_V_PUBLIQUE_1 = format_OTC_STATIONNEMENT_V_PUBLIQUE_1.readFeatures(json_OTC_STATIONNEMENT_V_PUBLIQUE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTC_STATIONNEMENT_V_PUBLIQUE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTC_STATIONNEMENT_V_PUBLIQUE_1.addFeatures(features_OTC_STATIONNEMENT_V_PUBLIQUE_1);
var lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTC_STATIONNEMENT_V_PUBLIQUE_1, 
                style: style_OTC_STATIONNEMENT_V_PUBLIQUE_1,
                popuplayertitle: 'OTC_STATIONNEMENT_V_PUBLIQUE',
                interactive: true,
    title: 'OTC_STATIONNEMENT_V_PUBLIQUE<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_0.png" /> <br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_1.png" /> Gratuit 120 min<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_2.png" /> Gratuit 15 heures<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_3.png" /> Gratuit 180 min<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_4.png" /> Gratuit 240 min<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_5.png" /> Gratuit 30 min<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_6.png" /> Gratuit 60 min<br />\
    <img src="styles/legend/OTC_STATIONNEMENT_V_PUBLIQUE_1_7.png" /> Gratuit illimité<br />' });

lyr_googlestreet_0.setVisible(true);lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1.setVisible(true);
var layersList = [lyr_googlestreet_0,lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1];
lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1.set('fieldAliases', {'objectid': 'OBJECTID', 'nom_rues': 'NOM_RUES', 'de': 'DE', 'a': 'A', 'type_stationnement': 'TYPE_STATIONNEMENT', 'nombre_places': 'NOMBRE_PLACES', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', });
lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1.set('fieldImages', {'objectid': 'TextEdit', 'nom_rues': 'TextEdit', 'de': 'TextEdit', 'a': 'TextEdit', 'type_stationnement': 'TextEdit', 'nombre_places': 'TextEdit', 'globalid': 'TextEdit', 'SHAPE__Length': 'TextEdit', });
lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1.set('fieldLabels', {'objectid': 'no label', 'nom_rues': 'no label', 'de': 'no label', 'a': 'no label', 'type_stationnement': 'no label', 'nombre_places': 'no label', 'globalid': 'no label', 'SHAPE__Length': 'no label', });
lyr_OTC_STATIONNEMENT_V_PUBLIQUE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});