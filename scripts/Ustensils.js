class Ustensils extends Categories {
  constructor(type) {
    super(type);
  }
  collect() {
    list.all.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        this.all.add(ustensil);
      });
    });
  }

  filter(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if (
          this.normalizeInput(input).every((element) =>
            this.normalizeInput(ustensil).find((item) => item.includes(element))
          )
        ) {
          this.filtered.add(ustensil);
        }
      });
    });
  }
}
