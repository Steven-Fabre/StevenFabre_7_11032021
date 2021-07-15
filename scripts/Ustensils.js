class Ustensils extends Categories {
  constructor() {
    super(Ustensils);
  }

  collect(recipes) {
    this.all = new Set();
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => this.all.add(ustensil));
    });
  }

  filter(input, list) {
    list.forEach((recipe) =>
      recipe.ustensils.filter((ustensil) => {
        this.matchingRecipe(this.normalizeInput(ustensil), this.normalizeInput(input), recipe);
      })
    );
  }
}
