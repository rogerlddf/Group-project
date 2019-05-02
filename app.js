$(document).ready(function(){
  var map;
  var coordinates = {lat:25.7617, lng:-80.1918};
  var marker;
function generateRandomLatLng()
{
    var num = Math.random()*180;
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0)
    {
        num = num * -1;
    }
    return num;
}
  function initMap(){
    // Map options
    var lat  = (Math.random()*180-90).toFixed(8);
    var long = (Math.random()*360-180).toFixed(8);
    console.log("latitude: " + lat);
    console.log("longitudd:" + long);
    var options = {
      scaleControl: true,
      zoom:6,
      center:new google.maps.LatLng(lat,long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), options);
    marker = new google.maps.Marker({
      map: map,
      position: map.getCenter()
  });
  }
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyBDrqqmdBN1k9LVmozItBeMjne5I5h8edc&callback=initMap",
        type:"GET",
        

    }).then(function(response){
        console.log(response);
      
      
      initMap();
    })
    $("#get").on("click", function(){
      coordinates = {lat:34.0522, lng:-118.2437};
      initMap();
    })
});