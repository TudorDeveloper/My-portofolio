let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Smartwatch Samsung Galaxy Watch',
        tag: 'smartwatch',
        price: 1109,
        inCart: 0

    },

    {
        name: 'Smartwatch Samsung Galaxy Watch 3',
        tag: 'smartwatch3',
        price: 1349,
        inCart: 0

    },

    {
        name: 'Smartwatch Samsung Active',
        tag: 'smartwatch-active',
        price: 749,
        inCart: 0

    },

    {
        name: 'Smartwatch Samsung Active 2',
        tag: 'smartwatch-active2',
        price: 1049,
        inCart: 0

    },

]


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(product){
   
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, scazut='') {
    console.log("The product clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

   if( productNumbers ){
       if (scazut == ''){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
            localStorage.setItem('cartNumbers', productNumbers - 1);
            document.querySelector('.cart span').textContent = productNumbers - 1;
    }
   } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }  

    setItems(product, scazut);
}

function setItems(product, scazut='') {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        if (scazut == '')
        cartItems[product.tag].inCart += 1; 
        else {
            if (cartItems[product.tag].inCart > 1)
            cartItems[product.tag].inCart -= 1; 
        }
    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
    }   
}
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product, scazut='') {

    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null) {
        cartCost = parseInt(cartCost)
        if (scazut == '')
            localStorage.setItem("totalCost", cartCost + product.price);
        else 
            localStorage.setItem("totalCost", cartCost - product.price);
        
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
              <ion-icon name="close-circle" onclick="elimina('${item.tag}')"></ion-icon>
              <img src="./images/${item.tag}.jpg"></img>    
              <span>${item.name}</span>
              </div> 
              <div class="price">${item.price},00</div>
              <div class="quantity" >
              <ion-icon class="decrease" 
              name="caret-back-circle" onclick="scade('${item.tag}')"></ion-icon>
              <span>${item.inCart}</span>
              <ion-icon class="increase" 
              name="caret-forward-circle" onclick="adauga('${item.tag}')"></ion-icon>
              </div>
              <div class="total">
                $${item.inCart * item.price},00
              </div>
              `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle>
                 Basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCost},00
            </h4>
        </div>
        `;

    }
}

onLoadCartNumbers();
displayCart();

function openSmartwatch(evt, smartwatchName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(smartwatchName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/*------------------- Galerie de imagini -------------------*/

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Set first img opacity


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity 
    imgs.forEach(img => (img.style.opacity = 1));

    // Change  current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    //Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}   

/*------------------- Validare formular -------------------*/
/*------------------- Camp de e-mail ----------------------*/

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}


/*------------------- Buton de submit ----------------------*/

var check = document.getElementById('bifa')
var send = document.getElementById('abc')

function verifica2(){
   if (check.checked == true ){
       send.removeAttribute('disabled')
   } else {
       send.setAttribute('disabled','disabled')
   }
}

