class Ustensils extends Categories {
  constructor() {
    super();
  }

  collect(recipes) {
    this.selected = new Set();
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => this.selected.add(ustensil));
    });
    this.renderItem(this.selected, "ustensils");
  }

  filter(input) {
    list.all.forEach((recipe) =>
      recipe.ustensils.filter((ustensil) => {
        this.matchingRecipe(this.normalizeInput(ustensil), this.normalizeInput(input), recipe);
      })
    );
  }
}
