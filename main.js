const contenidoDeLaTienda = document.querySelector('#contenidoTienda')

let productos = [
    {id:1, nombre:'remera', precio:1600, img: "https://vermediamanager.prod.ingecloud.com/MediaFiles/Topyed/2022/12/14/1903233.jpg" },
    {id:2, nombre:'musculosa', precio:1400, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/577/products/musculosa-hombre-free-gris-melange21-c02f576bcec5529f3e16210411463196-640-0.jpg" },
    {id:3, nombre:'pantalon', precio:2500, img: "https://alcatraz.com.ar/wp-content/uploads/2021/02/Pantalon-Ultra-Negro_0000s_0010_Pantalon-ultra2.jpg" },
    {id:4, nombre:'short', precio:2100, img: "https://http2.mlstatic.com/D_NQ_NP_812841-MLA51815014779_102022-W.jpg" },
    {id:5, nombre:'remera', precio:1800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwAfbQ9Si63Xz5VBFJqLbXl_EHnc_uiQedw&usqp=CAU" },
    {id:6, nombre:'musculosa', precio:1600, img: "https://sporting.vtexassets.com/arquivos/ids/636888/4CU5982-010-1.jpg?v=637993644354300000" },
    {id:7, nombre:'pantalon', precio:2700, img: "https://images.squarespace-cdn.com/content/v1/579202971b631b5dbc741986/1597691861717-SWM9VYJBWBBCT9THS5AW/jogger++Eddie+Bauer.jpg" },
    {id:8, nombre:'short', precio:2300, img: "https://essential.vtexassets.com/arquivos/ids/190541/304-0986_1.jpg?v=636737542395400000" },
    ];

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
        comprar.innerText = "Comprar"
        comprar.className = "shakeFix";

            content.append(comprar);
})