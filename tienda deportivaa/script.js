/* ===================================
   E-COMMERCE & RETAIL DEPORTIVO
   Dominio: Tienda de Equipamiento Deportivo
=================================== */

// ====== CATÁLOGO DE PRODUCTOS ======
const products = [
  { id: 1, name: "Balón Profesional", category: "futbol", price: 120000, stock: 10 },
  { id: 2, name: "Zapatillas Running", category: "running", price: 320000, stock: 8 },
  { id: 3, name: "Guantes de Gimnasio", category: "gym", price: 85000, stock: 15 },
  { id: 4, name: "Camiseta Deportiva", category: "futbol", price: 95000, stock: 20 }
];

// ====== ESTADO GLOBAL ======
let cart = [];

// ====== ELEMENTOS DOM ======
const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cartItems");
const totalElement = document.getElementById("total");
const countElement = document.getElementById("count");

// ====== RENDER PRODUCTOS ======
function renderProducts() {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Categoría: ${product.category}</p>
      <p>Precio: $${product.price.toLocaleString()}</p>
      <p>Stock: ${product.stock}</p>
      <button onclick="addToCart(${product.id})">
        Agregar al carrito
      </button>
    `;

    productContainer.appendChild(div);
  });
}

// ====== AGREGAR AL CARRITO ======
function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product || product.stock <= 0) {
    alert("Producto sin stock disponible");
    return;
  }

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  product.stock--;
  updateCart();
  renderProducts();
}

// ====== ELIMINAR DEL CARRITO ======
function toggleCart(){
  document.getElementById("cartPanel").classList.toggle("active");
}


  if (!item) return;

  product.stock += item.quantity;
  cart = cart.filter(p => p.id !== id);

  updateCart();
  renderProducts();


// ====== ACTUALIZAR CARRITO ======
function updateCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toLocaleString()}</span>
        <button onclick="removeFromCart(${item.id})">❌</button>
      </div>
    `;
  });

  totalElement.textContent = total.toLocaleString();
  countElement.textContent = cart.length;
}

// ====== FINALIZAR COMPRA ======
function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  alert("Compra realizada con éxito 🏆 ¡Gracias por tu compra!");
  cart = [];
  updateCart();
  renderProducts();
}

// ====== EXPONER FUNCIONES ======
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;

// ====== INICIALIZAR ======
renderProducts();
