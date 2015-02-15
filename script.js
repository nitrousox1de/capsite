function initialize() {
    var mapOptions = {
      center: { lat: 42.364506, lng: -71.038887},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function mapLoad(){
    google.maps.event.addDomListener(window, 'load', initialize);
}