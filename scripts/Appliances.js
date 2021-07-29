class Appliances extends Categories {
  constructor(type) {
    super(type);
  }

  collect() {
    list.all.forEach((recipe) => {
      this.all.add(recipe.appliances);
    });
  }

  filter(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      if (
        normalizeString(input).every((element) =>
          normalizeString(...recipe.appliances).find((item) => item.includes(element))
        )
      ) {
        this.filtered.add(...recipe.appliances);
      }
    });
  }
}
