const list = new List();
const ingredients = new Ingredients();
const appliances = new Appliances();
const ustensils = new Ustensils();
const filters = [ingredients, appliances, ustensils];
const categories = document.querySelectorAll(".categories");
const chevrons = document.querySelectorAll(".fa-chevron-down");

for (let item of recipes) {
  let plat = new Meal(item);
  list.add(plat);
}
list.init();

categories.forEach((btn) => btn.addEventListener("input", listenForFiltering));
listenForInput();

function listenForFiltering(e) {
  if (e.target.value.length >= 3) {
    if (e.target.getAttribute("data-value") == "ingredients") {
      list.filterByIngredients(e.target.value);
    }

    if (e.target.getAttribute("data-value") == "appliances") {
      list.filterByAppliances(e.target.value);
    }

    if (e.target.getAttribute("data-value") == "ustensils") {
      list.filterByUstensils(e.target.value);
    }
  } else {
    list.init();
  }
}

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
    if (e.target.closest(".secondary__result")) addFiltered(e.target);
    if (e.target.closest(".selected")) removeFiltered(e.target);
  });
}

function addFiltered(e) {
  renderSelected(e.getAttribute("data-id"), e.getAttribute("data-categorie"));
  if (e.getAttribute("data-categorie") == "ingredients") {
    // ingredients.selected.add(e.getAttribute("data-id"));
    // ingredients.filterSelection(ingredients.selected);
    ingredients.select(e.getAttribute("data-id"));
  }

  if (e.getAttribute("data-categorie") == "appliances") {
    appliances.selected.add(e.getAttribute("data-id"));
    list.filterSelection(appliances.selected);
  }

  if (e.getAttribute("data-categorie") == "ustensils") {
    ustensils.selected.add(e.getAttribute("data-id"));
    list.filterSelection(ustensils.selected);
  }
}

function renderSelected(ingredient, categorie) {
  document
    .getElementById("selecteds")
    .insertAdjacentHTML("beforeend", `<span class="${categorie}__selected selected">${ingredient}</span>`);
}

function removeFiltered(e) {
  e.remove();
}
