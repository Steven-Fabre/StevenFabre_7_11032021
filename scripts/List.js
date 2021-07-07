class List {
  constructor() {
    this.all = [];
    this.selected = [];
  }

  add(item) {
    this.all.push(item);
  }

  addSelected(item) {
    this.selected.push(item);
  }

  display(array) {
    let html = ``;
    let destination = document.getElementById("meals");
    for (let item of array) {
      html += item.render();
    }
    destination.innerHTML = html;
  }

  checkItem(categorie, input) {
    switch (categorie) {
      case "ingredients__input":
        this.checkIngredients(input);
        break;
      case "ustensils__input":
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
