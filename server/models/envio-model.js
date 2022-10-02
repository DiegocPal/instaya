const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Envio = new Schema(
    {
        fecha: { type: Date, required: true },
        hora: { type: String, required: true },
        largo: { type: Number, required: true },
        ancho: { type: Number, required: true },
        alto: { type: Number, required: true },
        dir_recogida: { type: String, required: true},
        city_recogida: { type: String, required: true },
        name_destino: { type: String, required: true },
        id_destino: { type: String, required: true },
        dir_destino: { type: String, required: true },
        city_destino: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('envios', Envio)