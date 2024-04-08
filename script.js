// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const productList = document.getElementById("product-list");

    let total = 0;

    function updateCartTotal() {
        let cartTotalAmount = 0;
        const items = cartItems.querySelectorAll("li");
        items.forEach(item => {
            cartTotalAmount += parseFloat(item.dataset.price);
        });
        total = cartTotalAmount; // Actualizamos el total global
        cartTotal.textContent = `$${cartTotalAmount.toFixed(2)}`;
    }

    function addToCart(itemName, itemPrice) {
        const item = document.createElement("li");
        item.dataset.name = itemName;
        item.dataset.price = itemPrice;
        item.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Eliminar";
        removeButton.classList.add("remove-from-cart-btn");
        removeButton.addEventListener("click", function() {
            cartItems.removeChild(item);
            updateCartTotal();
        });
        item.appendChild(removeButton);
        cartItems.appendChild(item);
        updateCartTotal();
    }

    productList.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart-btn")) {
            const product = event.target.parentNode;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);
            addToCart(productName, productPrice);
        }
    });

    checkoutBtn.addEventListener("click", function() {
        alert("Compra realizada por $" + total.toFixed(2));
        // Aquí podrías enviar los datos del carrito al servidor para procesar la compra
    });
});

/*Carrusel*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 5000); // Cambiar cada 2 segundos (2000 milisegundos)
}

   function agregarAlCarrito() {
            // Aquí puedes simular añadir el artículo al carrito
            // Puedes utilizar AJAX para enviar datos al servidor y manejar la lógica de añadir al carrito
            alert('Producto añadido al carrito');
        }

/*Comentarios*/
 // JavaScript para animar el reel de comentarios
  document.addEventListener('DOMContentLoaded', function() {
    const comentarios = document.querySelectorAll('.comentario');
    let index = 0;

    setInterval(() => {
      comentarios[index].classList.remove('active');
      index = (index + 1) % comentarios.length;
      comentarios[index].classList.add('active');
    }, 5000); // Cambia el comentario cada 5 segundos (5000 milisegundos)
  });

