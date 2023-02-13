const contenidoDeLaTienda = document.querySelector("#contenidoTienda");
const verCarrito = document.querySelector("#verCarrito");
const ventanaCarritoC = document.querySelector("#ventanaCarritoContenedor");
const cantidadCarrito = document.querySelector("#cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];    // recupera los elementos del localStorage 

productos.forEach((productos) => {
  let content = document.createElement("div"); // crear un div
  content.className = "div_ropa"; // class a cada div para el css

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
    const noRepeat = carrito.some(
      (productoRepetido) => productoRepetido.id === productos.id
    );
    if (noRepeat === true) {
      carrito.map((prod) => {
        if (prod.id === productos.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        nombre: productos.nombre,
        precio: productos.precio,
        id: productos.id,
        cantidad: productos.cantidad,
      });
    }
    console.log(carrito);
    carritoContador();
    carritoStorage();
  });
});

const carritoStorage = () => {
localStorage.setItem("carrito",JSON.stringify(carrito));    //me pasa el array de objeto del carrito en string al localStorage
}

