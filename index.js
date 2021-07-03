const list = new List();
for (let item of recipes) {
  let plat = new Plat(item);
  list.add(plat);
}
list.display(list.all);

const categories = document.querySelectorAll(".categories");

categories.forEach((btn) =>
  btn.addEventListener("input", function (e) {
    if (this.value.length >= 3) {
      btn.nextElementSibling.classList.remove("hide");
      list.checkItem(btn.id, btn.value);
    } else {
      btn.nextElementSibling.classList.add("hide");
      list.display(list.all);
    }
  })
);

categories.forEach((btn) =>
  btn.addEventListener("focusout", function () {
    btn.nextElementSibling.classList.add("hide");
  })
);

list.listing();
