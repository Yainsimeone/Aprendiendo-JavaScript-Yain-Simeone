itemsGeneradas(carrito);



function itemsGeneradas(itemsAMostrar) {
    let acumuladorItems = ``;
    itemsAMostrar.forEach((producto) => {
        acumuladorItems += `
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-md-3 text-left">
                        <img src="${producto.imagen}" alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                    </div>
                    <div class="col-md-9 text-left mt-sm-2 nom">
                        <h4>${producto.nombre}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Price">$ ${producto.precio}</td>
            <td data-th="Quantity">
            <span class="badge bg-dark text-white ms-1 rounded-pill" id="cantidad-producto">${producto.cantidadEnCarrito}</span>
            </td>
            <td class="actions" data-th="">
                <div class="text-right">

                    <button onclick="agregarAlCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-primary bg-white btn-md mb-2">
                        <i class="bi bi-plus h3"></i>
                    </button>

                    <button onclick="reducirCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-dash h3"></i>
                    </button>

                    <button onclick="quitarCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-trash h3"></i>
                    </button>

                </div>
            </td>
        </tr>`;
    });
    agregarItemsEnHTML(acumuladorItems);
}

function agregarItemsEnHTML(items) {
    document.getElementById("items-carrito").innerHTML = items;
}

document.getElementById("subtotal-carrito").innerHTML = `$ ${precioTotal}`;



function actualizarCantidad(idProducto) {
    itemsGeneradas(carrito);
    totalCarrito(carrito);
    document.getElementById("subtotal-carrito").innerHTML = `$ ${precioTotal}`;
}


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response) => response.json())
    .then(
        (data) =>
        (document.getElementById("dolar-blue").innerHTML = data[1].casa.venta)
    );