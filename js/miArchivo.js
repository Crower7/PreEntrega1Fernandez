
let producto = "";
let cantidad = 0;
let total = 0;
let seguirComprando = false
let precio = 0;
let cantidadFinal = 0;


do {            // do para que lo meta una sola vez //
    producto = prompt ("¿Que queres comprar?, remera, pantalon, short o musculosa?", "Ej: remera");
    

            // pido los datos mediante un prompt ↑ //

        if (producto === 'remera' || producto === 'musculosa' || producto === 'pantalon' || producto === 'short') {
            
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

        
        }
        //else { alert("por favor elija una de las opciones especificadas en los ejemplos")}

      
    
    switch (producto) {
        case 'remera':
            precio = 1600;
            break;
        case "musculosa":
            precio = 1400;
            break;
        case "pantalon":
            precio = 2500;
            break;
        case "short":
            precio = 2100;
            break;
        default:
            alert("por favor elija una de las opciones especificadas");  //1
            precio= 0;
            cantidad= 0;

        
    }

    total += precio*cantidad;
    cantidadFinal += cantidad;

    seguirComprando = confirm("¿Querés agregar otro producto?");  //3
}
while (seguirComprando); 
    


alert('Acaba de comprar '+cantidadFinal+' productos y el total es $'+total);

let finalizarCompra = confirm("¿Desea finalizar la compra?");

if (finalizarCompra) alert("Su compra se ha realizado con éxito! muchas gracias por elegirnos");

let envio= confirm('quiere usar nuestro servicio de envio?');
if (envio) {
    alert('el envio se le cobrara 500$ adicional' )
    function envioo () {
       return total + 500;
    }
    alert ('la tarifa total seria de $'+envioo())
} else {'disculpe las molestias'};
