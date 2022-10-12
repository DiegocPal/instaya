// config.js
const dotenv = require('dotenv').config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://carvajalej:Jalvacar.29-mongo@instaya.gbvbjgp.mongodb.net/?retryWrites=true&w=majority'
}