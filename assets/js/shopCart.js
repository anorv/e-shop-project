let cart = document.querySelectorAll(".add_cart");


let product = [
    {
        name: "1 padžas",
        tag: "padazas1",
        price: 7,
        inCart: 0

    },
    {
        name: "2 padžas",
        tag: "padazas2",
        price: 7,
        inCart: 0

    },
    {
        name: "3 padžas",
        tag: "padazas3",
        price: 7,
        inCart: 0

    },
    {
        name: "4 padžas",
        tag: "padazas4",
        price: 7,
        inCart: 0

    },
    {
        name: "5 padžas",
        tag: "padazas5",
        price: 7,
        inCard: 0

    },

];

// kad paspaudus mygtuka deti i krepseli veiktu
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNr(product[i]);
  });
}


// sukurti funkcija kad perkrovus puslapi krepselio skaicius nepersikrautu
function onLoadCartNr (){
    let productNumber = localStorage.getItem("cartNr");

    if(productNumber){
        document.querySelector(".cart_div").textContent = productNumber;

    }

}






function cartNr(product) {
  // kad i google localstorage idetume prekes
  let productNumber = localStorage.getItem("cartNr");
  // pakeisti teksta i skaicius
  productNumber = parseInt(productNumber);
  //    jei produktu nr bus paspausatas daugiau nei viena karta +1
  if (productNumber) {
    localStorage.setItem("cartNr", productNumber + 1);
    // kad navbare 0 butu lygus papsaudus deti i krepseli toks pat
    document.querySelector(".cart_div").textContent = productNumber + 1;
  } else {
    // kitu atvrju lieka 1
    localStorage.setItem("cartNr", 1);
    // kad navbare 0 butu lygus papsaudus deti i krepseli toks pat
    document.querySelectorAll(".cart_div").textContent = 1;
  }

  setItems(product);
}



function setItems(product){
    let cartItems = localStorage.getItem ("product");
     cartItems = JSON.parse(cartItems); 

      if(cartItems != null){
          if(cartItems[product.tag] == undefined){
              cartItems = {
                  ...cartItems,
                  [product.tag]: product
              }
          }
          cartItems[product.tag].inCart += 1;
      }else{
        product.inCart = 1;
        cartItems = {
           [product.tag]: product
       }

      }

    localStorage.setItem("product", JSON.stringify(cartItems));

}

// paleidziame funkcija, kad uzsikrovus puslapiui krepselio nr sutaptu su localStorage nr
onLoadCartNr ();
