const contenedor = document.getElementById("productos");

fetch("./data/productos.json")
.then(response => response.json())
.then(productos => {

    productos.forEach(producto => {

        contenedor.innerHTML += `
        <div class="card">
            <img src="${producto.imagen}">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <h4>$${producto.precio}</h4>

            <button onclick="agregarCarrito(${producto.id})">
                Agregar al carrito
            </button>
        </div>
        `;
    });

    window.listaProductos = productos;
});

function agregarCarrito(id)
{
    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    const producto =
        listaProductos.find(p => p.id === id);

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado");
}
const usuario = {
    nombre: "Antonella",
    email: "antonella@gmail.com"
};

sessionStorage.setItem(
    "usuario",
    JSON.stringify(usuario)
);
