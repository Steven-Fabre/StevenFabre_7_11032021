const list = new List();
const ingredients = new Ingredients("ingredients");
const appliances = new Appliances("appliances");
const ustensils = new Ustensils("ustensils");
const filters = [ingredients, appliances, ustensils];
const categories = document.querySelectorAll(".categories");
const chevrons = document.querySelectorAll(".fa-chevron-down");

for (let item of recipes) {
  let plat = new Meal(item);
  list.add(plat);
}
list.init();

filters.forEach((filter) => {
  filter.collect();
  filter.filter("");
  filter.renderItem();
  filter.listenForFiltered();
  filter.listenForSelection();
});

listenForInput();

function listenForInput() {
  categories.forEach((input) =>
    input.addEventListener("focus", function () {
      list.hideList();
      list.displayListElements(input.getAttribute("data-value"), input.id);
    })
  );
  document.addEventListener("click", function (e) {
    if (!e.target.closest(`.dropdown__active`)) list.hideList();
    if (e.target.closest(".fa-chevron-down")) list.hideList();
  });
}
