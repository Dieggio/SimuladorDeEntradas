    let nombre = prompt ("Ingrese Nombre")
    alert ("Bienvenido: " + nombre);

let seleccioneClub = Number(prompt("seleccione el club deseado \n 1 - River \n 2 - Boca \n 3 - Racing \n 4 - Independiente"));

const River = 2000
const Boca = 2000
const Racing = 2000
const Independiente = 2000

let seleccioneCantidadDeEntradas = parseInt(prompt("seleccione cantidad de entradas"));
let seleccioneCantidadDePartidos = parseInt(prompt("cantidad de partidos"));
let unPartido = 2000
let dosPartidos = 4000
let tresPartidos = 6000
let cuatroPartidos = 8000



function precioTotal (precio, entradas){
    
    alert("estas confirmando la compra por "  + seleccioneCantidadDeEntradas + " " + " tickets para ver ")     
}

if ((seleccioneCantidadDeEntradas)){
    switch (seleccioneCantidadDeEntradas){
        case 1:
            if ((seleccioneClub >=1 && seleccioneCantidadDeEntradas))
            precioTotal(River, seleccioneCantidadDeEntradas);
            alert("El valor a abonar es de $2000")
        break;
        case 2:
            if ((seleccioneClub >=2 && seleccioneCantidadDeEntradas))
            precioTotal(River, seleccioneCantidadDeEntradas);
            alert("El valor a abonar es de $4000")
        break;
        case 3:
            if ((seleccioneClub >=3 && seleccioneCantidadDeEntradas))
            precioTotal(River, seleccioneCantidadDeEntradas);
            alert("El valor a abonar es de $6000")
        break;
        case 4:
            if ((seleccioneClub >=4 && seleccioneCantidadDeEntradas))
            precioTotal(River, seleccioneCantidadDeEntradas);
            alert("El valor a abonar es de $8000")
        break;

    }
}

