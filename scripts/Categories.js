class Categories {
  constructor(type) {
    this.all = new Set();
    this.filtered = new Set();
    this.selected = new Set();
    this.type = type;
  }

  renderItem(categorie) {
    let html = ``;
    for (let ingredient of this.filtered) {
      html += `<span data-id="${ingredient}"  data-categorie="${categorie}" class="secondary__result">${ingredient}</span>`;
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
}
