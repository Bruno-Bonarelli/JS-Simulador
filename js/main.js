class Anillo {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const anillo1 = new Anillo ("infine", 600)
const anillo2 = new Anillo ("amon", 650)
const anillo3 = new Anillo ("waves", 790)
const anillo4 = new Anillo ("block", 690)
const anillo5 = new Anillo ("circular", 800)
const anillo6 = new Anillo ("voronoi", 710)

const anillos = [anillo1, anillo2, anillo3, anillo4, anillo5, anillo6];

let precioTotal = 0;

let anilloElegido = prompt("Introduzca el nombre del anillo");

let precio;

while (anilloElegido != "salir") {
    let anillo = anillos.find((el) => el.nombre === anilloElegido)
    if(anillo) {
        precioTotal += anillo.precio;
    } else {
        alert("El anillo no existe")
    }
    alert ("$"+ precioTotal)

    anilloElegido = prompt("Introduzca el nombre del anillo que que quiera agregar al carrito. Para abandonar escriba: salir");
}

alert ("$" + precioTotal);