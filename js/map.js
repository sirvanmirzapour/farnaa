 //----map
 var mapOptions = {
     center: [35.7001, 51.3385],
     zoom: 15
 }

 var map = new L.map('map', mapOptions);
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

 map.addLayer(layer);