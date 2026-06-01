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
function eliminarProducto(id)
{
    let carrito =
    JSON.parse(localStorage.getItem("carrito"));

    carrito = carrito.filter(
        producto => producto.id !== id
    );

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    location.reload();
}
