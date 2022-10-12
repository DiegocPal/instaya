const Envio = require("../models/envio.model");

/**
 * Funcion asincrona que usa el modelo Envio para encontrar los envios y luego retorna un estatus de 200 con los envios en el cuerpo de respuesta.
 */
const getEnvios = async (req, res) => {
  try {
    const envios = await Envio.find();
    res.status(200).json(envios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Crea una nueva envio y la guarda en la base de datos.
 */
const addEnvio = async (req, res) => {
  const envio = new Envio(req.body);

  try {
    const newEnvio = await envio.save();
    res.status(201).json(newEnvio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getEnvios,
  addEnvio,
};