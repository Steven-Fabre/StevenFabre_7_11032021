class Ingredients extends Categories {
  constructor() {
    super();
  }

  collect(recipes) {
    this.selected = new Set();
    recipes.forEach((ingredients) => {
      ingredients.ingredients.forEach((ingredient) => {
        this.selected.add(ingredient.ingredient);
      });
    });
    this.renderItem(this.selected, "ingredients");
  }

  filter(input) {
    list.all.forEach((recipe) =>
      recipe.ingredients.filter((ingredient) => {
        this.matchingRecipe(this.normalizeInput(ingredient.ingredient), this.normalizeInput(input), recipe);
      })
    );
  }
}
