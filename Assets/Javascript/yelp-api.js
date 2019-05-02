
var modal = document.getElementById('restaurant-display');
// Get the button that opens the modal
var btn = document.getElementById("submit-button");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#submit-button").on("click", function() {

 event.preventDefault();

    var zipCode =  $("#user-zipcode").val();

    var queryUrl =  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location='+zipCode+
    '&term=food&limit=20';

 

    console.log(zipCode);
    console.log(queryUrl);

   
  $.ajax({
    url:queryUrl,
    method: 'GET',
    headers: {
       Authorization : 'Bearer 7ksmrh_Ql4HL2Ldyy2tTCEEQV4O-LirTShH0Zk4RhYHMUXwHEHla7O_Gx75Pae0KosD77KroTxenq2VsOmxLZietEe_qIXLFTaBrrxBYLw6iIIl9BAcXUMjUHJm_XHYx'
    }
}).then(function(response) {

  var results = response.data;
  var randomizer =Math.floor(Math.random() * 20+ 1);
  var allLocations = response.businesses;
  var pickedLocation = allLocations[randomizer];

          console.log(response);
          console.log(randomizer);
          console.log(pickedLocation);



  var restName = pickedLocation.name;
  var restAddress = pickedLocation.location.display_address;
  var restPrice = pickedLocation.price;
  var restRating = pickedLocation.rating;
  var restWeb = pickedLocation.url;   

          console.log(restName);
          console.log(restAddress);
          console.log(restPrice);
          console.log(restRating);      
          console.log(restWeb);   

          $("#restaurant-name").html(restName);
          $("#address").html(restAddress);
          $("#price-range").html(restPrice);   
          $("#star-rating").html(restRating);   
          $("#add-website").attr("href", restWeb);   


      });

    modal.style.display = "block"
   
   });

span.onclick = function() {
  modal.style.display = "none";
}
