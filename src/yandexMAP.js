export let map;

export function mapInit() {
  map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10,
  });
}
