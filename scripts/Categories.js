class Categories {
  constructor() {
    this.selected = new Set();
  }

  renderItem(list, categorie) {
    let html = ``;
    for (let ingredient of list) {
      html += `<span data-id="${ingredient}" data-categorie="${categorie}" class="secondary__result">${ingredient}</span>`;
    }
    document.getElementById(`${categorie}__list`).innerHTML = html;
  }

  normalizeInput(input) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("'", " ")
      .split(" ");
  }

  matchingRecipe(recipeArray, input, recipe) {
    input.every((element) => recipeArray.find((ingredient) => ingredient.startsWith(element)))
      ? list.selected.add(recipe)
      : "";
  }
}
