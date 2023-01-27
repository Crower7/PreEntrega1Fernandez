const contenidoDeLaTienda = document.querySelector('#contenidoTienda')

let productos = [
    {id:1, nombre:'remera', precio:1600, img: "https://vermediamanager.prod.ingecloud.com/MediaFiles/Topyed/2022/12/14/1903233.jpg" },
    {id:2, nombre:'musculosa', precio:1400, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/577/products/musculosa-hombre-free-gris-melange21-c02f576bcec5529f3e16210411463196-640-0.jpg" },
    {id:3, nombre:'pantalon', precio:2500, img: "https://alcatraz.com.ar/wp-content/uploads/2021/02/Pantalon-Ultra-Negro_0000s_0010_Pantalon-ultra2.jpg" },
    {id:4, nombre:'short', precio:2100, img: "https://http2.mlstatic.com/D_NQ_NP_812841-MLA51815014779_102022-W.jpg" },
    {id:5, nombre:'remera', precio:1800, img: "https://vermediamanager.prod.ingecloud.com/MediaFiles/Topyed/2022/12/14/1903233.jpg" },
    {id:6, nombre:'musculosa', precio:1600, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/577/products/musculosa-hombre-free-gris-melange21-c02f576bcec5529f3e16210411463196-640-0.jpg" },
    {id:7, nombre:'pantalon', precio:2700, img: "https://alcatraz.com.ar/wp-content/uploads/2021/02/Pantalon-Ultra-Negro_0000s_0010_Pantalon-ultra2.jpg" },
    {id:8, nombre:'short', precio:2300, img: "https://http2.mlstatic.com/D_NQ_NP_812841-MLA51815014779_102022-W.jpg" },
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