document.addEventListener("DOMContentLoaded", function () {
  fetch("./data-shirt.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      displayProductList(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function displayProductList(products) {
    const productListContainer = document.getElementById("product-list");

    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      productItem.innerHTML = `
        <div class="prom-product" id="${product.id}" onClick="gotoproductdetail(${product.id})">
            
                <img class="img-product"
                    src="${product.image}">
                <img class="see-more" src="../assets/img/icon-kinh-lup.jpg">
                <div class="inf-product">
                        <div class="name-brand">Leo</div>
                        <div class="name-product">${product.title}</div>
                    <div class="price-product">${product.price}</div>
                </div>
        </div>
      `;

      productListContainer.appendChild(productItem);
    });
  }
  
});
