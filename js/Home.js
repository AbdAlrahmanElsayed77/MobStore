// const productsContainer = document.querySelector(".row")
// const badgeElement = document.querySelector("span.badge")
// console.log(badgeElement.lastElementChild.innerHTML);



// let ProductsArr = []
// let ProductsAddedToCart = []
// let myFragment = document.createDocumentFragment()
// // *remove ProductDetails from localStorage
// if (localStorage.getItem("ProductDetails")){

//     localStorage.removeItem("ProductDetails")
// }
// // * get cartitems 
// ProductsAddedToCart = JSON.parse(localStorage.getItem("cartProducts"))
// console.log(ProductsAddedToCart.length);


// // * create Clone of card Cart Icon
// const cartIcon = document.createElement("i")
// cartIcon.classList.add("fa-solid" ,"fa-cart-shopping" , "m-0")




// ProductsArr =[
// {
//  "id": "p1",
//  "name": "iphone15",
//  "description": "Ergonomic wireless mouse with USB receiver.",
//  "price": 10000,
//  "image": "Assets/Images/iphones/inhanceIMGES/2.png",
//  "sellerId": "u2",
//  "stock": 30,
//  "category": "Electronics"

// }
// ,{
//     "id": "p2",
//  "name": "iphone18",
//  "description": "Ergonomic wireless mouse with USB receiver.",
//  "price": 15000,
//  "image": "Assets/Images/iphones/inhanceIMGES/1.png",
//  "sellerId": "u2",
//  "stock": 30,
//  "category": "Electronics"

// }
// ,{
//     "id": "p3",
//  "name": "iphone12",
//  "description": "Ergonomic wireless mouse with USB receiver.",
//  "price": 15000,
//  "image": "Assets/Images/iphones/inhanceIMGES/2.png",
//  "sellerId": "u2",
//  "stock": 30,
//  "category": "Electronics"

// }
// ,{
//     "id": "p4",
//  "name": "iphone11",
//  "description": "Ergonomic wireless mouse with USB receiver.",
//  "price": 15000,
//  "image": "Assets/Images/iphones/inhanceIMGES/1.png",
//  "sellerId": "u2",
//  "stock": 30,
//  "category": "Electronics"

// }
// ]

// function displayAllProducts(ProductsArr){
   
//     myFragment = "";
//     for (let i = 0; i < ProductsArr.length; i++) {
//         myFragment+=`
//                 <div class="col ">
//                     <div class="card product overflow-hidden rounded-4 " data-productID = ${ProductsArr[i].id}>
//                         <div class="image-wrapper position-relative">
//                             <img src="${ProductsArr[i].image}" alt="" >
//                             <div class="position-absolute icon-wrapper">
//                                 <div class="cart-wrapper d-flex justify-content-center align-items-center">
//                                     <i class="fa-solid fa-cart-shopping m-0"></i>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="card-body  p-3">
//                            <div class="d-flex justify-content-between align-items-center">
//                                 <span class="product-name text-black h6">${ProductsArr[i].name}</span>
//                                 <div class="product-rating d-flex align-items-center">
//                                     <i class="fa-solid fa-star "></i>
//                                     <span>3.5</span>
//                                 </div>
//                            </div>
//                            <div class="d-flex justify-content-between align-items-center">
//                                 <h5 class="product-price text-black mb-0">${ProductsArr[i].price}</h5>
//                                 <span class="text-muted"> 3.5k Ratings</span>
//                            </div>
//                         </div>
//                     </div>
//                 </div>`
//     }

//     productsContainer.innerHTML = myFragment
// }

// displayAllProducts(ProductsArr)

// // ?----------------------------------? selection After Inserting Elements ?-------------------------------
// const navCartIcon = document.querySelector("nav .nav-cart i ")
// const CartNumWrapper = document.querySelector(".cart-mum span")
// CartNumWrapper.innerHTML = (ProductsAddedToCart.length).toString()
// let numOfCartItems = parseInt(CartNumWrapper.innerHTML)

// let homeProducts = Array.from(document.querySelectorAll(".col .card"))

// let cardCartWrapper = document.querySelector(".cart-wrapper")
// let clonedCardCartWrapper = cardCartWrapper.cloneNode(false);

// console.log(clonedCardCartWrapper.tagName);

// // console.log(homeProducts[0].querySelector("i"));
// // homeProducts[0].querySelector("i").style.color = "#0dcaf0"
// // console.log(homeProducts[0].getAttribute("data-productID"));

// // ?-----------------------------------------? functions ?------------------------------------
// function UpdateCardCartIcon(cartItemsArr) {
   
    
//     for (let i = 0; i < cartItemsArr.length; i++) {
//        homeProducts.forEach((product)=>{
//         if (product.getAttribute("data-productID") === cartItemsArr[i].id) {
//             product.querySelector(".cart-wrapper i").style.color = "#0dcaf0"
//             // console.log(product.querySelector(".cart-wrapper i"));
            
//         }
//        })
        
//     }
// }

// function handleBadge() {
  
//     badgeElement.style.top = "3%"
//     setTimeout(()=>{
//         badgeElement.style.top = "-20%"
        
//     },3000)
// }


// // ?------------ ? calling ? ---------
// UpdateCardCartIcon(ProductsAddedToCart)
// // ? ----------------------------------------? Events ?---------------------------------------
// productsContainer.addEventListener("click" ,function(e){
//      let targetProductID = e.target.closest("div.col").querySelector(".card").getAttribute("data-productID")
//           let targetProductObj
//           ProductsArr.forEach((product)=>{
//             if (product.id == targetProductID) {
//                 targetProductObj = product
//             }
//           })
//           console.log(e.target);
          
//         //  *check if the clicked element is the cart icon  => true => stop navigation to product details page 
//     if (e.target.parentElement.classList.contains("cart-wrapper") || e.target.classList.contains("cart-wrapper") || e.target.classList.contains("fa-cart-shopping")) {
//         e.stopPropagation()
//         console.log(e.target.parentNode.tagName);
        
//         if (ProductsAddedToCart.length==0) {
//             ProductsAddedToCart.push(targetProductObj)
//             badgeElement.lastElementChild.innerHTML = "Added To Cart"
//             handleBadge()
//                numOfCartItems++;
//                 CartNumWrapper.innerHTML =  numOfCartItems.toString();
//         }
//         else if(ProductsAddedToCart.length > 0 ){
//             let isExistProduct = false
//            for (let i = 0; i < ProductsAddedToCart.length; i++) {
//             if (ProductsAddedToCart[i].id ===targetProductID) {
//                     console.log("Exist product");
//                     badgeElement.lastElementChild.innerHTML = "this product in your Cart"
//                     handleBadge()
//                     isExistProduct = true
//                     break;
//                 }
            
            
//            }
//            if (isExistProduct=== false) {
//              ProductsAddedToCart.push(targetProductObj)
//                 badgeElement.lastElementChild.innerHTML = "Added To Cart"
//                 handleBadge()
//                 numOfCartItems++;
//                 CartNumWrapper.innerHTML =  numOfCartItems.toString();
//            }
//         }

//         console.log(ProductsAddedToCart);
//         let cartProductsObj = JSON.stringify(ProductsAddedToCart)
//          localStorage.setItem("cartProducts" , cartProductsObj )
        
//     }

//     else
//     {
//         console.log("from else");
//         let objStr = JSON.stringify(targetProductObj)
//         console.log(objStr);
//         localStorage.setItem("ProductDetails" , objStr )
//         window.location.href = "/productDetails.html"; 
//     }

// })

// navCartIcon.addEventListener("click" , function(e){
//     window.location.href =("/cart.html")
// })


import { initProductPage } from './products.js';

let ProductsArr =[
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

}
]

initProductPage(ProductsArr);