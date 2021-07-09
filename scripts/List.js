class List {
  constructor() {
    this.all = [];
    this.selected = [];
    this.result = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  addSelected(item) {
    this.selected.push(item);
  }

  display(array) {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of array) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  filterRecipes(input) {
    this.result = new Set();
    this.all.forEach((recipe) =>
      recipe.ingredients.filter((ingredient) => {
        this.recipeMatchesIngredients(this.normalizeInput(ingredient.ingredient), this.normalizeInput(input), recipe);
      })
    );
    console.log(this.result);
  }

  recipeMatchesIngredients(ingredientArray, input, recipe) {
    input.every((element) => ingredientArray.find((ingredient) => ingredient.startsWith(element)))
      ? this.result.add(recipe)
      : "";
  }

  normalizeInput(input) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("'", " ")
      .split(" ");
  }

  checkUstensils(input) {
    this.all.forEach((plat) => {
      for (let item of plat.ustensils) {
        if (input == item) {
          this.addSelected(plat);
        }
      }
      this.display(this.selected);
    });
  }
}
