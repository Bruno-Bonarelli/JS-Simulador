function comprar () {

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
} 