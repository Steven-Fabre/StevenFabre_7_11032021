class Ingredients extends Categories {
  constructor() {
    super(Ingredients);
  }

  collect(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        this.isMatchingIngredient(ingredient, input, this.filtered, ingredient.ingredient);
      });
    });
  }

  filter(input) {
    let newFilteredList = new Set();
    list.all.forEach((recipe) =>
      recipe.ingredients.forEach((ingredient) => {
        this.isMatchingIngredient(ingredient, input, newFilteredList, recipe);
      })
    );
    list.filtered = newFilteredList;
  }

  isMatchingIngredient(ingredient, input, destinationList, matchingItem) {
    if (
      this.normalizeInput(input).every((element) =>
        this.normalizeInput(ingredient.ingredient).find((item) => item.includes(element))
      )
    ) {
      destinationList.add(matchingItem);
    }
  }

  select(input) {
    this.selected.add(input);
  }
}
