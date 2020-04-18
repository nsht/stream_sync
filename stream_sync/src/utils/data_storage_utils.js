export function encode_base64(data) {
  return btoa(JSON.stringify(data));
}

export function decode_base64(data) {
  return JSON.parse(atob(data));
}

export function store_data(key, data) {
  localStorage.setItem(key, encode_base64(data));
}

export function get_data(key) {
  var data = localStorage.getItem(key);
  if (data) {
    console.log("data pres")
    return decode_base64(data);
  }
  return false;
}
