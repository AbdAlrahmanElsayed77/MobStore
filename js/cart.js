let myCartProducts = JSON.parse((localStorage.getItem("cartProducts")))
console.log(myCartProducts);
let H = document.querySelector("h1")
myCartProducts.pop();
console.log(myCartProducts);

  let myCartProductsObj = JSON.stringify(myCartProducts)
         localStorage.setItem("cartProducts" , myCartProductsObj )



console.log(H);
H.addEventListener("click" , function(e){
    window.location.href = "/Home.html"
})
