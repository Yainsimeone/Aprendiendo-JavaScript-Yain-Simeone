const carrito = JSON.parse(localStorage.getItem('carrito')) || []; // si ago ?? [] me tira error porque?



const producto = [{
        id: 123,
        nombre: 'samsung A03',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 5000
    },
    {
        id: 124,
        nombre: 'samsung A05',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 7000
    },
    {
        id: 125,
        nombre: 'samsung A08',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 8000
    },
    {
        id: 126,
        nombre: 'samsung A09',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 9000
    },
    {
        id: 127,
        nombre: 'samsung A13',
        img: 'https://www.clarin.com/img/2022/03/17/samsung-galaxy-a53-5g-y___DidRw147G_340x340__1.jpg',
        precio: 10000
    },
]

let card = "";

producto.forEach((producto) => {
    const idButton = `add-card${producto.id}`;
    card += `
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
                                ${producto.precio}
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
document.getElementById("cards-nuevas").innerHTML = card

producto.forEach((producto) => {
    const idButton = `add-card${producto.id}`;
    document.getElementById(idButton).addEventListener('click', (even) => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("total-carrito").innerHTML = `${carrito.length} - $${totalCarrito} `
        alert("Agregaste al carrito" + " " + producto.nombre)
        console.log(totalCarrito);
    })
})
const totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + producto.precio, 0);
document.getElementById("total-carrito").innerHTML = `${carrito.length} - $ ${totalCarrito}`;
console.log(totalCarrito)