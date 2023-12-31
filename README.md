# Entrega4

## Descripción 

Este proyecto se puede ejecutar desde la carpeta "entrega4" utilizando el comando `npm start`.



## Instalación 💻

Sigue los siguientes pasos para instalar y configurar el proyecto en tu entorno:

1. Descarga la carpeta "entrega4" a tu computadora.

2. Abre una terminal y navega hasta la carpeta "entrega4".

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```shell
   npm install

## Uso 🎯

Para ejecutar el proyecto, sigue estos pasos:

1. Abre la terminal y navega hasta la carpeta "entrega4".

2. Ejecuta el siguiente comando:

   ```shell
   npm start
Desde tu navegador, podrás acceder a las siguientes rutas:

🌐 localhost:8080/home: En esta ruta se mostrarán todos los productos disponibles hasta el momento, los cuales están almacenados en el archivo productos.json.

🌐 localhost:8080/realtimeproducts: En esta ruta se podrán visualizar los productos y, al recibir modificaciones, se actualizarán en tiempo real.

Para modificar, agregar o eliminar productos, puedes utilizar las siguientes peticiones con sus respectivas rutas desde Postman:

POST: http://localhost:8080/api/products/ - Utiliza esta ruta para agregar un nuevo producto. Puedes enviar los datos del producto en el cuerpo de la petición. Por ejemplo, puedes enviar el siguiente objeto JSON como cuerpo de la petición para agregar un producto:

```json
    {
            "title": "Producto5",
            "description": "description",
            "code": "124abcdefgjh",
            "price": 200,
            "category": "category",
            "stock": 33
    }
```

PUT http://localhost:8080/api/products/1 - Utiliza esta ruta para actualizar un producto específico. Debes proporcionar el ID del producto que deseas actualizar en la URL de la solicitud. Por ejemplo, para actualizar el producto con ID 1, envía los datos actualizados del producto en el cuerpo de la petición. Por ejemplo, puedes enviar el siguiente objeto JSON como cuerpo de la petición para actualizar el producto con ID 1:


```json
{
  "title": "PRODUCTO"
}
```
DELETE: http://localhost:8080/api/products/3 - Utiliza esta ruta para eliminar un producto específico. Debes proporcionar el ID del producto que deseas eliminar en la URL de la solicitud. Por ejemplo, para eliminar el producto con ID 3, realiza una solicitud DELETE a esta ruta.



## Autor ✍️

Este proyecto fue creado por Ignacio Wainer.

