var listOfSites = {
  "cities": [
    {
      "cname": "Arlington",
      "lat": "42.4153",
      "lng": "-71.1569",
      "monday": "2",
      "tuesday": "3"
    },
    {
      "cname": "Boston",
      "lat": "42.3581",
      "lng": "-71.0636",
      "monday": "0",
      "tuesday": "3"
    },
    {
      "cname": "Bourne",
      "lat": "41.7411",
      "lng": "-70.5994",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Braintree",
      "lat": "42.2060",
      "lng": "-71.0050",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Brockton",
      "lat": "42.0833",
      "lng": "-71.0189",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Brookline",
      "lat": "42.3317",
      "lng": "-71.1217",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Charlton",
      "lat": "42.1341",
      "lng": "-71.9690",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Danvers",
      "lat": "42.5750",
      "lng": "-70.9306",
      "monday": "1",
      "tuesday": "1"
    },
    {
      "cname": "Dedham",
      "lat": "42.2417",
      "lng": "-71.1667",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Derry, NH",
      "lat": "42.8806",
      "lng": "-71.3272",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Framingham",
      "lat": "42.2792",
      "lng": "-71.4167",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Holbrook",
      "lat": "42.1550",
      "lng": "-71.0092",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Ipswich",
      "lat": "42.6792",
      "lng": "-70.8417",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Lakeville",
      "lat": "41.8458",
      "lng": "-70.9500",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Manchester",
      "lat": "42.5778",
      "lng": "-70.7694",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Marblehead",
      "lat": "42.5000",
      "lng": "-70.8583",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Medford",
      "lat": "42.4183",
      "lng": "-71.1067",
      "monday": "1",
      "tuesday": "1"
    },
    {
      "cname": "Needham",
      "lat": "42.2833",
      "lng": "-71.2333",
      "monday": "1",
      "tuesday": "2"
    },
    {
      "cname": "North Falmouth",
      "lat": "41.6447",
      "lng": "-70.6306",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Pembroke",
      "lat": "42.0667",
      "lng": "-70.8167",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Randolph",
      "lat": "42.1625",
      "lng": "-71.0417",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "South Hamilton",
      "lat": "42.6197",
      "lng": "-70.8548",
      "monday": "0",
      "tuesday": "1"
    },
    {
      "cname": "Swampscott",
      "lat": "42.4708",
      "lng": "-70.9181",
      "monday": "1",
      "tuesday": "1"
    },
    {
      "cname": "Tewksbury",
      "lat": "42.6106",
      "lng": "-71.2347",
      "monday": "1",
      "tuesday": "1"
    },
    {
      "cname": "Walpole",
      "lat": "42.1417",
      "lng": "-71.2500",
      "monday": "2",
      "tuesday": "0"
    },
    {
      "cname": "Wareham",
      "lat": "41.7625",
      "lng": "-70.7222",
      "monday": "1",
      "tuesday": "0"
    },
    {
      "cname": "Wellesley",
      "lat": "42.2964",
      "lng": "-71.2931",
      "monday": "1",
      "tuesday": "3"
    }
  ]
};
var cs_latlng = [];
var cs_marker = [];
var cs_contentString = [];
var cs_infowindow = [];

function initialize() {
    var mapOptions = {
      center: { lat: 42.364506, lng: -71.038887},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    for (i = 0; i < listOfSites.cities.length; i++) { // Create LatLng object for each site
        cs_latlng.push(new google.maps.LatLng(listOfSites.cities[i].lat, 
            listOfSites.cities[i].lng));

        cs_contentString.push(listOfSites.cities[i].cname);
        cs_infowindow.push(new google.maps.InfoWindow({
            content: cs_contentString[i] }));
        cs_marker.push(new google.maps.Marker({
                        position: cs_latlng[i],
                        map: map,
                        title: listOfSites.cities[i].cname}));
        google.maps.event.addListener(cs_marker[i], 'click', function() {
            map.setCenter(cs_marker[i].getPosition());
            cs_infowindow[i].open(map,cs_marker[i]);
            });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);