import { map } from "../src/yandexMAP.js";
import { getGeo, getWeatherByGeo } from "../src/workWithAPI.js";

export function showWeather(weatherInfo) {
  const weatherInfoEl = document.querySelector("#weather-info");
  let innerHTML = "";
  if (Object.prototype.hasOwnProperty.call(weatherInfo, "weather")) {
    innerHTML = `<h1>${weatherInfo.name}</h1>
      <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="Weather icon">`;
  } else {
    innerHTML = `<h1>${weatherInfo.name}</h1>
      <div class="not-found"></div>`;
  }
  weatherInfoEl.innerHTML = innerHTML;
}

export async function showCurrentWeather() {
  const geo = await getGeo();
  let weatherInfo = await getWeatherByGeo(geo);
  if (weatherInfo.cod === "404") {
    weatherInfo.name = "city not found";
  } else {
    const lat = geo["latitude"];
    const lon = geo["longitude"];
    map.setCenter([lat, lon]);
  }
  showWeather(weatherInfo);
}
