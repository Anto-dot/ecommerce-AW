const carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor =
document.getElementById("carrito");

carrito.forEach(producto => {

    contenedor.innerHTML += `
    <div class="card">
        <img src="${producto.imagen}">
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <h4>$${producto.precio}</h4>
    </div>
    `;
});
