const list = new List();
const ingredients = new Ingredients("ingredients");
const appliances = new Appliances("appliances");
const ustensils = new Ustensils("ustensils");
const filters = [ingredients, appliances, ustensils];

for (let item of recipes) {
  let plat = new Meal(item);
  list.add(plat);
}
list.init();

filters.forEach((filter) => {
  filter.collect();
  filter.filter();
  filter.renderItem();
  filter.listenForFiltered();
  filter.listenForSelection();
});
