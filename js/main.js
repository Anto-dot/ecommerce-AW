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
