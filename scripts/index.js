const list = new List();
const ingredients = new Ingredients();
for (let item of recipes) {
  let plat = new Meal(item);
  list.add(plat);
  for (let item of plat.ingredients) {
    ingredients.all.add(item.ingredient);
  }
}
ingredients.collectIngredients(list.all);
list.display(list.all);

const categories = document.querySelectorAll(".categories");

categories.forEach((btn) =>
  btn.addEventListener("input", function (e) {
    if (this.value.length >= 3) {
      // btn.nextElementSibling.classList.remove("hide");
      list.filterRecipes(btn.value);
    } else {
      // btn.nextElementSibling.classList.add("hide");
      list.display(list.all);
    }
  })
);

categories.forEach((btn) =>
  btn.addEventListener("focusout", function () {
    // btn.nextElementSibling.classList.add("hide");
  })
);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") ingredients.displayIngredients();
});
