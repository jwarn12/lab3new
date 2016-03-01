var map = L.map('map').setView([35, -100], 5);

var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
var precipitation = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

var sst = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer/WMSServer", {
    layers: '5',
    format: 'image/png',
    transparent: true,
	opacity: 0.5,
    attribution: "NOAA"
}).addTo(map);	 

var maxtemp = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
	opacity: 0.5,
    attribution: "NOAA"
}).addTo(map);


//create an object with layers for each basemap
var baselayers = {};

var overlays = {
	"Precipitation": precipitation,
	"Sea Surface Temperature": sst,
	"Max Daily Temperature": maxtemp
};

L.control.layers(baselayers, overlays).addTo(map);
