const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoginKey = new Schema(
    {
        num_id: { type: String, required: true },
        password: { type: Binary, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('loginkeys', LoginKey)