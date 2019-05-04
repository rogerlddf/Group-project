$(document).ready(function(){
  
    var map;
    var marker;
    var directionsService;
    var directionsDisplay;
    var trafficLayer;
    
    
    // Updating the map with the new coordinates and putting a marker in restaurant location
    window.updateMapCoordinates = function(coord) {
  
      var position = new google.maps.LatLng(coord.latitude, coord.longitude);
  
      if(!marker) {
        marker = new google.maps.Marker({
          map: map,
          position: position
        });
  
      } else {
        marker.setPosition(position);
      }
      
      var street = $("#user-street").val();
      var city = $("#user-city").val();
      var state = $("#user-state").val();
      var origin = street + ', ' + city + ', ' + state;
      calculateAndDisplayRoute(origin, position);
      map.panTo(position);
      map.setZoom(15);
      //Show the map after we got a random result
      document.getElementById("map").style.display = "block";
      
      
    };

    function calculateAndDisplayRoute(origin, target) {

      directionsService.route({
        origin: origin,
        destination: target,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if(status === 'OK')
          directionsDisplay.setDirections(response);
        else console.log('Error fetching directions', status);
      });

    }
  
    function initMap(){
      // Map options
      var options = {
        scaleControl: true,
        zoom:15,
        center:{lat:25.7617, lng:-80.1918},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      //New map
      map = new google.maps.Map(document.getElementById("map"), options);

      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer;
      trafficLayer = new google.maps.TrafficLayer;

      directionsDisplay.setMap(map);
      trafficLayer.setMap(map);

      console.log('Init map!');
      
    }
    
    $.ajax({
      url:"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyBDrqqmdBN1k9LVmozItBeMjne5I5h8edc&callback=initMap",
      type:"GET",
    }).then(function(response){
          // console.log(response);
      initMap();
    })
    //hiding map in the main page
    document.getElementById("map").style.display = "none";
  });