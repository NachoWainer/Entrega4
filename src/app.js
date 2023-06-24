import express from "express"
import handlebars from "express-handlebars"
import {__dirname} from "./utils.js"
import viewRouter from "./routes/views.router.js"
import { Server } from "socket.io"
import productsRouter from "./routes/products.routes.js"
import fs from "fs"

const app= express()
const httpServer = app.listen(8080, ()=>console.log("Server running"))

const socketServer = new Server(httpServer)

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/products',productsRouter)

app.use('/',viewRouter)


socketServer.on('connection',async (socket) =>{
    console.log("Inicio la comunicación")
    const products = await fs.promises.readFile("data/products.json",'utf-8')
    const productos = JSON.parse(products)
    socket.emit('productos',productos)

    let realTimeProducts = await fs.promises.readFile("data/products.json",'utf-8')
    realTimeProducts = JSON.parse(realTimeProducts)
    socket.emit('realTimeProducts',realTimeProducts)

    fs.watch("data/products.json",async()=>{
        realTimeProducts = await fs.promises.readFile("data/products.json",'utf-8')
        realTimeProducts = JSON.parse(realTimeProducts)
        socket.emit('realTimeProducts',realTimeProducts)
})
   
})




/*
socketServer.on//escychar-recibir
socketServer.emit//hablar enviar
*/