class Ustensils extends Categories {
  constructor() {
    super(Ustensils);
  }

  collect(input) {
    this.filtered = new Set();
    list.filtered.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        this.isMatchingUstensil(ustensil, input, this.filtered, ustensil);
      });
    });
  }

  filter(input) {
    let newFilteredList = new Set();
    list.all.forEach((recipe) =>
      recipe.ustensils.forEach((ustensil) => {
        this.isMatchingUstensil(ustensil, input, newFilteredList, recipe);
      })
    );
    list.filtered = newFilteredList;
  }

  isMatchingUstensil(ustensil, input, destinationList, matchingItem) {
    if (
      this.normalizeInput(input).every((element) =>
        this.normalizeInput(ustensil).find((item) => item.includes(element))
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
