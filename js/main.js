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







/* let este = anillos.some((x)=> x.nombre.indexOf (anilloElegido)!==-1); */







/* console.log (devolverProducto)
let precio;
let precioTotal= 0; */

/* while (anilloElegido != "salir"){
    precio= devolverPrecio.precio;
    if (precio!=-1){
        precioTotal+= precio;
    }

} */





/* function devolverPrecio (anilloElegido) {
    for (let i = 0; i < anillos.length; i++) {
        if(anillos[i].nombre == anilloElegido) {
            return anillos[i].precio;
        }
        if (i== 5 && anillos[i]!== anilloElegido) {
            return -1
        }
    }
} */


/* let precioDelAnillo = anillos.find((producto)=>{
    if (producto.nombre===anilloElegido){
        precio=producto.precio
    }
}) */