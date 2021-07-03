class List {
  constructor() {
    this.all = [];
    this.selected = [];
    this.ingredients = new Set();
    this.ustensils = new Set();
    this.appareils = new Set();
  }

  add(item) {
    this.all.push(item);
  }

  addSelected(item) {
    this.selected.push(item);
  }

  display(array) {
    let html = ``;
    let destination = document.getElementById("plats");
    for (let item of array) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  listing() {
    for (let plat of this.all) {
      for (let item of plat.ingredients) {
        this.ingredients.add(item.ingredient);
      }
      for (let item of plat.ustensils) {
        this.ustensils.add(item);
      }
      for (let item of plat.appareils) {
        this.appareils.add(item);
      }
    }
  }

  checkItem(categorie, input) {
    switch (categorie) {
      case "ingredients__input":
        this.checkIngredients(input);
        break;
      case "ustensiles__input":
        this.checkUstensils(input);
        break;
      case "appareils__input":
        console.log("appareils");
        break;
    }
  }

  checkIngredients(input) {
    this.all.forEach((plat) => {
      for (let item of plat.ingredients) {
        if (input == item.ingredient) {
          this.addSelected(plat);
        }
      }
    });
    this.display(this.selected);
  }

  checkUstensils(input) {
    this.all.forEach((plat) => {
      for (let item of plat.ustensils) {
        if (input == item) {
          this.addSelected(plat);
        }
      }
      this.display(this.selected);
    });
  }
}
