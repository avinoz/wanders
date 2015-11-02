
L.mapbox.accessToken = 'pk.eyJ1IjoiYXZpbm96IiwiYSI6ImNpZnVvcmV1YzIzcWx1cGtxZ2Z5cWlrMTYifQ.VB-HMZg5gUGTydcXDGvgOw';
// Create a map in the div #map
var map = L.mapbox.map('map', 'avinoz.o11688nh');


// #################
// ## MARKER LIST ##
// #################

var markerList = document.getElementById('marker-list');

map.featureLayer.on('ready', function(e) {
  map.featureLayer.eachLayer(function(layer) {
    var item = markerList.appendChild(document.createElement('li'));

    item.innerHTML = layer.toGeoJSON().properties.title;
    console.log(item.innerHTML)

    item.onclick = function() {
      map.setView(layer.getLatLng(), 16);
      layer.openPopup();
    };
  });
});


// #################
// ## GEOLOCATION ##
// #################

var myLayer = L.mapbox.featureLayer().addTo(map);

if (!navigator.geolocation) {
    geolocate.innerHTML = 'Geolocation is not available';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate();
    };
}

// Once we've got a position, zoom and center the map
// on it, and add a single marker.
map.on('locationfound', function(e) {
  map.fitBounds(e.bounds);

  myLayer.setGeoJSON({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [e.latlng.lng, e.latlng.lat]
    },
    properties: {
        'title': 'Found you!',
        'marker-color': '#FFA500',
        // 'marker-symbol': 'star'
    }
  });

    // And hide the geolocation button
  geolocate.parentNode.removeChild(geolocate);
});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = 'Position could not be found';
});
