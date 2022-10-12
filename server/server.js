const userRoutes= require("./src/routes/envio.route");
const config = require('./config.js');
const express=require('express');
const cors = require("cors");

const app =express();
app.use(cors());

// Cargando las variables de entorno desde el archivo .env
require("dotenv").config();
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB"

app.listen(port, ()=> console.log('InstaYa: Server listening on port', port));

// userRoutes
app.use(express.json());
app.use("/api",userRoutes);

// routes - This is a route handler. It is listening for a GET request to the root route of the application. When it receives a request, it will send back a response with the string entered.
app.get('/', (req,res)=>{
    res.send('Bienvenido a la api de InstaYa')
});

// mongodb connection
const mongoose = require('mongoose');
mongoose
    .connect(MONGODB_URI)
    .then(()=> console.log("Conectado a la base de datos Atlas"))
    .catch((error)=>console.error(error));