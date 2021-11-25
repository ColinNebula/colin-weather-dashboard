var cityFormEl = $("#city-form");
var tempEl = $("#temp");
var nameInputEl = $("#cityName");
var weatherContainerEl = $("#weather-container");



//Display Date and time 
$(document).ready(function () {
  var currentDay = moment();
  $("#currentDay").text(currentDay.format("MMMM, Do YYYY, hh:mm:ss a"));

});

//Event Handler
var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  
  // get value from input element
  var cityName = nameInputEl.val().trim();

  if (cityName) {
    getWeather(cityName);
    nameInputEl.value = "";
  } else {
    alert("Please enter  name of a city in the search box!");
  }
  console.log(event);
};

weather.temperature = {
  unit: "celsius"
}
const KELVIN = 273;

// Get weather function
var getWeather = function (cityName) {
  var apiKey = 'b26a1b41c4125331917058bf632db977'

  function getWeatherData(cityName) {
    // make a request to the url
    // format the open weather api url
    var apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b26a1b41c4125331917058bf632db977&q=" + cityName;

    
    fetch(apiUrl1)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        // format the open weather api url
        var apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&units=metric&appid=b26a1b41c4125331917058bf632db977`;
        fetch(apiUrl2)
          .then(function (response) {
            const { status, data } = response;
            console.log(status);
            return response.json()
          })
          .then(function (weatherData) {

            
            // if (status == "ok") {
            // response.json().then(function(data) {
            console.log(weatherData);
            displayWeather(cityName, weatherData);

          });
      })

  }

  getWeatherData(cityName);
}

getWeather("Toronto");

// Display Weather
function displayWeather(cityName, weatherData) {
  const mainEl = $("#weather");
  const uviEl = $("#uvi");
  const tempEl = $("#temp");
  const feelsLikeEl = $("#feelsLike");
  const humidityEl = $("#humidity");
  const cityEl = $("#city");
  const windEl = $("#wind");
  const descriptionEl = $("#description");
  const iconEl = $("#icon");

  console.log('cityName before printing=', cityEl.text());
  cityEl.text(cityName.toUpperCase() + ' weather ');

  // Fill in the Data here
  mainEl.prepend(weatherData.current.weather[0].main);
  tempEl.text(weatherData.current.temp);
  uviEl.text(weatherData.current.uvi);
  feelsLikeEl.text(weatherData.current.feels_like);
  humidityEl.text(weatherData.current.humidity);
  windEl.text(weatherData.current.wind);
  descriptionEl.text(weatherData.current.weather[0].description);
  // weatherIconEl.icon(weatherData.current.weather[0].icon);
  
  
  // Weather image
  const weatherIconEl = $('<img>');
  weatherIconEl.attr('src', 'http://openweathermap.org/img/wn/' + weatherData.current.weather[0].icon +'@2x.png');
  
  iconEl.append(weatherIconEl);
}
//Button
var citySearchEl = $("#citySearch");

citySearchEl.click(function () {
  var inputEl = $("#cityName");
  cityName = inputEl.val().toUpperCase();
  getWeather(cityName);
})
// Form submit form handler
cityFormEl.on("submit", formSubmitHandler);




