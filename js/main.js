//let mensaje1 = "este es mi primer mensaje"
//let mensaje2 = "este es mi segundo mensaje"

//console.log(mensaje1 + " " + mensaje2)

//const edad = prompt("¿que edad tenes?")
//const preciodeentrada = prompt("la entrada cuesta 1000 ");

//if (edad >= 18 && preciodeentrada >= 1000) {
//console.log("bienvenido a nuetros bar");
//if (edad != 20) {
//   console.log("bienvenido tenes una promocion")
//}
//} else {
//console.log("no tenes edad para entrar o no tenes plata");
//}

//const listadodenotas = [2, 8, 6]
//listadodenotas[0]
//listadodenotas[1]
//listadodenotas[2]

//let contadordenotas = 0;

//for (let i = 0; i < 3; i++) {
//  contadordenotas += listadodenotas[i]

//}
//const promedio = contadordenotas / 3;
//console.log(promedio)

//if (promedio >= 6) {
//  console.log("estas aprobado")
//} else {
//   console.log("no aprobaste")
//}

//const equipo = prompt("de que esquipo sos?")

//switch (equipo) {
//   case "Boca":
//    console.log("sos bostero!!, te quedaste fuera de la libertadores!!");
//   break;
//case "river":
//  console.log("sos gallina!!, te quedaste fuera de la libertadores!!");
//break;
//case "racing":
//  console.log("sos de la academia, pecho frio");
//break;
//case "rosario central":
//  console.log("sos incha del canalla, come gato!");
//break;
// case "san lorenzo":
//   console.log("sos un cuervo, no le ganan a nadie muertos!");
// break;
//case "talleres":
//  console.log("sos del matador!, estan entre los 8 mejores de la libertadores");
//break;
//default:
//  console.log("no te conoce nadie")
//}


// function igresarNombre() {
//     let nombreingresado = prompt("igresa nombre");
//     console.log("su nombre ingresado es: " + nombreingresado);
// }
// igresarNombre();
// igresarNombre();
// igresarNombre();

// function agregarAlCarrito(producto, stock) {
//     console.log("agregaste al carrito " + producto);
// }


// agregarAlCarrito("celular samsung A03, 10");
// agregarAlCarrito("celular samsung A50, 5");
// agregarAlCarrito("celular samsung A12, 15");


// function stock(stock) {
//     if (stock > 0) {
//         return 'tenemos stock'
//     } else {
//         return 'no tenemos stock'

//     }


// }
// const array = ['alto', 1, 'flaco']
// array.push('otro elemento')

// console.log(array.length)
// console.log(array)
// const nombres = ['katy', 'piero', 'ambar', 'yain', 'andrea', 'leo', ]
// nombres.splice(0, 1)
// console.log(nombres)
// console.log(nombres.indexOf('yain'))
// console.log(nombres.includes('piero'))
// console.log(nombres.includes('katy'))

// console.log(new Date())
// const carrito = []


// function agregarAlCarrito(producto) {
//     carrito.push(producto)
//     console.log(carrito)
// }

// agregarAlCarrito({ id: 123, nombre: 'samsunga03', precio: 5000 })
// agregarAlCarrito({ id: 124, nombre: 'samsunga05', precio: 7000 })
// agregarAlCarrito({ id: 125, nombre: 'samsunga08', precio: 8000 })
// agregarAlCarrito({ id: 126, nombre: 'samsunga09', precio: 9000 })
// agregarAlCarrito({ id: 127, nombre: 'samsunga13', precio: 10000 })

// function borrar(iddelproducto, precio) {
//     const indexOf = carrito.findIndex(producto => producto.id === iddelproducto);
//     carrito.splice(indexOf, 1);
//     console.log(carrito)
// }
// borrar(125)
// borrar(9000)

// numeros.forEach((numeros) => {
//     console.log(numeros * 2)
// })

// const result = carrito.find((el) => el.precio === 7000)
// console.log(result)

// const actualizando = carrito.map((el) => {
//     return { nombre: el.nombre, precio: el.precio * 1.5 }
// })
// console.log(actualizando)


// const total = carrito.reduce((acc, el) => acc + el.precio, 0)

// console.log(total)

// console.log((Math.round(1) * 20) + 50) //porque me dice en la consola siempre me tira 70?

const carrito = []

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
    document.getElementById(idButton).addEventListener('click', (event) => {
        carrito.push(producto);
        console.log(carrito)
        alert("Agregaste al carrito" + " " + producto.nombre)
    })
})