const contenidoDeLaTienda = document.querySelector('#contenidoTienda')

let productos = [
    {id:1, nombre:'remera', precio:1600},
    {id:2, nombre:'musculosa', precio:1400},
    {id:3, nombre:'pantalon', precio:2500},
    {id:4, nombre:'short', precio:2100},
    ];

let carrito= [];

productos.forEach((ropa) => {
    let content = document.createElement("div"); // crear un div
        content.className = "div_ropa";

        content.innerHTML = `                        
        <img src="${ropa.img}">
        <h3>${ropa.nombre}</h3>
        <p class= "parrafo" >${ropa.precio} $ </p>
    `;

    contenidoDeLaTienda.append(content);

    let comprar = document.createElement("button"); // crear un boton 
        comprar.innerText = "Comprar"
        comprar.className = "boton_comprar";

            content.append(comprar);
})