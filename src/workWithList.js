export function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function readList(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items === null ? [] : items;
}
