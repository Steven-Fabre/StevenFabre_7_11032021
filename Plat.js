class Plat {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.ustensils = data.ustensils;
    this.appareils = data.appliances;
  }

  render() {
    return `
    <article class="plat">
    <div class="photoplat"></div>
    <div class="description">
        <div class="header__description">
            <h2>${this.name}</h2>
            <h3><i class="far fa-clock"></i> ${this.time} min</h3>
        </div>
        <div class="body__description">
            <div class="ingredients" id=${this.id}></div>
            <p class="instruction"> ${this.description}</p>
        </div>
    </div>
    </article>
    `;
  }
}
