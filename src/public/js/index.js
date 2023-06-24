const socket=io();

socket.on("productos", (productos) => {
    const productElement = document.getElementById("product");
    if (productElement !== null){
    productElement.innerHTML = "";
    
    productos.forEach((producto) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="producto ">

    <p>ID:${producto.id}</p>
    <p>category: ${producto.category}</p>
    <div class = "productInfo">
    <div class="productNameStock">
    <p class="productName">title: ${producto.title}</p>
    <p class="productName"> description: ${producto.description}</p>
    <p class="productName">code: ${producto.code}</p>

    <p>(stock: ${producto.stock})</p>
    </div>
    <p class="productName">price: $  ${producto.price}</p>
    <p>status: ${producto.status}</p>
    </div>
    </div>
  `;
      
      productElement.appendChild(content);
    });}
    
  });

  socket.on("realTimeProducts", (realTimeProducts) => {
    const RTproductElement = document.getElementById("realTimeProduct");
    

    if (RTproductElement !== null){
    RTproductElement.innerHTML = "";
    
    realTimeProducts.forEach((producto) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="producto ">

    <p>ID:${producto.id}</p>
    <p>category: ${producto.category}</p>
    <div class = "productInfo">
    <div class="productNameStock">
    <p class="productName">title: ${producto.title}</p>
    <p class="productName"> description: ${producto.description}</p>
    <p class="productName">code: ${producto.code}</p>

    <p>(stock: ${producto.stock})</p>
    </div>
    <p class="productName">price: $  ${producto.price}</p>
    <p>status: ${producto.status}</p>
    </div>
    </div>
  `;
      
      RTproductElement.appendChild(content);
    });}
    ;});