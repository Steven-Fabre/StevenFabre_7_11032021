class Appliances extends Categories {
  constructor() {
    super(Appliances);
  }

  collect(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      this.isMatchingIngredient(...recipe.appliances, input, this.filtered, ...recipe.appliances);
    });
  }

  filter(input) {
    let newFilteredList = new Set();
    list.filtered.forEach((recipe) => {
      this.isMatchingIngredient(...recipe.appliances, input, newFilteredList, recipe);
    });
    list.filtered = newFilteredList;
  }

  isMatchingIngredient(appliance, input, destinationList, matchingItem) {
    if (
      this.normalizeInput(input).every((element) =>
        this.normalizeInput(appliance).find((item) => item.includes(element))
      )
    ) {
      destinationList.add(matchingItem);
    }
  }
}
