class Appliances extends Categories {
  constructor() {
    super(Appliances);
  }

  collect(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      this.isMatchingAppliance(...recipe.appliances, input, this.filtered, ...recipe.appliances);
    });
  }

  filter(input) {
    let newFilteredList = new Set();
    list.all.forEach((recipe) => {
      this.isMatchingAppliance(...recipe.appliances, input, newFilteredList, recipe);
    });
    list.filtered = newFilteredList;
  }

  isMatchingAppliance(appliance, input, destinationList, matchingItem) {
    if (
      this.normalizeInput(input).every((element) =>
        this.normalizeInput(appliance).find((item) => item.includes(element))
      )
    ) {
      destinationList.add(matchingItem);
    }
  }

  select(input) {
    this.selected.add(input);
    console.log(this.selected);
  }

  deselect(input) {
    this.selected.delete(input.textContent);
  }
}
