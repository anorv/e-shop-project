let cart = document.querySelectorAll(".add_cart");

let product = [
  {
    name: "1 padažas",
    tag: "souce1",
    price: 7,
    inCart: 0,
  },
  {
    name: "2 padažas",
    tag: "souce2",
    price: 7,
    inCart: 0,
  },
  {
    name: "3 padažas",
    tag: "souce3",
    price: 7,
    inCart: 0,
  },
  {
    name: "4 padažas",
    tag: "souce4",
    price: 7,
    inCart: 0,
  },
  {
    name: "5 padažas",
    tag: "souce5",
    price: 7,
    inCart: 0,
  },
];

// kad paspaudus mygtuka deti i krepseli veiktu
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", (e) => {
    cartNr(product[i]);
    e.preventDefault();
    totalCost(product[i]);
  });
}

// sukurti funkcija kad perkrovus puslapi krepselio skaicius nepersikrautu
function onLoadCartNr() {
  let productNumber = localStorage.getItem("cartNr");

  if (productNumber) {
    document.querySelector(".cart_div").textContent = productNumber;
    document.querySelector(".cart_div_second").textContent = productNumber;
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
    document.querySelector(".cart_div_second").textContent = productNumber + 1;
  } else {
    // kitu atvrju lieka 1
    localStorage.setItem("cartNr", 1);
    // kad navbare 0 butu lygus papsaudus deti i krepseli toks pat
    document.querySelectorAll(".cart_div").textContent = 1;
    document.querySelectorAll(".cart_div_second").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("product");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("product", JSON.stringify(cartItems));
}

// Funkcija suskaiciuoti bendra suma
function totalCost(product) {
  let cardCost = localStorage.getItem("totalCost");

  if (cardCost != null) {
    // Kadangi is localStorage mums grazina tik strings, pakeiciame su parseIn i number
    cardCost = parseInt(cardCost);
    localStorage.setItem("totalCost", cardCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

// kad duomenis is mano localShop atspausdintu i card.html
function displayCard() {
  let cartItems = localStorage.getItem("product");
  let cardCost = localStorage.getItem("totalCost");
  //  kai is json pajamame localStor turime ji paversti i narmalu js obijekta
  cartItems = JSON.parse(cartItems);

  let proctuctContainer = document.querySelector(".products");
  if (cartItems && proctuctContainer) {
    proctuctContainer.innerHTM = "";
    Object.values(cartItems).map((product) => {
      proctuctContainer.innerHTML += `<div class="product_to_sold">
    <div><img class="souce_img_cart" src="assets/img/${product.tag}.jpg"></div>
    <div>${product.name}</div>
    <div>${product.price},00€‎</div>
    <div> ${product.inCart} vnt,‎</div> 
    <div>${product.inCart * product.price},00€‎</div>
    <button class="cart_delet">Trinti</button>
    </div>`;
    });
    proctuctContainer.innerHTML += `
  <div class="total_container">
  <h5 class="total_title">Iš viso:<h5>
  <h4 class="total_sum">${cardCost},00€‎</h4>
  </div>`;
  };
};

// paleidziame funkcija, kad uzsikrovus puslapiui krepselio nr sutaptu su localStorage nr
onLoadCartNr();
displayCard();

