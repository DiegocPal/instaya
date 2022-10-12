const express = require("express");
const userSchema = require("../models/envio.model");
const router = express.Router();

const {
    getEnvios,
    addEnvio,
} = require("../controllers/envio.controller");
/* Creating a route for the get request. */
router.get("/envios", getEnvios);
/* Creating a route for the post request. */
router.post("/envio", addEnvio);

// Crear envío
// router.post("/envios", (req,res)=>{
router.post("/envio", (req,res)=>{
    //res.send("create");
    const user= userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

// Obtener todos los envíos
router.get("/envios", (req,res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

// Obtener un envío específico (por id)
router.get("/envios/:id", (req,res)=>{
    const {id}= req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))
});

module.exports = router;