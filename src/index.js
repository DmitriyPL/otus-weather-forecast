import "../css/normalize.css";
import "../css/style.css";
import { saveList, readList } from "../src/workWithList.js";

let map;
const APIKEY_WEATHER = "21ca9df46444fbd55278f1acab840a5a"; // process.env.APIKEY_YANDEXMAP

export function drawList(items) {
  const listEl = document.querySelector("#list");

  listEl.innerHTML = "";

  const olEl = document.createElement("ol");

  items.forEach((city) => {
    let liEl = document.createElement("li");
    liEl.innerText = city;
    liEl.addEventListener("click", clickLiElHandler);
    liEl.onmouseover = liEl.onmouseout = changeLiBackground;

    olEl.appendChild(liEl);
  });

  listEl.appendChild(olEl);
}

async function clickLiElHandler(event) {
  event.preventDefault();

  const el = event.target;
  const weatherInfo = await getWeatherByCityName(el.innerText);
  let lat = weatherInfo.coord.lat;
  let lon = weatherInfo.coord.lon;
  map.setCenter([lat, lon]);
  showWeather(weatherInfo);
}

function changeLiBackground(event) {
  if (event.type == "mouseover") {
    event.target.style.background = "grey";
  }
  if (event.type == "mouseout") {
    event.target.style.background = "";
  }
}

async function getGeo() {
  let reqpath = "https://get.geojs.io/v1/ip/geo.json";
  let resp = await fetch(reqpath);
  return resp.json();
}

async function getWeatherByGeo(geo) {
  const lat = geo["latitude"];
  const lon = geo["longitude"];
  let reqpath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY_WEATHER}`;
  let resp = await fetch(reqpath);
  return resp.json();
}

async function getWeatherByCityName(cityName) {
  let reqpath = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${APIKEY_WEATHER}`;
  let resp = await fetch(reqpath);
  return resp.json();
}

function showWeather(weatherInfo) {
  const weatherInfoEl = document.querySelector("#weather-info");
  weatherInfoEl.innerHTML = `
  <h1>${weatherInfo.name}</h1>
  <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">
  `;
}

async function showCurrentWeather() {
  const geo = await getGeo();
  let weatherInfo = await getWeatherByGeo(geo);
  const lat = geo["latitude"];
  const lon = geo["longitude"];
  map.setCenter([lat, lon]);
  showWeather(weatherInfo);
}

function mapInit() {
  map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
}

export function addCityInList(event, items) {
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

function submitHandler(formEl, cities) {
  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = addCityInList(event, cities);
    drawList(cities);
    saveList("list", cities);

    const weatherInfo = await getWeatherByCityName(cityName);
    let lat = weatherInfo.coord.lat;
    let lon = weatherInfo.coord.lon;
    map.setCenter([lat, lon]);
    showWeather(weatherInfo);
  });
}

function main() {
  const formEl = document.querySelector("form");
  const cities = readList("list");

  ymaps.ready(mapInit);
  showCurrentWeather();
  drawList(cities);
  submitHandler(formEl, cities);
}

main();

// eslint-disable-next-line no-unused-vars
/* eslint-disable no-param-reassign */
