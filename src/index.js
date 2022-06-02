import "../css/normalize.css";
import "../css/style.css";

let map;

export function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function readList(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items === null ? [] : items;
}

export function drawList(items) {
  const listEl = document.querySelector("#list");

  listEl.innerHTML = "";

  const olEl = document.createElement("ol");

  items.forEach((city) => {
    let liEl = document.createElement("li");
    liEl.innerText = city;
    olEl.appendChild(liEl);

    liEl.addEventListener("click", async (event) => {
      event.preventDefault();

      const el = event.target;
      const weatherInfo = await getWeather(el.innerText);
      let lat = weatherInfo.coord.lat;
      let lon = weatherInfo.coord.lon;
      showWeather(weatherInfo, lat, lon);
    });

    liEl.onmouseover = liEl.onmouseout = changeLiBackground;
  });

  listEl.appendChild(olEl);
}

function changeLiBackground(event) {
  if (event.type == "mouseover") {
    event.target.style.background = "grey";
  }
  if (event.type == "mouseout") {
    event.target.style.background = "";
  }
}

export function submitHandler(event, items) {
  const formEl = event.target;
  const input = formEl.querySelector("input");
  const { value } = input;
  input.value = "";

  items.push(value);

  if (items.length > 10) {
    items.shift();
  }

  return value;
}

async function getGeo() {
  let reqpath = "https://get.geojs.io/v1/ip/geo.json";
  let resp = await fetch(reqpath);
  return resp.json();
}

async function getWeather(param, useCity = true) {
  const APIKEY_WEATHER = "21ca9df46444fbd55278f1acab840a5a"; // process.env.APIKEY_YANDEXMAP
  let reqpath = "";
  if (useCity) {
    reqpath = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=${APIKEY_WEATHER}`;
  } else {
    const lat = param["latitude"];
    const lon = param["longitude"];
    reqpath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY_WEATHER}`;
  }

  let resp = await fetch(reqpath);
  return resp.json();
}

function showWeather(weatherInfo, lat, lon) {
  const weatherInfoEl = document.querySelector("#weather-info");
  weatherInfoEl.innerHTML = `
  <h1>${weatherInfo.name}</h1>
  <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">
  `;
  map.setCenter([lat, lon]);
}

async function showCurrentWeather() {
  const geo = await getGeo();
  let weatherInfo = await getWeather(geo, false);
  const lat = geo["latitude"];
  const lon = geo["longitude"];
  showWeather(weatherInfo, lat, lon);
}

function mapInit() {
  map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
}

function main() {
  const formEl = document.querySelector("form");
  const cities = readList("list");

  ymaps.ready(mapInit);

  showCurrentWeather();

  drawList(cities);

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = submitHandler(event, cities);
    drawList(cities);
    saveList("list", cities);

    const weatherInfo = await getWeather(cityName);
    let lat = weatherInfo.coord.lat;
    let lon = weatherInfo.coord.lon;
    showWeather(weatherInfo, lat, lon);
  });
}

main();

// eslint-disable-next-line no-unused-vars
/* eslint-disable no-param-reassign */
