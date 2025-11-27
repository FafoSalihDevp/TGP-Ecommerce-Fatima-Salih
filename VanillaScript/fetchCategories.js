async function fetchCategories() {
  const request = await fetch("https://fakestoreapi.com/products/categories");
  const data = await request.json();
  return data;
}

async function filterCategories(category) {
  if (!category) {
    displayProducts(showProduct);
  } else {
    const filter = showProduct.filter((p) => p.category === category);
    displayProducts(filter);
  }
}

// function filterCategories(cag) {
//   console.log(cag);
// }

// fetchCategories().then((categories) => {
//   console.log(categories);
// });

async function loadingFetch() {
  const catg = await fetchCategories();
  const btnContainer = document.getElementById("categoriesContainer");

  const Btns = document.createElement("button");
  Btns.textContent = "All Categories";
  Btns.className =
    "text-red-900 border focus:outline-none rounded-md text-base font-medium px-5 py-2 text-center hover:text-red-700";

  Btns.onclick = () => filterCategories("");
  btnContainer.appendChild(Btns);

  catg.forEach((cag) => {
    const btn = document.createElement("button");
    btn.textContent = cag;
    btn.className =
      "text-red-900 border focus:outline-none rounded-md text-base font-medium px-5 py-2 text-center hover:text-red-700";

    btn.onclick = () => filterCategories(cag);
    btnContainer.appendChild(btn);
  });
}

loadingFetch();
