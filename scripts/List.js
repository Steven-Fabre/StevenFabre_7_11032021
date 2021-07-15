class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.selected = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  display(array) {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of array) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  filterByIngredients(input) {
    this.filtered = new Set();
    ingredients.filtered = new Set();
    ingredients.filter(input, list.all);
    this.display(this.filtered);
    ingredients.collect(list.filtered);
    ingredients.renderItem(ingredients.filtered, "ingredients");
  }

  filterByAppliances(input) {
    this.filtered = new Set();
    appliances.filtered = new Set();
    appliances.filter(input, list.all);
    this.display(this.filtered);
    appliances.collect(list.filtered);
    appliances.renderItem(appliances.filtered, "appliances");
  }

  filterByUstensils(input) {
    this.filtered = new Set();
    ustensils.filtered = new Set();
    ustensils.filter(input, list.all);
    this.display(this.filtered);
    ustensils.collect(list.filtered);
    ustensils.renderItem(ustensils.filtered, "ustensils");
  }

  checkForSelected() {
    if (this.selected.length == 0) return list.all;
    else return list.selected;
  }

  displayListElements(datavalue, inputID) {
    document.getElementById(`${datavalue}`).classList.toggle("dropdown__active");
    if (document.getElementById(`${datavalue}`).classList.contains("dropdown__active")) {
      document.getElementById(`${datavalue}__list`).childNodes.forEach((e) => e.classList.remove("hide"));
      document.getElementById(inputID).nextElementSibling.classList.add("chevron__active");
    } else {
      document.getElementById(`${datavalue}__list`).childNodes.forEach((e) => e.classList.add("hide"));
    }
    document.getElementById(`${datavalue}__list`).classList.toggle("hide");
  }

  hideList() {
    document.querySelectorAll(".dropdown").forEach((e) => e.classList.remove("dropdown__active"));
    document.querySelectorAll(".secondary__list").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".secondary__result").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".fa-chevron-down").forEach((e) => e.classList.remove("chevron__active"));
  }

  initCategories() {
    ingredients.collect(list.all);
    appliances.collect(list.all);
    ustensils.collect(list.all);
    list.filterByIngredients("");
    list.filterByAppliances("");
    list.filterByUstensils("");
  }

  filterSelection(selectedlist) {
    Array.from(selectedlist).every((element) => {
      Array.from(list.filtered).forEach((item) => {
        item.ingredients.find((ingredient) => {
          if (ingredient.ingredient == element) {
            list.selected.add(item);
            list.filtered = list.selected;
          }
        });
        if (item.appliances == element) {
          list.selected.add(item);
        }
        item.ustensils.forEach((ustensil) => {
          if (
            this.capitalizeFirstLetter(
              ustensil
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace("'", " ")
            ) == element
          ) {
            list.selected.add(item);
          }
        });
      });
    });
    this.display(this.filtered);
  }

  capitalizeFirstLetter(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }
}
