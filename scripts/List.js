class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.selected = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  matchingRecipes(input) {
    this.filtered = new Set();
    this.all.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (
          normalizeString(input).every((element) =>
            normalizeString(ingredient.ingredient).find((item) => item.includes(element))
          )
        ) {
          return this.filtered.add(recipe);
        }
      });
      if (
        normalizeString(input).every((element) => normalizeString(recipe.name).find((item) => item.includes(element)))
      ) {
        return this.filtered.add(recipe);
      }
      if (
        normalizeString(input).every((element) =>
          normalizeString(recipe.description).find((item) => item.includes(element))
        )
      ) {
        return this.filtered.add(recipe);
      }
    });
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
          normalizeString(select).every((element) =>
            normalizeString(...recipe.appliances).find((item) => item.includes(element))
          )
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
            normalizeString(select).every((element) =>
              normalizeString(ingredient.ingredient).find((item) => item.includes(element))
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
            normalizeString(select).every((element) => normalizeString(ustensil).find((item) => item.includes(element)))
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
    this.search();
    this.listenForInput();
  }

  listenForInput() {
    document.querySelectorAll(".categories").forEach((input) =>
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

  resetFilters() {
    filters.forEach((filter) => {
      filter.filter("");
      filter.renderItem();
    });
  }

  search() {
    document.getElementById("main__search").addEventListener(
      "keyup",
      debounce(function (e) {
        if (e.target.value.length > 2) {
          list.matchingRecipes(e.target.value);
          ingredients.filter();
          ingredients.renderItem();
          ustensils.filter();
          ustensils.renderItem();
          appliances.filter();
          appliances.renderItem();
          list.display();
        } else {
          list.filtered = list.all;
          list.display();
        }
      }, 600)
    );
  }
}
