const Envio = require('../models/envio-model')

createEnvio = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe registrar un Envio',
        })
    }

    const envio = new Envio(body)

    if (!envio) {
        return res.status(400).json({ success: false, error: err })
    }

    envio
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: envio._id,
                message: 'Envio creado!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Envio no creado!',
            })
        })
}

updateEnvio = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe ingresar data a actualizar',
        })
    }

    Envio.findOne({ _id: req.params.id }, (err, Envio) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Envio no encontrado!',
            })
        }
        Envio.fecha = body.fecha
        Envio.hora = body.hora
        Envio.largo = body.largo
        Envio.ancho = body.ancho
        Envio.alto = body.alto
        Envio.dir_recogida = body.dir_recogida
        Envio.city_recogida = body.city_recogida
        Envio.name_destino = body.name_destino
        Envio.id_destino = body.id_destino
        Envio.dir_destino = body.dir_destino
        Envio.city_destino = body.city_destino
        Envio
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Envio._id,
                    message: 'Envio Actualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Envio no actualizado!',
                })
            })
    })
}

deleteEnvio = async (req, res) => {
    await Envio.findOneAndDelete({ _id: req.params.id }, (err, Envio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Envio) {
            return res
                .status(404)
                .json({ success: false, error: `Envio no encontrado` })
        }

        return res.status(200).json({ success: true, data: Envio })
    }).catch(err => console.log(err))
}

getEnvioById = async (req, res) => {
    await Envio.findOne({ _id: req.params.id }, (err, Envio) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Envio) {
            return res
                .status(404)
                .json({ success: false, error: `Envio no encontrado` })
        }
        return res.status(200).json({ success: true, data: Envio })
    }).catch(err => console.log(err))
}

getEnvios = async (req, res) => {
    await Envio.find({}, (err, Envios) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Envios.length) {
            return res
                .status(404)
                .json({ success: false, error: `Envio no encontrado` })
        }
        return res.status(200).json({ success: true, data: Envios })
    }).catch(err => console.log(err))
}

module.exports = {
    createEnvio,
    updateEnvio,
    deleteEnvio,
    getEnvios,
    getEnvioById,
}