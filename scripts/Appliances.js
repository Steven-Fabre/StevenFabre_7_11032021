class Appliances extends Categories {
  constructor() {
    super();
  }

  collect(recipes) {
    this.selected = new Set();
    recipes.forEach((recipe) => {
      this.selected.add(...recipe.appliances);
    });
    this.renderItem(this.selected, "appliances");
  }

  filter(input) {
    list.all.forEach((recipe) =>
      recipe.appliances.filter((appliance) => {
        this.matchingRecipe(this.normalizeInput(appliance), this.normalizeInput(input), recipe);
      })
    );
  }
}
