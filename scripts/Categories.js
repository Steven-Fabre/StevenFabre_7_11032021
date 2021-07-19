class Categories {
  constructor(type) {
    this.all = new Set();
    this.filtered = new Set();
    this.selected = new Set();
    this.type = type;
  }

  renderItem() {
    let html = ``;
    for (let ingredient of this.filtered) {
      html += `<span data-categorie="${this.type}" class="secondary__result">${ingredient}</span>`;
    }
    document.getElementById(`${this.type}__list`).innerHTML = html;
  }

  normalizeInput(input) {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("'", " ")
      .split(" ");
  }

  listenForFiltered() {
    document.getElementById(`${this.type}__input`).addEventListener("input", (e) => {
      if (e.target.value.length >= 3) {
        this.filter(e.target.value);
        this.renderItem();
      } else {
        this.filter("");
        this.renderItem();
      }
    });
  }

  listenForSelection() {
    document.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-categorie") == this.type) {
        this.selected.add(e.target.innerHTML);
        document.getElementById(`${this.type}__input`).value = "";
        this.renderSelected();
        list.filterRecipes();
      }
      if (e.target.classList.contains(`${this.type}__selected`)) {
        this.selected.delete(e.target.innerHTML);
        e.target.remove();
        this.renderSelected();
        list.filterRecipes();
      }
    });
  }

  renderSelected() {
    document.querySelectorAll(`.${this.type}__selected`).forEach((el) => el.remove());
    this.selected.forEach((tag) => {
      document
        .getElementById("selecteds")
        .insertAdjacentHTML("beforeend", `<span class="${this.type}__selected selected">${tag}</span>`);
    });
  }
}
