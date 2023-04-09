document.addEventListener("DOMContentLoaded", function() {
  // Sample featured products data
  const featuredProducts = [
    {
      name: "Product 1",
      price: 19.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Product 2",
      price: 29.99,
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Product 3",
      description: "helloooooooooooooooooooooooooooooooooooooooooooooooooooooo",
      price: 39.99, 
      image: "https://via.placeholder.com/300x200",
    },
  ];

  // Function to generate product item HTML
  function getProductHTML(product) {
    return `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    `;
  }

  // Get product list element
  const productList = document.querySelector(".product-list");

  // Add featured products to product list
  featuredProducts.forEach(product => {
    productList.innerHTML += getProductHTML(product);
  });
});
