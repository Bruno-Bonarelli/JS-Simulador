/* function comprar () {

    let productoElegido = prompt ('Ingrese el nombre de modelo de anillo que quiere agregar al carrito. Si quiere salir en cualquier momento escriba: salir')
    
    let total = 0;
    
    while (productoElegido != 'salir') {
    
        switch ( productoElegido) {
            case 'infine':
                total += 600;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir')
                break;
            
            case 'amon':
                total += 650;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir');
                break;
            
            case 'waves':
                total += 790;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir');
            break;
            
            case 'block':
                total += 690;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir')
                break;
            
            case 'circular':
                total += 800;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir');
                break;
            
            case 'voronoi':
                total += 710;
                alert ('Carrito: $' + total);
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir');
                break;
            default : 
                alert ('El producto no existe');
                productoElegido = prompt ('Ingrese el modelo del anillo, si quiere salir en cualquier momento escriba: salir');
        }
    }
    alert("Carrito: $" + total);
}  */


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

console.log (anillo1)

const anillos = [anillo1, anillo2, anillo3, anillo4, anillo5, anillo6];

function devolverPrecio (anilloElegido) {
    for (let i = 0; i < anillos.length; i++) {
        if(anillos[i].nombre == anilloElegido) {
            return anillos[i].precio;
        }
        if (i== 5 && anillos[i]!== anilloElegido) {
            return -1
        }
    }
}

let precioTotal = 0;

let anilloElegido = prompt ("Introduzca el nombre del anillo");

let precio;

while (anilloElegido != "salir") {
    precio = devolverPrecio(anilloElegido);
    if (precio!= -1) {
        precioTotal += precio;
    }
    else {
        alert ("No existe ese anillo")
    }
    alert ("$" + precioTotal);
    anilloElegido = prompt ("Introduzca el nombre del anillo");
}

alert ("$" + precioTotal);


