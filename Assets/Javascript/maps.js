$(document).ready(function(){
  
    var map;
    var marker;
    
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
  
      map.panTo(position);
      map.setZoom(15);
      //Show the map after we got a random result
      document.getElementById("map").style.display = "block";
      
      
    };
  
    function initMap(){
      // Map options
      var options = {
        scaleControl: true,
        zoom:6,
        center:{lat:25.7617, lng:-80.1918},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      //New map
      map = new google.maps.Map(document.getElementById("map"), options);
      
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
  