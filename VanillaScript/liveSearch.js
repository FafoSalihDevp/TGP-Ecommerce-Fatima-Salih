const search = document.getElementById("search");

search.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const filtered = showProduct.filter((pro) =>
        pro.title.toLowerCase().includes(value) || pro.description.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});