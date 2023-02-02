



//     //alert("Hola soy Sergio, Bienvenido a mi tienda!");

//  //let seleccion = prompt('desea comprar algun producto? si o no?')

// //while (seleccion != "si" && seleccion != "no") {
//     //alert("por favor ingrese la opción si o no")
//     //seleccion = prompt('desea comprar algun producto? si o no?')
// //}

// if (seleccion == "si") {
//     alert("a continuacion voy a mostrarle una lista con nuestros productos")
//     let todosLosProductos = productos.map(
//         (productos) => productos.nombre + " " + productos.precio + "$"
//     );
//         alert(todosLosProductos.join(" - "))

// }   else if (seleccion == "no") {
//         alert("gracias por venir, hasta pronto!!")
// }


// while (seleccion !="no") {
    
//   let  productos = prompt ("¿Que queres comprar?, remera, pantalon, short o musculosa?", "elija una opción");
//     let precio = 0

//     if (productos === 'remera' || productos === 'musculosa' || productos === 'pantalon' || productos === 'short') {

//           switch (productos) {
//          case 'remera':
//              precio = 1600;
//              break;
//          case "musculosa":
//              precio = 1400;
//              break;
//          case "pantalon":
//              precio = 2500;
//              break;
//          case "short":
//              precio = 2100;
//              break;
//          default:
//             alert("por favor elija una de las opciones especificadas"); 
//              precio= 0;
//              cantidad= 0;

//      }

//      let cantidad = parseInt(prompt ("¿Cuántos querés comprar?"))

//      carrito.push({productos, cantidad, precio})
//      console.log(carrito)

//     } else {
//         alert('no tenemos ese producto')
//     }

//     seleccion= prompt('desea seguir comprando?')

//     while (seleccion === "no") {
//         alert('gracias por la compra! adios')
//         carrito.forEach((carritoFinal) => {
//             alert(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.cantidad},
//             el total a pagar es de ${carritoFinal.cantidad * carritoFinal.precio}`)
//         })
//         break;
//     }

// }

// const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.cantidad, 0)
// alert (`el total a pagar por su compra es: ${total}$` )

                  

//  let envio= confirm('quiere usar nuestro servicio de envio?');
//     if (envio) {
//     alert('el envio se le cobrara 500$ adicional' )
//      function envioo () {
//         return total + 500;
//      }
//      alert ('la tarifa total seria de $'+envioo())
//  } else {'disculpe las molestias'};


