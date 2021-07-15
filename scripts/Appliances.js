class Appliances extends Categories {
  constructor() {
    super(Appliances);
  }

  collect(recipes) {
    this.all = new Set();
    recipes.forEach((recipe) => {
      this.all.add(...recipe.appliances);
    });
  }

  filter(input, list) {
    list.forEach((recipe) =>
      recipe.appliances.filter((appliance) => {
        this.matchingRecipe(this.normalizeInput(appliance), this.normalizeInput(input), recipe);
      })
    );
  }
}
