const contenidoDeLaTienda = document.querySelector('#contenidoTienda');
const verCarrito = document.querySelector('#verCarrito');
const ventanaCarritoC = document.querySelector('#ventanaCarritoContenedor');


let carrito= [];


productos.forEach((productos) => {
    let content = document.createElement("div"); // crear un div
        content.className = "div_ropa";     // class a cada div para el css

        content.innerHTML = `                        
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p class= "parrafo" >${productos.precio} $ </p>
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

