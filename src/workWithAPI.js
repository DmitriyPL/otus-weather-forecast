const APIKEY_WEATHER = "21ca9df46444fbd55278f1acab840a5a"; // process.env.APIKEY_YANDEXMAP

export async function getGeo() {
  let reqpath = "https://get.geojs.io/v1/ip/geo.json";
  let resp = await fetch(reqpath);
  return resp.json();
}

export async function getWeatherByGeo(geo) {
  const lat = geo["latitude"];
  const lon = geo["longitude"];
  let reqpath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY_WEATHER}`;
  let resp = await fetch(reqpath);
  return resp.json();
}

export async function getWeatherByCityName(cityName) {
  let reqpath = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${APIKEY_WEATHER}`;
  let resp = await fetch(reqpath);
  return resp.json();
}
