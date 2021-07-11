const list = new List();
const ingredients = new Ingredients();
const appliances = new Appliances();
const ustensils = new Ustensils();
const categories = document.querySelectorAll(".categories");
const chevrons = document.querySelectorAll(".fa-chevron-down");

for (let item of recipes) {
  let plat = new Meal(item);
  list.add(plat);
}
list.initCategories();
list.display(list.all);

categories.forEach((btn) =>
  btn.addEventListener("input", function () {
    if (btn.value.length >= 3) {
      if (btn.getAttribute("data-value") == "ingredients") {
        list.filterByIngredients(btn.value);
        ingredients.collect(list.selected);
      }

      if (btn.getAttribute("data-value") == "appliances") {
        list.filterByAppliances(btn.value);
        appliances.collect(list.selected);
      }

      if (btn.getAttribute("data-value") == "ustensils") {
        list.filterByUstensils(btn.value);
        ustensils.collect(list.selected);
      }
    } else {
      list.initCategories();
      list.display(list.all);
    }
  })
);

chevrons.forEach((chevron) =>
  chevron.addEventListener("click", function () {
    if (!chevron.closest("div").classList.contains("dropdown__active")) {
      list.displayListElements(chevron.nextElementSibling.getAttribute("data-value"), chevron.id);
    } else {
      list.hideList();
    }
  })
);

document.addEventListener("click", function (e) {
  if (!e.target.closest("div").classList.contains("dropdown")) {
    list.hideList();
  }
});

// function changeValue(id, categorie) {
// L'idée serait de créer de manière dynamique la "catégorie"/class pour appliquer la fonction en conséquences
//   list.filterByIngredients(id);
//   categorie.collect(list.selected);
// }
