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


function igresarNombre() {
    let nombreingresado = prompt("igresa nombre");
    console.log("su nombre ingresado es: " + nombreingresado);
}
igresarNombre();
igresarNombre();
igresarNombre();

function agregarAlCarrito(producto, stock) {
    console.log("agregaste al carrito " + producto);
}


agregarAlCarrito("celular samsung A03, 10");
agregarAlCarrito("celular samsung A50, 5");
agregarAlCarrito("celular samsung A12, 15");


function stock(stock) {
    if (stock > 0) {
        return 'tenemos stock'
    } else {
        return 'no tenemos stock'

    }


}