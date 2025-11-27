
let showProduct = [];


async function fetchProducts() {
  const request = await fetch("https://fakestoreapi.com/products");
  const data = await request.json();
  return data;
}

  function displayProducts(products) {
    const productContainer = document.getElementById("productContainer");

    productContainer.innerHTML = products
      .map(
        (pro) => `
    <div id="card1" class="relative w-full max-w-[350px] p-6 backdrop-blur-lg bg-white/10 border border-white/50 rounded-base shadow-lg hover:scale-105 hover:backdrop-blur-3xl duration-500 transition-all ">

    <a href="#">
    <img class="rounded-base mb-4 w-full h-[250px] object-contain  hover:filter hover:blur-2xl" src="${
      pro.image
    }"/>
    </a>

    <h5 class="text-lg text-heading font-semibold tracking-tight text-center">${
      pro.title
    }
    </h5>

    <p class="text-center text-sm text-gray-600 mt-1">
    Category <span class="font-medium text-red-600">${pro.category}
    </span>
    </p>

    <div class="flex items-center justify-center mb-4 bg">
    <span class="text-3xl text-red-600 font-extrabold ">${pro.price}</span>
    </div>


     <div class="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 rounded-base px-4">
        <p class="text-center text-xl text-red-950 leading-relaxed">${pro.description.substring(
          0,
          170
        )}...</p>
    </div>
    </div>
  `
      )
      .join("");
  }



  
async function loadingProFetch() {
  const product = await fetchProducts();
  showProduct = product;
  displayProducts(product);
}

  
  
loadingProFetch();
