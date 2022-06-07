import { getWeatherByCityName } from "../src/workWithAPI.js";
import { showWeather } from "../src/showWeather.js";
import { getMap } from "../src/yandexMAP.js";

export function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function readList(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items === null ? [] : items;
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

  if (weatherInfo.cod === "404") {
    weatherInfo.name = "city not found";
  } else {
    let lat = weatherInfo.coord.lat;
    let lon = weatherInfo.coord.lon;
    getMap(lat, lon);
  }

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
