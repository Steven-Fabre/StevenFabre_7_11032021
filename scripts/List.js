class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.selected = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  display() {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of this.filtered) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  filterByIngredients(input) {
    ingredients.filter(input);
    ingredients.collect(input);
    ingredients.renderItem("ingredients");
    this.display();
  }

  filterByAppliances(input) {
    appliances.collect(input);
    appliances.filter(input);
    appliances.renderItem("appliances");
    this.display();
  }

  filterByUstensils(input) {
    ustensils.collect(input);
    ustensils.filter(input);
    ustensils.renderItem("ustensils");
    this.display();
  }

  displayListElements(datavalue, inputID) {
    document.getElementById(`${datavalue}`).classList.toggle("dropdown__active");
    if (document.getElementById(`${datavalue}`).classList.contains("dropdown__active")) {
      document.getElementById(`${datavalue}__list`).childNodes.forEach((e) => e.classList.remove("hide"));
      document.getElementById(inputID).nextElementSibling.classList.add("chevron__active");
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

  init() {
    list.filtered = new Set(list.all);
    list.filterByIngredients("");
    list.filterByAppliances("");
    list.filterByUstensils("");
    this.display();
  }

  // filterSelection(selectedlist) {
  //   Array.from(selectedlist).every((element) => {
  //     Array.from(list.filtered).forEach((item) => {
  //       item.ingredients.find((ingredient) => {
  //         if (ingredient.ingredient == element) {
  //           list.selected.add(item);
  //           list.filtered = list.selected;
  //         }
  //       });
  //       if (item.appliances == element) {
  //         list.selected.add(item);
  //       }
  //       item.ustensils.forEach((ustensil) => {
  //         if (
  //           this.capitalizeFirstLetter(
  //             ustensil
  //               .toLowerCase()
  //               .normalize("NFD")
  //               .replace(/[\u0300-\u036f]/g, "")
  //               .replace("'", " ")
  //           ) == element
  //         ) {
  //           list.selected.add(item);
  //         }
  //       });
  //     });
  //   });
  //   this.display();
  // }

  capitalizeFirstLetter(string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }
}
