const contenidoDeLaTienda = document.querySelector('#contenidoTienda');
const verCarrito = document.querySelector('#verCarrito');
const ventanaCarritoC = document.querySelector('#ventanaCarritoContenedor');


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
        ventanaCarritoC.append(ventanaCarrito);

        const botonCerrarVentana = document.createElement ("h1");
            botonCerrarVentana.innerText = "X";
            botonCerrarVentana.className = "cerrarVentanaBoton";

            ventanaCarrito.append(botonCerrarVentana);

            carrito.forEach((productos) =>{

            
            let carritocontent = document.createElement("div")

            carritocontent.className = "contenido_carrito"
            carritocontent.innerHTML =  `
                <h3>${productos.nombre}</h3>
                <p>${productos.precio} $ </p>
            `;
                ventanaCarritoC.append(carritocontent);
        });
});