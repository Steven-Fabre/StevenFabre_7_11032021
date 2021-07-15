class Ingredients extends Categories {
  constructor() {
    super(Ingredients);
  }

  collect(recipes) {
    this.all = new Set();
    recipes.forEach((ingredients) => {
      ingredients.ingredients.forEach((ingredient) => {
        this.all.add(ingredient.ingredient);
      });
    });
  }

  filter(input, list) {
    list.forEach((recipe) =>
      recipe.ingredients.filter((ingredient) => {
        this.matchingRecipe(this.normalizeInput(ingredient.ingredient), this.normalizeInput(input), recipe);
      })
    );
  }
}
