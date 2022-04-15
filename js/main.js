function Init(){
    carritoDeCompras()
}

function carritoDeCompras(){
    const buyBtnInfine = document.querySelector("#buyButtonInfine");
    buyBtnInfine.addEventListener("click", ()=>{

        const pintarCarrito = document.querySelector("#tbody");
        pintarCarrito.innerHTML += `<td>$600</td>
        <td>Infine</td>`;

    });

    const buyBtnAmon = document.querySelector("#buyButtonAmon");
    buyBtnAmon.addEventListener("click", ()=>{

        const buyAlertAmon = document.querySelector("#tbody");
        buyAlertAmon.innerHTML += `<td>$650</td>
        <td>Amon</td>`;
    });

    const buyBtnWaves = document.querySelector("#buyButtonWaves");
    buyBtnWaves.addEventListener("click", ()=>{

        const buyAlertWaves = document.querySelector("#tbody");
        buyAlertWaves.innerHTML += `<td>$790</td>
        <td>Waves</td>`;
    });

    const buyBtnBlock = document.querySelector("#buyButtonBlock");
    buyBtnBlock.addEventListener("click", ()=>{

        const buyAlertBlock = document.querySelector("#tbody");
        buyAlertBlock.innerHTML += `<td>$690</td>
        <td>Block</td>`;
    });

    const buyBtnCircular = document.querySelector("#buyButtonCircular");
    buyBtnCircular.addEventListener("click", ()=>{

        const buyAlertCircular = document.querySelector("#tbody");
        buyAlertCircular.innerHTML += `<td>$800</td>
        <td>Circular</td>`;
    });

    const buyBtnVoronoi = document.querySelector("#buyButtonVoronoi");
    buyBtnVoronoi.addEventListener("click", ()=>{

        const buyAlertVoronoi = document.querySelector("#tbody");
        buyAlertVoronoi.innerHTML += `<td>$710</td>
        <td>Voronoi</td>`;
    });
};

const datoCarrito = document.querySelector("#carrito");
localStorage.setItem("DATOS" , datoCarrito);