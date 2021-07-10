class Ingredients {
  constructor() {
    this.all = new Set();
    this.selected = new Set();
    this.setIngredients = new Set();
  }

  collectIngredients(recipes) {
    this.selected = new Set();
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
}
