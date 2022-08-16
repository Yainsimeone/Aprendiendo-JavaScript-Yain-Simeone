//*carrito!
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//*producto!!!
const producto = [{
        id: 123,
        nombre: 'samsung A03',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 5000,
        categoria: 'Samsung',
    },
    {
        id: 124,
        nombre: 'samsung A05',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 7000,
        categoria: 'Samsung',
    },
    {
        id: 125,
        nombre: 'iphone 11',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 8000,
        categoria: 'Iphone',
    },
    {
        id: 126,
        nombre: 'Samsung A09',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 9000,
        categoria: 'Samsung',
    },
    {
        id: 127,
        nombre: 'Samsung A13',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Samsung',
    },
    {
        id: 128,
        nombre: 'Motorola e40',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Motorola',
    },
    {
        id: 129,
        nombre: 'Motorola e20',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Motorola',
    },
    {
        id: 130,
        nombre: 'iphone 8',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Iphone',
    },
    {
        id: 131,
        nombre: 'Acatel 5h',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'acatel',
    },
    {
        id: 132,
        nombre: 'iphone x',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Iphone',
    },
    {
        id: 133,
        nombre: 'Motorola g22',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Motorola',
    },
    {
        id: 134,
        nombre: 'samsung a53',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Samsung',
    },
    {
        id: 135,
        nombre: 'Xiaomi redmi 9A',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Xiaomi',
    },
    {
        id: 136,
        nombre: 'Motorola moto E32',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Motorola',
    },
    {
        id: 137,
        nombre: 'Samsung Galaxy S22',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Samsung',
    },
    {
        id: 138,
        nombre: 'IPhone 13',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Iphone',
    },
    {
        id: 139,
        nombre: 'Xiaomi 12 Pro',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Xiaomi',
    },
    {
        id: 140,
        nombre: 'Xiaomi Mi 11T Pro',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Xiaomi',
    },
    {
        id: 141,
        nombre: 'IPhone 11',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Iphone',
    },

    {
        id: 142,
        nombre: ' IPhone 12',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Iphone',
    }, {
        id: 143,
        nombre: 'Nokia XR20',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Nokia',
    },
    {
        id: 144,
        nombre: 'Alcatel 5H',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Alcatel',
    },
    {
        id: 145,
        nombre: 'Huawei P50',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Huawei',
    },
    {
        id: 146,
        nombre: 'Moto G Power',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Motorola',
    },

    {
        id: 147,
        nombre: 'Samsung Galaxy S22',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Samsung',
    },
    {
        id: 148,
        nombre: 'Acatel h3',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000,
        categoria: 'Acatel',
    },

]

//*agregando cards!!!

let card = "";

producto.forEach((producto) => {
    const idButton = `add-card${producto.id}`;
    document.getElementById("cards-nuevas").innerHTML += `
    <div class="col mb-5">
                    <div class="card h-100">
                    <!-- Product image-->
                        <img class="card-img-top" src=${producto.img}>
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${producto.nombre}</h5>
                            <!-- Product price-->
                                $${producto.precio}
                                </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                            <a id="${idButton}"class="btn btn-outline-dark mt-auto">Agregar al carrito</a>
                            </div>
                            </div>
                    </div>
                </div>
    `

});

producto.forEach((producto) => {
    const idButton = `add-card${producto.id}`;
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("total-carrito").innerHTML = `${carrito.length} - $${totalCarrito} `
        swal({
            title: `Agregaste al carrito 
            ${producto.nombre}`,
            text: "Click en el boton para seguir comprando!",
            icon: "success",
            button: "yes!",
        });
        console.log(totalCarrito);
    })
})

const totalCarrito = carrito.reduce((acumulador, _Carrito) => acumulador + producto.precio, 0);
document.getElementById('total-carrito').innerHTML = `${carrito.length} - $${totalCarrito}`;

//*filtar categorias!!!

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')) {
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria');
        filtrarProductosPorCatergoria(categoria)
    }
}

function filtrarProductosPorCatergoria(categoria) {
    document.getElementById("cards-nuevas").innerHTML = card;
    const productoFiltrados = producto.filter((producto) => producto.categoria === categoria);
    productoFiltrados.forEach((producto) => {
        const idButton = `add-card${producto.id}`;
        document.getElementById("cards-nuevas").innerHTML += `
        <div class="col mb-5">
                        <div class="card h-100">
                        <!-- Product image-->
                            <img class="card-img-top" src=${producto.img}>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${producto.nombre}</h5>
                                <!-- Product price-->
                                    $${producto.precio}
                                    </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                <a id="${idButton}"class="btn btn-outline-dark mt-auto">Agregar al carrito</a>
                                </div>
                                </div>
                        </div>
                    </div>
        `
    });

    //*agregando producto filtrado al carrito!

    productoFiltrados.forEach((producto) => {
        const idButton = `add-card${producto.id}`;
        document.getElementById(idButton).addEventListener('click', () => {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
            document.getElementById("total-carrito").innerHTML = `${carrito.length} - $${totalCarrito} `
                // 
            swal({
                title: `Agregaste al carrito 
                    ${producto.nombre}`,
                text: "Click en el boton para seguir comprando!",
                icon: "success",
                button: "yes!",
            });

            console.log(totalCarrito);
        })
    })
}

//*agregando popup */
carrito.forEach((producto) => {
    document.getElementById("button-carrito").innerHTML += ""
    const idButton = `add-card${producto.id}`;
    document.getElementById("button-carrito").innerHTML +=
        `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">${producto.nombre}</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
       ${producto.img}
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary">Save changes</button>
     </div>
   </div>
 </div>
</div>`
        //     `<div class="card-body">
        //     <h5 class="card-title">${producto.nombre}</h5>
        //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //     <p class="card-text"><small class="text-muted">${producto.precio}</small></p>
        //   </div>
        //   <img src=${producto.img} class="card-img-bottom" alt="...">
        // </div>
        //     `

});


// carrito.forEach((carrito) => {
//     const idButton = document.getElementById("button-carrito")
//     idButton.addEventListener('click', () => {
//         idButton.innerHTML +=
//             ` <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h5 class="modal-title">${producto.precio}</h5>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   <p>Modal body text goes here.</p>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                   <button type="button" class="btn btn-primary">Save changes</button>
//                 </div>
//               </div>
//             </div>
//      `

//         console.log(idButton)
// carrito.push(producto);
// localStorage.setItem("carrito", JSON.stringify(carrito));
// const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// document.getElementById("total-carrito").innerHTML = `${carrito.length} - $${totalCarrito} `
// alert("Agregaste al carrito" + " " + producto.nombre)
// console.log(totalCarrito);
//     })
// })