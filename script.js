let now = new Date();

let currentDate = document.querySelector("#current-date");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
currentDate.innerHTML = `${day}, ${hours}:${minutes}`;

//Homework5
function displayWeatherFunction(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature-number").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(city) {
  let apiKey = "a6721f41e2ac2f86943b631be9c99122";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherFunction);
}

function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#inputplace").value;
  search(city);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);

function inCelsius() {
  let currentTemp = document.querySelector("#temperature-number");
  currentTemp.innerHTML = `8`;
}
let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", inCelsius);

let currentLocationBtn = document.querySelector("#bttn");
currentLocationBtn.addEventListener("click", getCurrentLocation);
search("Budapest");
