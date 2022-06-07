export function getMap(lat, lon) {
  let mapImg = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=10&l=map`;
  let mapEl = document.querySelector("#map");
  mapEl.style.backgroundImage = `url(${mapImg})`;
}
