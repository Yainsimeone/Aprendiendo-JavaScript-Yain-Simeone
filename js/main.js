//let mensaje1 = "este es mi primer mensaje"
//let mensaje2 = "este es mi segundo mensaje"

//console.log(mensaje1 + " " + mensaje2)

//const edad = prompt("¿que edad tenes?")
//const preciodeentrada = prompt("la entrada cuesta 1000 ");

//if (edad >= 18 && preciodeentrada >= 1000) {
//console.log("bienvenido a nuetros bar");
//if (edad != 20) {
//    console.log("bienvenido tenes una promocion")
//}
//} else {
// console.log("no tenes edad para entrar o no tenes plata");
//}

const listadodenotas = [2, 8, 6]
listadodenotas[0]
listadodenotas[1]
listadodenotas[2]

let contadordenotas = 0;

for (let i = 0; i < 3; i++) {
    contadordenotas += listadodenotas[i]

}
const promedio = contadordenotas / 3;
console.log(promedio)

if (promedio >= 6) {
    console.log("estas aprobado")
} else {
    console.log("no aprobaste")
}