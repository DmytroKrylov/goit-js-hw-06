// const categories = document.querySelectorAll("li.item");
// console.log("Number of categories:", categories.length);

// categories.forEach((category) => {
//   const categoriesNames = category.querySelector("h2").textContent;
//   const categoriesElements = category.querySelectorAll("li").length;
//   console.log("Category:", categoriesNames);
//   console.log("Elements:", categoriesElements);
// });
const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log("Number of categories:", categories.children.length);

items.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
