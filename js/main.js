function Init(){
    carritoDeCompras()
}

function carritoDeCompras(){
    const buyBtnInfine = document.querySelector("#buyButtonInfine");
    buyBtnInfine.addEventListener("click", ()=>{

        const buyAlertInfine = document.querySelector("#alertCarritoInfine");
        buyAlertInfine.innerHTML += `<br><small>✓ "Infine" agregado al carrito</small>`;
    })

    const buyBtnAmon = document.querySelector("#buyButtonAmon");
    buyBtnAmon.addEventListener("click", ()=>{

        const buyAlertAmon = document.querySelector("#alertCarritoAmon");
        buyAlertAmon.innerHTML += `<br><small>✓ "Amón" agregado al carrito</small>`;
    })

    const buyBtnWaves = document.querySelector("#buyButtonWaves");
    buyBtnWaves.addEventListener("click", ()=>{

        const buyAlertWaves = document.querySelector("#alertCarritoWaves");
        buyAlertWaves.innerHTML += `<br><small>✓ "Waves" agregado al carrito</small>`;
    })

    const buyBtnBlock = document.querySelector("#buyButtonBlock");
    buyBtnBlock.addEventListener("click", ()=>{

        const buyAlertBlock = document.querySelector("#alertCarritoBlock");
        buyAlertBlock.innerHTML += `<br><small>✓ "Block" agregado al carrito</small>`;
    })

    const buyBtnCircular = document.querySelector("#buyButtonCircular");
    buyBtnCircular.addEventListener("click", ()=>{

        const buyAlertCircular = document.querySelector("#alertCarritoCircular");
        buyAlertCircular.innerHTML += `<br><small>✓ "Ciruclar" agregado al carrito</small>`;
    })

    const buyBtnVoronoi = document.querySelector("#buyButtonVoronoi");
    buyBtnVoronoi.addEventListener("click", ()=>{

        const buyAlertVoronoi = document.querySelector("#alertCarritoVoronoi");
        buyAlertVoronoi.innerHTML += `<br><small>✓ "Voronoi" agregado al carrito</small>`;
    })
}








//CODIGO VIEJO
/* class Anillo {
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
    let anillo = anillos.find((producto) => producto.nombre === anilloElegido)
    if(anillo) {
        precioTotal += anillo.precio;
    } else {
        alert("El anillo no existe")
    }
    alert ("$"+ precioTotal)

    anilloElegido = prompt("Introduzca el nombre del anillo que que quiera agregar al carrito. Para abandonar escriba: salir");
}

alert ("$" + precioTotal); */