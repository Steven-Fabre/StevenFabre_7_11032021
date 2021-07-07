class Ingredients {
  constructor() {
    this.all = new Set();
    this.selected = new Set();
    this.setIngredients = new Set();
  }

  collectIngredients(recipes) {
    recipes.forEach((ingredients) => {
      ingredients.ingredients.forEach((ingredient) => {
        this.selected.add(ingredient.ingredient);
      });
    });
    this.renderIngredients(this.selected);
  }

  renderIngredients(ingredients) {
    let html = ``;
    for (let ingredient of ingredients) {
      html += `<span data-ingredient-id=${ingredient} class="secondary__result">${ingredient}</span>`;
    }
    document.getElementById("ingredients__list").innerHTML = html;
  }

  displayIngredients() {
    document.getElementById("ingredients").classList.toggle("dropdown__active");
    document.getElementById("ingredients__list").classList.toggle("hide");
    document
      .querySelectorAll(".secondary__result")
      .forEach((el) => el.classList.toggle("hide"));
  }
}
