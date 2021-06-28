const list = new List();
for (let item of recipes) {
  let plat = new Plat(item);
  list.add(plat);
}
list.display();
list.displayTags();
