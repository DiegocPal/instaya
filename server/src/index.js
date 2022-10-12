const userRoutes= require("./routes/envios");
const config = require('../config.js');
const express=require('express');
const app =express();
const port = process.env.PORT||9000;
app.listen(port, ()=> console.log('InstaYa: Server listening on port', port));

// userRoutes
app.use(express.json());
app.use("/api",userRoutes);

// routes
app.get('/', (req,res)=>{
    res.send('Bienvenido a la api de InstaYa')
});

require("dotenv").config();
// mongodb connection
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conectado a la base de datos Atlas"))
    .catch((error)=>console.error(error));