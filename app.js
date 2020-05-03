// time forcast//

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let today1 = document.querySelector("#today-time");
today1.innerHTML = `<b>${day}</b> ${month} ${date}(${hours}:${minutes})`;

// search button for city//

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");

  let h1 = document.querySelector("h1");
  if (input.value) {
    h1.innerHTML = `${input.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Temepratur convert to faranheit//
function convertFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector(".bigLetters");
  tempElement.innerHTML = 66.2;
}

function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".bigLetters");
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertCelsius);

//API
function showWeather(response) {
  let temp = document.querySelector(".bigLetters");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}`;
}

function retrievePosition(position) {
  let apiKey = "2b873762a1a6adb48de7a31bdbe782c2";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "2b873762a1a6adb48de7a31bdbe782c2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    document.querySelector("#search-input").value
  }&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

let formNew = document.querySelector("#search-form");
formNew.addEventListener("submit", searchCity);
