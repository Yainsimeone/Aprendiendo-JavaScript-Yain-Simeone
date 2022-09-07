//* Traigo el valor en storage del carrito. 
let carrito = validarStorageCarrito();
let precioTotal = 0;

//* Actualizo el total del carrito. 

const totalCarrito = (arrayCarrito) => {
    precioTotal = 0;
    arrayCarrito.forEach((producto) => {
        precioTotal += producto.cantidadEnCarrito * producto.precio;
    });
};

totalCarrito(carrito);

//*  guardado en el storage. 

function validarStorageCarrito() {
    if (localStorage.getItem("carrito") != null) {
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    } else {
        return [];
    }
}

//*Actualizo la cantidad de items en el HTML del carrito. 

let acumuladorItems = 0;

const actualizarItemsCarrito = (arrayCarrito) => {
    acumuladorItems = 0;
    arrayCarrito.forEach((producto) => {
        acumuladorItems += producto.cantidadEnCarrito;
    });
    document.getElementById("total-carrito").innerHTML = acumuladorItems;
};

actualizarItemsCarrito(carrito);

function agregarAlCarrito(idProducto) {
    const productoEnCarrito = carrito.find(
        (producto) => producto.id == idProducto
    );
    const productoEnInventario = productos.find(
        (producto) => producto.id == idProducto
    );

    const productoParaAgregar = productoEnCarrito || productoEnInventario;

    if (productoParaAgregar.stock > productoParaAgregar.cantidadEnCarrito) {

        productoParaAgregar.cantidadEnCarrito++;
        productoEnCarrito == undefined && carrito.push(productoParaAgregar);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarItemsCarrito(carrito);

        //* Sweet alert 
        swal({
            title: `Agregaste ${productoEnInventario.nombre} a tu carrito`,
            text: "Ya casi es tuyo!",
            icon: "success",
            button: "Continuar comprando!",
        });
    } else {
        //* Sweet alert  
        swal({
            title: `No hay stock del producto ${productoEnInventario.nombre}`,
            text: "Lo sentimos!",
            icon: "error",
            button: "Continuar comprando!",
        });
    }
};

function reducirCarrito(idProducto) {
    const productoARemover = carrito.find(
        (producto) => producto.id == idProducto
    );

    if (productoARemover.cantidadEnCarrito > 1) {
        productoARemover.cantidadEnCarrito--;
        productoARemover.cantidadEnCarrito == 0 &&
            carrito.splice(carrito.indexOf(productoARemover), 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarItemsCarrito(carrito);
    }
};

function quitarCarrito(idProducto) {
    const productoARemover = carrito.find(
        (producto) => producto.id == idProducto
    );
    productoARemover.cantidadEnCarrito = 0;
    carrito.splice(carrito.indexOf(productoARemover), 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarItemsCarrito(carrito);
}