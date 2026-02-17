let carrito = [];
let total = 0;

const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(id).classList.add('activa');
}


function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        const item = document.createElement("li");
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio.toLocaleString()}
            <button onclick="eliminarProducto(${index})">❌</button>
        `;
        listaCarrito.appendChild(item);
    });

    totalTexto.textContent = `Total: $${total.toLocaleString()}`;
}
function hacerPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let facturaHTML = "<h3>Factura</h3><ul>";

    carrito.forEach(producto => {
        facturaHTML += `<li>${producto.nombre} - $${producto.precio.toLocaleString()}</li>`;
    });

    facturaHTML += `</ul><p><strong>Total a pagar: $${total.toLocaleString()}</strong></p>`;

    const facturaDiv = document.getElementById("factura");
    facturaDiv.innerHTML = facturaHTML;
    facturaDiv.classList.remove("oculto");
}

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(id).classList.add('activa');
}

function hacerPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let facturaHTML = "<h3>Factura</h3><ul>";

    carrito.forEach(producto => {
        facturaHTML += `<li>${producto.nombre} - $${producto.precio.toLocaleString()}</li>`;
    });

    facturaHTML += `</ul><p><strong>Total: $${total.toLocaleString()}</strong></p>`;

    const factura = document.getElementById("factura");
    factura.innerHTML = facturaHTML;
    factura.classList.remove("oculto");
}

function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(id).classList.add('activa');
}

function hacerPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let facturaHTML = "<h3>Factura</h3><ul>";

    carrito.forEach(producto => {
        facturaHTML += `<li>${producto.nombre} - $${producto.precio.toLocaleString()}</li>`;
    });

    facturaHTML += `</ul><p><strong>Total: $${total.toLocaleString()}</strong></p>`;

    const factura = document.getElementById("factura");
    factura.innerHTML = facturaHTML;
    factura.classList.remove("oculto");
}



