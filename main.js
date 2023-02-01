const contenidoDeLaTienda = document.querySelector('#contenidoTienda')


let carrito= [];

productos.forEach((ropa) => {
    let content = document.createElement("div"); // crear un div
        content.className = "div_ropa rotate-diagonal-br";

        content.innerHTML = `                        
        <img src="${ropa.img}">
        <h3>${ropa.nombre}</h3>
        <p class= "parrafo" >${ropa.precio} $ </p>
    `;

    contenidoDeLaTienda.append(content);

    let comprar = document.createElement("button"); // crear un boton 
        comprar.innerText = "Comprar";
        comprar.className = "shakeFix";

            content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            nombre: productos.nombre,
            precio: productos.precio,
        });
        console.log(carrito); 
    });
});