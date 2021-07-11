class List {
  constructor() {
    this.all = [];
    this.selected = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  display(array) {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of array) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  filterByIngredients(input) {
    this.selected = new Set();
    ingredients.filter(input);
    this.display(this.selected);
  }

  filterByAppliances(input) {
    this.selected = new Set();
    appliances.filter(input);
    this.display(this.selected);
  }

  filterByUstensils(input) {
    this.selected = new Set();
    ustensils.filter(input);
    this.display(this.selected);
  }

  displayListElements(datavalue, chevronID) {
    document.getElementById(`${datavalue}`).classList.toggle("dropdown__active");
    if (document.getElementById(`${datavalue}`).classList.contains("dropdown__active")) {
      document.getElementById(`${datavalue}__list`).childNodes.forEach((e) => e.classList.remove("hide"));
      document.getElementById(chevronID).classList.add("chevron__active");
    } else {
      document.getElementById(`${datavalue}__list`).childNodes.forEach((e) => e.classList.add("hide"));
    }
    document.getElementById(`${datavalue}__list`).classList.toggle("hide");
  }

  hideList() {
    document.querySelectorAll(".dropdown").forEach((e) => e.classList.remove("dropdown__active"));
    document.querySelectorAll(".secondary__list").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".secondary__result").forEach((e) => e.classList.add("hide"));
    document.querySelectorAll(".fa-chevron-down").forEach((e) => e.classList.remove("chevron__active"));
  }

  initCategories() {
    ingredients.collect(list.all);
    appliances.collect(list.all);
    ustensils.collect(list.all);
  }
}
