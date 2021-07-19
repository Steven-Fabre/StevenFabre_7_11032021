class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.selected = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  display() {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of this.filtered) {
      html += item.render();
    }
    destination.innerHTML = html;
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

  filterByAppliances() {
    appliances.selected.forEach((select) => {
      let newFilteredList = new Set();
      this.filtered.forEach((recipe) => {
        if (
          appliances
            .normalizeInput(select)
            .every((element) => appliances.normalizeInput(...recipe.appliances).find((item) => item.includes(element)))
        ) {
          newFilteredList.add(recipe);
        }
      });
      list.filtered = newFilteredList;
    });
  }

  filterByIngredients() {
    ingredients.selected.forEach((select) => {
      let newFilteredList = new Set();
      this.filtered.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
          if (
            ingredients
              .normalizeInput(select)
              .every((element) =>
                ingredients.normalizeInput(ingredient.ingredient).find((item) => item.includes(element))
              )
          ) {
            newFilteredList.add(recipe);
          }
        });
      });
      list.filtered = newFilteredList;
    });
  }

  filterByUstensils() {
    ustensils.selected.forEach((select) => {
      let newFilteredList = new Set();
      this.filtered.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
          if (
            ustensils
              .normalizeInput(select)
              .every((element) => ustensils.normalizeInput(ustensil).find((item) => item.includes(element)))
          ) {
            newFilteredList.add(recipe);
          }
        });
      });
      list.filtered = newFilteredList;
    });
  }

  filterRecipes() {
    this.filtered = this.all;
    this.filterByIngredients();
    this.filterByAppliances();
    this.filterByUstensils();
    this.resetFilters();
    this.display();
  }

  hideList() {
    document.querySelectorAll(".dropdown").forEach((e) => e.classList.remove("dropdown__active"));
    document.querySelectorAll(".secondary__list").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".secondary__result").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".fa-chevron-down").forEach((e) => e.classList.remove("chevron__active"));
  }

  init() {
    list.filtered = new Set(list.all);
    ingredients.renderItem("ingredients");
    appliances.renderItem("appliances");
    ustensils.renderItem("ustensils");
    this.display();
  }

  resetFilters() {
    filters.forEach((filter) => {
      filter.filter("");
      filter.renderItem();
    });
  }
}
