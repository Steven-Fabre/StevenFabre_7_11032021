class List {
  constructor() {
    this.all = [];
    this.ingredients = new Set();
    this.ustensils = new Set();
    this.appareils = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  display(item) {
    let html = ``;
    let destination = document.getElementById("plats");
    for (item of this.all) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  displayTags() {
    for (let plat of this.all) {
      let html = ``;
      for (let item of plat.ingredients) {
        let balise = `<p class="filters"><span>${item.ingredient}</span>${
          item.quantity ? ": " + item.quantity : ""
        } ${item.unit ? item.unit : ""}</p>`;
        html += balise;
      }
      document.getElementById(`${plat.id}`).innerHTML = html;
    }
  }
}
