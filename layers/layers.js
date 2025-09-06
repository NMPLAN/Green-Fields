var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NMOAsTOPAreas_1 = new ol.format.GeoJSON();
var features_NMOAsTOPAreas_1 = format_NMOAsTOPAreas_1.readFeatures(json_NMOAsTOPAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMOAsTOPAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMOAsTOPAreas_1.addFeatures(features_NMOAsTOPAreas_1);
var lyr_NMOAsTOPAreas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMOAsTOPAreas_1, 
                style: style_NMOAsTOPAreas_1,
                popuplayertitle: 'NM OAs TOP-Areas',
                interactive: true,
                title: '<img src="styles/legend/NMOAsTOPAreas_1.png" /> NM OAs TOP-Areas'
            });
var format_NME04007930_2 = new ol.format.GeoJSON();
var features_NME04007930_2 = format_NME04007930_2.readFeatures(json_NME04007930_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NME04007930_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NME04007930_2.addFeatures(features_NME04007930_2);
var lyr_NME04007930_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NME04007930_2, 
                style: style_NME04007930_2,
                popuplayertitle: 'NM E04007930',
                interactive: false,
                title: '<img src="styles/legend/NME04007930_2.png" /> NM E04007930'
            });
var group_BOUNDARIES = new ol.layer.Group({
                                layers: [lyr_NME04007930_2,],
                                fold: 'open',
                                title: 'BOUNDARIES'});
var group_TOPOGRAPHY = new ol.layer.Group({
                                layers: [lyr_NMOAsTOPAreas_1,],
                                fold: 'open',
                                title: 'TOPOGRAPHY'});
var group_BASEMAPS = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'close',
                                title: 'BASE MAPS'});

lyr_OpenStreetMap_0.setVisible(true);lyr_NMOAsTOPAreas_1.setVisible(true);lyr_NME04007930_2.setVisible(true);
var layersList = [group_BASEMAPS,group_TOPOGRAPHY,group_BOUNDARIES];
lyr_NMOAsTOPAreas_1.set('fieldAliases', {'gml_id': 'gml_id', 'toid': 'toid', 'feature_code': 'feature_code', 'version': 'version', 'version_date': 'version_date', 'theme': 'theme', 'calculated_area_value': 'calculated_area_value', 'change_date': 'change_date', 'reason_for_change': 'reason_for_change', 'descriptive_group': 'descriptive_group', 'descriptive_term': 'descriptive_term', 'make': 'make', 'physical_level': 'physical_level', 'physical_presence': 'physical_presence', 'style_description': 'style_description', 'style_code': 'style_code', 'AREA': 'AREA', });
lyr_NME04007930_2.set('fieldAliases', {'gml_id': 'gml_id', 'fid': 'fid', 'Name': 'Name', 'Area_Code': 'Area_Code', 'Area_Descr': 'Area_Descr', 'File_Name': 'File_Name', 'Feature_Se': 'Feature_Se', 'Collection': 'Collection', 'Global_Pol': 'Global_Pol', 'Admin_Unit': 'Admin_Unit', 'Census_Cod': 'Census_Cod', 'Hectares': 'Hectares', 'Non_Inland': 'Non_Inland', 'Area_Type_': 'Area_Type_', 'Area_Typ_1': 'Area_Typ_1', 'Non_Area_T': 'Non_Area_T', 'Non_Area_1': 'Non_Area_1', });
lyr_NMOAsTOPAreas_1.set('fieldImages', {'gml_id': 'TextEdit', 'toid': 'TextEdit', 'feature_code': 'Range', 'version': 'Range', 'version_date': 'TextEdit', 'theme': 'TextEdit', 'calculated_area_value': 'TextEdit', 'change_date': 'TextEdit', 'reason_for_change': 'TextEdit', 'descriptive_group': 'TextEdit', 'descriptive_term': 'TextEdit', 'make': 'TextEdit', 'physical_level': 'Range', 'physical_presence': 'TextEdit', 'style_description': 'TextEdit', 'style_code': 'Range', 'AREA': 'TextEdit', });
lyr_NME04007930_2.set('fieldImages', {'gml_id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_Code': 'TextEdit', 'Area_Descr': 'TextEdit', 'File_Name': 'TextEdit', 'Feature_Se': 'TextEdit', 'Collection': 'TextEdit', 'Global_Pol': 'TextEdit', 'Admin_Unit': 'TextEdit', 'Census_Cod': 'TextEdit', 'Hectares': 'TextEdit', 'Non_Inland': 'TextEdit', 'Area_Type_': 'TextEdit', 'Area_Typ_1': 'TextEdit', 'Non_Area_T': 'TextEdit', 'Non_Area_1': 'TextEdit', });
lyr_NMOAsTOPAreas_1.set('fieldLabels', {'gml_id': 'no label', 'toid': 'no label', 'feature_code': 'no label', 'version': 'no label', 'version_date': 'no label', 'theme': 'no label', 'calculated_area_value': 'no label', 'change_date': 'no label', 'reason_for_change': 'no label', 'descriptive_group': 'no label', 'descriptive_term': 'no label', 'make': 'no label', 'physical_level': 'no label', 'physical_presence': 'no label', 'style_description': 'no label', 'style_code': 'no label', 'AREA': 'no label', });
lyr_NME04007930_2.set('fieldLabels', {'gml_id': 'no label', 'fid': 'no label', 'Name': 'no label', 'Area_Code': 'no label', 'Area_Descr': 'no label', 'File_Name': 'no label', 'Feature_Se': 'no label', 'Collection': 'no label', 'Global_Pol': 'no label', 'Admin_Unit': 'no label', 'Census_Cod': 'no label', 'Hectares': 'no label', 'Non_Inland': 'no label', 'Area_Type_': 'no label', 'Area_Typ_1': 'no label', 'Non_Area_T': 'no label', 'Non_Area_1': 'no label', });
lyr_NME04007930_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});