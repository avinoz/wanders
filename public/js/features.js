// require('dotenv').load();
// L.mapbox.accessToken = process.env.MAPBOX_TOKEN


L.mapbox.accessToken = 'pk.eyJ1IjoiYXZpbm96IiwiYSI6ImNpZnVvcmV1YzIzcWx1cGtxZ2Z5cWlrMTYifQ.VB-HMZg5gUGTydcXDGvgOw';
// Create a map in the div #map
var map = L.mapbox.map('map', 'avinoz.o11688nh');


// #################
// ## MARKER LIST ##
// #################

var markerList = document.getElementById('marker-list');
var location_list = []; /// AVIO

map.featureLayer.on('ready', function(e) {
  map.featureLayer.eachLayer(function(layer) {
    var item = markerList.appendChild(document.createElement('li'));

    var title = layer.toGeoJSON().properties.title
    var link = $('<a>').attr('href', "#" + title.replace(" ", "_"))[0];
    link.innerHTML = title;
    $(item).append(link);
    location_list.push(item.innerHTML); // AVIO

    // item.onClick = function(e) {
    $(item).click(function(e) {

      e.preventDefault();
      var selected_title = title.replace(" ", "_")
      var curr_a = $('a[name='+selected_title+']').children('img')
      var next_pos = curr_a.position().top
      // console.log(curr_a)
      // console.log(next_pos)

      var curr_location = $("#image_container").scrollTop()
      console.log(curr_location)
      $("#image_container").animate({scrollTop: next_pos+curr_location});

      map.setView(layer.getLatLng(), 16);
      layer.openPopup();
    });
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
