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



            carrito.forEach((productos) =>{     //contenido del carrito

            let carritoContent = document.createElement("div")
            carritoContent.className = "contenido_carrito"      
            carritoContent.innerHTML =  `
                <h3>${productos.nombre}</h3>
                <p>${productos.precio} $ </p>
                <p> carrito: ${productos.cantidad}
            `;
                ventanaCarritoC.append(carritoContent);

                let eliminar = document.createElement("span");      //boton para eliminar el producto
                eliminar.innerText=("❌")
                eliminar.className="delete-product"
                carritoContent.append(eliminar);

                eliminar.addEventListener("click",eliminarProducto);    //al hacer click se ejeuta la F (eliminarProducto)
        });

        const totalCarrito = carrito.reduce((acu,el) => acu + el.precio, 0)     //acu-acumulador , el-cada producto

        const total = document.createElement ("div");
            total.className = "total-content ";
            total.innerHTML = `total a pagar: ${totalCarrito} $ `;
            ventanaCarritoC.append(total);      // total a la ventana carrito
    };

    verCarrito.addEventListener("click",pintarCarrito);

        //eliminar productos del carrito
    const eliminarProducto = () =>{
        const founId = carrito.find((element) => element.id);

        carrito = carrito.filter((carritoId) =>{
            return carritoId !== founId;
        });
        pintarCarrito();
    };