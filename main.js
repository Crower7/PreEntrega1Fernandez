const contenidoDeLaTienda = document.querySelector('#contenidoTienda');
const verCarrito = document.querySelector('#verCarrito');
const ventanaCarritoD =document.querySelector('#ventanaCarritoContenedor');


let carrito= [];


productos.forEach((ropa) => {
    let content = document.createElement("div"); // crear un div
        content.className = "div_ropa";     // class a cada div para el css

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

verCarrito.addEventListener("click", () => {

    const ventanaCarrito = document.createElement("div");
        ventanaCarrito.className = "ventanaCarritoCss"
        ventanaCarrito.innerHTML = `
        <h1 class = "ventanaCarrito_Titulo">Carrito</h1>
        `;
        ventanaCarritoD.append(ventanaCarrito);

        const botonCerrarVentana = document.createElement ("h1");
            botonCerrarVentana.innerText = "X";
            botonCerrarVentana.className = "CerrarVentanaBoton";

            ventanaCarrito.append(botonCerrarVentana);
})