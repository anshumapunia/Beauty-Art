const containerElement = document.querySelector('.productData');
const sortElement = document.querySelector('#sort');
const filterElement = document.querySelector('#filter');

function displayProducts() {
  fetch("https://gold-elated-turtle.cyclic.app/product/")
    .then(response => response.json())
    .then(data => {
      display(data)
    })
    .catch(error => {
      console.error(error);
    });
}
displayProducts()
function display(data) {
  containerElement.innerHTML = "";

  if (Array.isArray(data)) {
    data.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.classList.add("product-image");
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement("h2");
      nameElement.classList.add("product-name");
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);

      const titleElement = document.createElement("p");
      titleElement.classList.add("product-title");
      titleElement.textContent = `${product.title}`;
      productElement.appendChild(titleElement);

      const priceElement = document.createElement("h2");
      priceElement.classList.add("product-price");
      priceElement.textContent = `₹${product.price}`;
      productElement.appendChild(priceElement);




      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Add to Cart";
      buttonElement.addEventListener("click", () => {
        addToCart(product);
      });
      productElement.appendChild(buttonElement);

      containerElement.appendChild(productElement);
    });
  }

}


const sortSelect = document.getElementById('sort1');

sortSelect.addEventListener('change', async () => {
  const selectedSort = sortSelect.value;

  try {
    let res = await fetch("https://gold-elated-turtle.cyclic.app/product/");
    let result = await res.json();
 
    if (selectedSort === 'asc') {
      let arr = result.sort((a, b) => {
        return a.price - b.price
      });
      display(arr)
    } else {
      let arr = result.sort((a, b) => {
        return b.price - a.price
      });
      display(arr)
    }

  } catch (error) {
    console.error(error);
  }
  ;
});






function addToCart(product) {

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];



product.quantity=1
console.log(product)
cartItems.push(product);


localStorage.setItem('cartItems', JSON.stringify(cartItems));

console.log(`Product "${product.name}" added to cart`);
alert("Product added to cart successfully");
}



const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
  link.addEventListener('click', function() {
 
    navLinks.forEach(link => link.classList.remove('active'));
  
    link.classList.add('active');
  });
});


const backToTopButton = document.getElementById('back');

backToTopButton.addEventListener('click', function() {

  window.scrollTo({ top: 0, behavior: 'smooth' });
});