const pintarCarrito = () => {
    ventanaCarritoC.innerHTML= "";
    ventanaCarritoC.style.display = "flex";
    const ventanaCarrito = document.createElement("div");
        ventanaCarrito.className = "ventanaCarritoCss";
        ventanaCarrito.innerHTML = `
        <h1 class = "ventanaCarrito_Titulo">Carrito</h1>
        `;
        ventanaCarritoC.append(ventanaCarrito);

        const botonCerrarVentana = document.createElement ("h1");           //boton de cerrar 
            botonCerrarVentana.innerText = "X";
            botonCerrarVentana.className = "cerrarVentanaBoton";

            botonCerrarVentana.addEventListener("click", () =>{
                ventanaCarritoC.style.display = "none";
            });

            ventanaCarrito.append(botonCerrarVentana);



            carrito.forEach((productos) =>{

            let carritocontent = document.createElement("div")
            carritocontent.className = "contenido_carrito"
            carritocontent.innerHTML =  `
                <h3>${productos.nombre}</h3>
                <p>${productos.precio} $ </p>
            `;
                ventanaCarritoC.append(carritocontent);

                let eliminar = document.createElement("span");
                eliminar.innerText("❌")
                eliminar.className="delete-product"
        });

        const totalCarrito = carrito.reduce((acu,el) => acu + el.precio, 0)     //acu-acumulador , el-cada producto

        const total = document.createElement ("div");
            total.className = "total-content ";
            total.innerHTML = `total a pagar: ${totalCarrito} $ `;
            ventanaCarritoC.append(total);      // total a la ventana carrito
    };

    verCarrito.addEventListener("click",pintarCarrito);