class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.selected = new Set();
    this.simplified = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  createSimplifiedList() {
    let simplifiedRecipe;
    this.all.forEach((recipe) => {
      simplifiedRecipe = { id: recipe.id, words: new Set() };
      recipe.ingredients.forEach((ingredient) => {
        createSimplifiedWordList(ingredients.normalizeInput(ingredient.ingredient));
      });
      createSimplifiedWordList(ingredients.normalizeInput(recipe.name));
      createSimplifiedWordList(ingredients.normalizeInput(recipe.description));
      simplifiedRecipe.words = Array.from(simplifiedRecipe.words);
      this.simplified.add(simplifiedRecipe);
    });

    function createSimplifiedWordList(arrayOfWords) {
      arrayOfWords.forEach((word) => {
        if (word.length > 2) simplifiedRecipe.words.add(word);
      });
    }
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

  search() {
    function debounce(callback, delay) {
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, delay);
      };
    }

    document.getElementById("main__search").addEventListener(
      "keyup",
      debounce(function (e) {
        if (e.target.value.length > 2) {
          list.matchingRecipes(e.target.value);
          list.display();
        } else {
          list.filtered = list.all;
          list.display();
        }
      }, 600)
    );
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
    this.createSimplifiedList();
  }

  matchingRecipes(input) {
    this.filtered = new Set();
    this.simplified.forEach((recipe) => {
      if (ingredients.normalizeInput(input).every((element) => recipe.words.find((item) => item.includes(element)))) {
        return this.filtered.add(this.all.find((meal) => meal.id == recipe.id));
      }
    });
  }

  resetFilters() {
    filters.forEach((filter) => {
      filter.filter("");
      filter.renderItem();
    });
  }
}
