

function initialize() {
    var mapOptions = {
      center: { lat: 42.364506, lng: -71.038887},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    /*for (i = 0; i < listOfSites.cities.length; i++) { // Create LatLng object for each site
        cs_latlng.push(new google.maps.LatLng(listOfSites.cities[i].lat, 
            listOfSites.cities[i].lng));
        cs_marker.push(new google.maps.Marker({
                        position: cs_latlng[i],
                        map: map,
                        title: listOfSites.cities[i].cname}));
    }*/

}

function mapLoad(){
    google.maps.event.addDomListener(window, 'load', initialize);
}