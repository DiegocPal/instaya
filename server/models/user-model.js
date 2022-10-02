const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema(
    {
        num_id: { type: String, required: true },
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('usuarios', Usuario)