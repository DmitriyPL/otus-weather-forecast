// import "../css/file.css"

let map;

export function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function readList(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items === null ? [] : items;
}

export function drawList(el, items) {
  el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
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

async function getWeather(apiKey, param, useCity = true) {
  let reqpath = "";
  if (useCity) {
    reqpath = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=${apiKey}`;
  } else {
    const lat = param["latitude"];
    const lon = param["longitude"];
    reqpath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  }

  let resp = await fetch(reqpath);
  return resp.json();
}

function showWeather(el, weatherInfo, lat, lon) {
  el.innerHTML = `
  <h1>${weatherInfo.name}</h1>
  <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">
  `;
  map.setCenter([lat, lon]);
}

async function showCurrentWeather(el, apiKey) {
  const geo = await getGeo();
  let weatherInfo = await getWeather(apiKey, geo, false);
  const lat = geo["latitude"];
  const lon = geo["longitude"];
  showWeather(el, weatherInfo, lat, lon);
}

/* eslint-disable no-param-reassign */
function mapInit() {
  map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
}
/* eslint-disable no-param-reassign */

function main() {
  const apiKey = "21ca9df46444fbd55278f1acab840a5a"; // Храним в переменных окружения

  const formEl = document.querySelector("form");
  const cities = readList("list");

  const listEl = document.querySelector("#list");
  const weatherInfoEl = document.querySelector("#weather-info");

  ymaps.ready(mapInit);
  // eslint-disable-next-line no-unused-vars

  showCurrentWeather(weatherInfoEl, apiKey);

  drawList(listEl, cities);

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = submitHandler(event, cities);
    drawList(listEl, cities);
    saveList("list", cities);

    const weatherInfo = await getWeather(apiKey, cityName);
    let lat = weatherInfo.coord.lat;
    let lon = weatherInfo.coord.lon;
    showWeather(weatherInfoEl, weatherInfo, lat, lon);
  });
}

main();
