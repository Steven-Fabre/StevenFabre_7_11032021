class Ingredients extends Categories {
  constructor(type) {
    super(type);
  }

  collect() {
    list.all.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        this.all.add(ingredient.ingredient);
      });
    });
  }

  filter(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (
          normalizeString(input).every((element) =>
            normalizeString(ingredient.ingredient).find((item) => item.includes(element))
          )
        ) {
          this.filtered.add(ingredient.ingredient);
        }
      });
    });
  }
}
