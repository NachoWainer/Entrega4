const socket=io();

socket.on("productos", (productos) => {
    const productElement = document.getElementById("product");
    if (productElement !== null){
    productElement.innerHTML = "";
    
    
    productos.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = "id:"+`${producto.id}`+ "  "+ "title:"+`${producto.title}`+ "  "+`price:$ ${producto.price}` +"  " + `description:${producto.description}` +"   " + `code:${producto.code}`
      +"   " + `status:${producto.status}`+"   " + `stock${producto.stock}`+"   " + `category:${producto.category}`;
      productElement.appendChild(li);
    });}
  });

  socket.on("realTimeProducts", (realTimeProducts) => {
    const RTproductElement = document.getElementById("realTimeProduct");
    if (RTproductElement !== null){RTproductElement.innerHTML = "";
    
  
    realTimeProducts.forEach((productoTR) => {
      const li = document.createElement("li");
      li.textContent = "id:"+`${productoTR.id}`+ "  "+ "title:"+`${productoTR.title}`+ "  "+`price:$ ${productoTR.price}` +"  " + `description:${productoTR.description}` +"   " + `code:${productoTR.code}`
      +"   " + `status:${productoTR.status}`+"   " + `stock${productoTR.stock}`+"   " + `category:${productoTR.category}`;
      RTproductElement.appendChild(li);
    });}
  });