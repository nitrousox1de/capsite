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
      "cname": "Beverly",
      "lat": "42.5580",
      "lng": "-70.8800",
      "monday": "0",
      "tuesday": "1"
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
      "cname": "Burlington",
      "lat": "42.5047",
      "lng": "-71.1961",
      "monday": "2",
      "tuesday": "1"
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
      "cname": "Middleton",
      "lat": "42.5950",
      "lng": "-71.0167",
      "monday": "1",
      "tuesday": "0"
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
      "cname": "Somerville",
      "lat": "42.3875",
      "lng": "-71.1000",
      "monday": "1",
      "tuesday": "0"
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
var cs_latlng_1 = [];
var cs_latlng_2 = [];
var cs_marker = [];
var cs_contentString = [];
var cs_infowindow = [];
var map = null;
var mapOptions = null;
var dms = null;
var home_marker = null;

function qsort(a) {
    if (a.length == 0) return [];
 
    var left = [], right = [], pivot = a[0];
 
    for (var i = 1; i < a.length; i++) {
        a[i].duration < pivot.duration ? left.push(a[i]) : right.push(a[i]);
    }
    return qsort(left).concat(pivot, qsort(right));
}

function map_recenter(latlng,offsetx,offsety) {
    var point1 = map.getProjection().fromLatLngToPoint(
        (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
    );
    var point2 = new google.maps.Point(
        ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
        ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
    );  
    map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
        point1.x - point2.x,
        point1.y + point2.y
    )));
}

function setEventListener(map, marker, infowindow){
    google.maps.event.addListener(marker, 'click', function() {
    map_recenter(marker.getPosition(),-200, 0);
    for (i = 0; i < cs_infowindow.length; i++){
      cs_infowindow[i].close();
    }
    infowindow.open(map,marker);
    });
}

function initialize() {
    mapOptions = {
      center: { lat: 42.304506, lng: -69.9500},
      zoom: 8
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    dms = new google.maps.DistanceMatrixService();
    for (i = 0; i < listOfSites.cities.length; i++) { // Create LatLng object for each site
        cs_latlng.push(new google.maps.LatLng(listOfSites.cities[i].lat, 
            listOfSites.cities[i].lng));

        cs_contentString.push("<h3>" + listOfSites.cities[i].cname + "</h2>\n" + 
                              "<p> Monday slots: " + listOfSites.cities[i].monday + "<br />" +
                              "Tuesday slots: " + listOfSites.cities[i].tuesday + "</p>");
        cs_infowindow.push(new google.maps.InfoWindow({
            content: cs_contentString[i] }));
        cs_marker.push(new google.maps.Marker({
                        position: cs_latlng[i],
                        map: map,
                        title: listOfSites.cities[i].cname}));
        setEventListener(map, cs_marker[i], cs_infowindow[i]);
    }
    cs_latlng_1 = cs_latlng.slice(0,25);
    cs_latlng_2 = cs_latlng.slice(25,cs_latlng.length);

    geocoder = new google.maps.Geocoder();
}
var dmrOptions = null;
var dmr = null;
var responses = null;
var status = null;
var status2 = null;

var order = [];
var tmp = null;
var tableString = null;

var mapclick = false;

var geocoder = null;

function process(e){
    var home = [$('#address').val()];
    geocoder.geocode( { address: home[0]}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var image = {
          url: 'http://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png',
          // This marker is 20 pixels wide by 32 pixels tall.
          scaledSize: new google.maps.Size(24, 24),
        };
        if (home_marker !== null) {
          home_marker.setMap(null);
        }
        home_marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: image
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        return;
      }
    });
    dmrOptions = {
      destinations: cs_latlng_1,
      origins: home,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    dms.getDistanceMatrix(dmrOptions, function(DistanceMatrixResponse, DistanceMatrixStatus){ 
      responses = DistanceMatrixResponse.rows[0].elements;
      status = DistanceMatrixStatus;
      dmrOptions = {
        destinations: cs_latlng_2,
        origins: home,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      dms.getDistanceMatrix(dmrOptions, function(DistanceMatrixResponse, DistanceMatrixStatus){
        responses = responses.concat(DistanceMatrixResponse.rows[0].elements);
        status2 = DistanceMatrixStatus;
        order = [];
        for (j = 0; j < cs_latlng.length; j++){
          tmp = {
            city: listOfSites.cities[j].cname,
            distance_text: responses[j].distance.text,
            distance: responses[j].distance.value,
            duration_text: responses[j].duration.text,
            duration: responses[j].duration.value
          };
          if ($('#excludeMonday').prop('checked') && $('#excludeTuesday').prop('checked')){
            // Do nothing
          } else if ( $('#excludeMonday').prop('checked') && listOfSites.cities[j].tuesday == "0") {
            // Do nothing
          } else if ( $('#excludeTuesday').prop('checked') && listOfSites.cities[j].monday == "0") {
            // Do nothing
          } else {
            order.push(tmp);
          }
        }
        order = qsort(order);
        tableString = '';
        // Create Table String
        tableString = '<table id="myTable" class="table table-striped"><thead><tr><th>Site</th><th>Duration</th><th>Distance</th></tr></thead><tbody>';
        for(k = 0; k < order.length; k++){
          tableString = tableString + '<tr class="myRow" cityname=' + order[k].city + '><td>' + order[k].city + '</td><td>' + order[k].duration_text + '</td><td>' + order[k].distance_text + '</td></tr>';
        }
        tableString = tableString + '</tbody></table>';
        // Insert new element
        $('#myTable').remove()
        $('#table-area').append(tableString);
      });
    });
}

$(document).ready(function(){
  $('#find').on('click', function (e) {
    e.preventDefault();
    process(e);
  });
  $('form input').keydown(function(e){
    if(e.keyCode == 13) {
      e.preventDefault();
      process(e);
    }
  });
  $('#excludeMonday').change(function(){
    if ($('#excludeMonday').prop('checked') && $('#excludeTuesday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(false);
      }
    } else if ($('#excludeMonday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        if (listOfSites.cities[i].tuesday == "0"){
          cs_marker[i].setVisible(false);
        }
      }
    } else if (!$('#excludeMonday').prop('checked') && $('#excludeTuesday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(true);
        if (listOfSites.cities[i].monday == "0"){
          cs_marker[i].setVisible(false);
        }
      }
    } else {
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(true);
      }
    }
  });
  $('#excludeTuesday').change(function(){
    if ($('#excludeTuesday').prop('checked') && $('#excludeMonday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(false);
      }
    } else if ($('#excludeTuesday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        if (listOfSites.cities[i].monday == "0"){
          cs_marker[i].setVisible(false);
        }
      }
    } else if (!$('#excludeTuesday').prop('checked') && $('#excludeMonday').prop('checked')){
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(true);
        if (listOfSites.cities[i].tuesday == "0"){
          cs_marker[i].setVisible(false);
        }
      }
    } else {
      for (i = 0; i < cs_marker.length; i++){
        cs_marker[i].setVisible(true);
      }
    }
  });
  $(document).on("mouseenter", ".myRow", function() {
    mapclick = false;
    var cname = "";
    for(i = 0; i < listOfSites.cities.length; i++){
      if (listOfSites.cities[i].cname.split(" ").length > 1){
        cname = listOfSites.cities[i].cname.substr(0, listOfSites.cities[i].cname.indexOf(" "));
      } else {
        cname = listOfSites.cities[i].cname
      }
      if (cname != $(this).attr('cityname')){
        cs_marker[i].setVisible(false);
      }
    }
  });
  $(document).on("mouseleave", ".myRow", function() {
    if(!mapclick){
      for(i = 0; i < listOfSites.cities.length; i++){
        if ($('#excludeMonday').prop('checked') && $('#excludeTuesday').prop('checked')){
          for (i = 0; i < cs_marker.length; i++){
            cs_marker[i].setVisible(false);
          }
        } else if (!$('#excludeMonday').prop('checked') && $('#excludeTuesday').prop('checked')) {
          if (listOfSites.cities[i].monday != "0"){
            cs_marker[i].setVisible(true);
          }
        } else if (!$('#excludeTuesday').prop('checked') && $('#excludeMonday').prop('checked')) {
          if (listOfSites.cities[i].tuesday != "0"){
            cs_marker[i].setVisible(true);
          }
        } else {
          cs_marker[i].setVisible(true);
        }
      }
    }
  });
  $(document).on("click", ".myRow", function() {
    mapclick = true;
    for(i = 0; i < listOfSites.cities.length; i++){
      if (listOfSites.cities[i].cname.split(" ").length > 1){
        cname = listOfSites.cities[i].cname.substr(0, listOfSites.cities[i].cname.indexOf(" "));
      } else {
        cname = listOfSites.cities[i].cname
      }
      if (cname != $(this).attr('cityname')){
        cs_marker[i].setVisible(false);
      }
    }
  });
});

google.maps.event.addDomListener(window, 'load', initialize);
