export function initProductPage(productsArray) {
  const productsContainer = document.querySelector(".row");
  const badgeElement = document.querySelector("span.badge");

  let ProductsAddedToCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  let myFragment = "";

  // Display products
  function displayAllProducts(arr) {
    myFragment = "";
    arr.forEach(product => {
      myFragment += `
        <div class="col ">
          <div class="card product overflow-hidden rounded-4" data-productID="${product.id}">
            <div class="image-wrapper position-relative">
              <img src="${product.image}" alt="">
              <div class="position-absolute icon-wrapper">
                <div class="cart-wrapper d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-cart-shopping m-0"></i>
                </div>
              </div>
            </div>
            <div class="card-body p-3">
              <div class="d-flex justify-content-between align-items-center">
                <span class="product-name text-black h6">${product.name}</span>
                <div class="product-rating d-flex align-items-center">
                  <i class="fa-solid fa-star "></i>
                  <span>3.5</span>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="product-price text-black mb-0">${product.price}</h5>
                <span class="text-muted">3.5k Ratings</span>
              </div>
            </div>
          </div>
        </div>`;
    });
    productsContainer.innerHTML = myFragment;
  }

  displayAllProducts(productsArray);

  const navCartIcon = document.querySelector("nav .nav-cart i");
  const CartNumWrapper = document.querySelector(".cart-mum span");
  CartNumWrapper.innerHTML = ProductsAddedToCart.length.toString();
  let numOfCartItems = parseInt(CartNumWrapper.innerHTML);

  function UpdateCardCartIcon(cartItemsArr) {
    let homeProducts = Array.from(document.querySelectorAll(".col .card"));
    cartItemsArr.forEach(cartItem => {
      homeProducts.forEach(product => {
        if (product.getAttribute("data-productID") === cartItem.id) {
          product.querySelector(".cart-wrapper i").style.color = "#0dcaf0";
        }
      });
    });
  }

  function handleBadge(message) {
    badgeElement.lastElementChild.innerHTML = message;
    badgeElement.style.top = "3%";
    setTimeout(() => {
      badgeElement.style.top = "-20%";
    }, 3000);
  }

  UpdateCardCartIcon(ProductsAddedToCart);

  // Click event for products
  productsContainer.addEventListener("click", function (e) {
    let targetProductID = e.target.closest("div.col")?.querySelector(".card").getAttribute("data-productID");
    if (!targetProductID) return;

    let targetProductObj = productsArray.find(p => p.id === targetProductID);

    if (
      e.target.parentElement.classList.contains("cart-wrapper") ||
      e.target.classList.contains("cart-wrapper") ||
      e.target.classList.contains("fa-cart-shopping")
    ) {
      e.stopPropagation();

      let exists = ProductsAddedToCart.some(item => item.id === targetProductID);
      if (exists) {
        handleBadge("This product is already in your cart");
      } else {
        ProductsAddedToCart.push(targetProductObj);
        numOfCartItems++;
        CartNumWrapper.innerHTML = numOfCartItems.toString();
        handleBadge("Added to cart");
        localStorage.setItem("cartProducts", JSON.stringify(ProductsAddedToCart));
        UpdateCardCartIcon(ProductsAddedToCart);
      }
    } else {
      localStorage.setItem("ProductDetails", JSON.stringify(targetProductObj));
      window.location.href = "/productDetails.html";
    }
  });

  navCartIcon.addEventListener("click", function () {
    window.location.href = "/cart.html";
  });
}

let AllProductsArr =[
{
 "id": "p1",
 "name": "iphone15",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 10000,
 "image": "Assets/Images/iphones/inhanceIMGES/2.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

}
,{
    "id": "p2",
 "name": "iphone18",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/1.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

}
,{
    "id": "p3",
 "name": "iphone12",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/2.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

}
,{
    "id": "p4",
 "name": "iphone11",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/1.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

},
{
    "id": "p3",
 "name": "iphone12",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/2.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

},
{
    "id": "p4",
 "name": "iphone11",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/1.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

}
,
{
    "id": "p3",
 "name": "iphone12",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/2.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

},
{
    "id": "p4",
 "name": "iphone11",
 "description": "Ergonomic wireless mouse with USB receiver.",
 "price": 15000,
 "image": "Assets/Images/iphones/inhanceIMGES/1.png",
 "sellerId": "u2",
 "stock": 30,
 "category": "Electronics"

}
]

initProductPage(AllProductsArr);