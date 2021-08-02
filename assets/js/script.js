const iconEl = document.querySelector(".weather-icon");
const tempEl = document.querySelector(".temperature-value p");
const descEl = document.querySelector(".temperature-description p");
const locationEl = document.querySelector(".location p");
const notificationEl = document.querySelector(".notification");

var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector("#weather-container");
var countrySearchTerm = document.querySelector("#country-search-term");
var weatherEl = document.querySelector("#weather");

//Display Date and time 
$(document).ready(function() {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("MMMM, Do YYYY, hh:mm:ss a"));

});
  

weather.temperature = {
    unit : "celsius"
}

//Display Date and time 
$(document).ready(function() {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("MMMM, Do YYYY, hh:mm:ss a"));
});



const KELVIN = 273;


// set position
function setPosition(position){
  let lat = position.coords.lat;
  let lon = position.coords.lon;
  
  getWeather(lat, lon);
}
console.log("inside");



// Event handler function call
var formSubmitHandler = function(event) {
  event.preventDefault();
  
  // get value from input element
var cityname = nameInputEl.value.trim();
if (cityname) {
  getWeather(cityname);
  nameInputEl.value = "";
} else {
  alert("Please enter a  City name!");
}
// clear old content
  weatherContainerEl.textContent = "";
  console.log(event);
};

  // clear old content
  //weatherContainerEl.textContent = "";
  


// C to F conversion
function celsiusToFahrenheit(temperature){
  return (temperature * 9/5) + 32;
}
//get coordinates function for one location
function getCityCoord(){

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=b26a1b41c4125331917058bf632db977"
  )
.then(
    function(res) {
      console.log(res);
      return res.json();
    })
    .then(function(data) {
      const {coord} = data
      const {lon, lat} = coord
      console.log(data.coord.lon, data.coord.lat);
      getWeather(lat, lon);
    });
};

//get weather function with lon and lat parameters
function getWeather(city) {
  let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${43.7001}&lon=${-79.4163}&exclude={part}&units=metric&appid=b26a1b41c4125331917058bf632db977`
  
  fetch(api)
    .then(
    function(response) {
      let data = response.json();
      console.log("getWeather" ,data);
      console.log("inside", response);
      displayWeather(data, city);
      return data;
    });
    
  }        

  var displayWeather = function(city, searchTerm) {
    if (weather.length === 0) {
      weatherContainerEl.textContent = "No info found.";
      
      return;
    }
  
  function displayWeather (weather) {
  console.log(weather);
  let city = document.querySelector('.location .city'); 
  city.innerText = `${weather.name} ${weather.sys.country}`;

}

};
   
console.log("outside1");



weatherEl.addEventListener("submit", formSubmitHandler);
console.log("outside");
