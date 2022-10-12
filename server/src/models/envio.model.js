const mongoose = require("mongoose");
const userSchema=mongoose.Schema({
    fecha:{
        type:String,
        required:true
    },
    hora:{
        type:String,
        required:true
    },
    largo:{
        type:Number,
        required:true
    },
    ancho:{
        type:Number,
        required:true
    },
    alto:{
        type:Number,
        required:true
    },
    direccionRecogida:{
        type:String,
        required:true
    },
    ciudadRecogida:{
        type:String,
        required:true
    },
    nombreDestinatario:{
        type:String,
        required:true
    },
    idDestinatario:{
        type:String,
        required:true
    },
    direccionEntrega:{
        type:String,
        required:true
    },
    ciudadEntrega:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Envio", userSchema);