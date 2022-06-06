import "../css/normalize.css";
import "../css/style.css";
import {
  saveList,
  readList,
  addCityInList,
  drawList,
} from "../src/workWithList.js";
import { getWeatherByCityName } from "../src/workWithAPI.js";
import { showWeather, showCurrentWeather } from "../src/showWeather.js";
import { map, mapInit } from "../src/yandexMAP.js";

function submitHandler(formEl, cities) {
  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = addCityInList(event, cities);
    drawList(cities);
    saveList("list", cities);

    const weatherInfo = await getWeatherByCityName(cityName);
    if (weatherInfo.cod === "404") {
      weatherInfo.name = "city not found";
    } else {
      let lat = weatherInfo.coord.lat;
      let lon = weatherInfo.coord.lon;
      map.setCenter([lat, lon]);
    }
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
