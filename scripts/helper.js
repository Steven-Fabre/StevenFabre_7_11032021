function debounce(callback, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

function normalizeString(input = "") {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("'", " ")
    .replace(".", "")
    .replace(",", "")
    .split(" ");
}
