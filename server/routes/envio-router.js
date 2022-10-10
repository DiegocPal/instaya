const express = require('express')

const EnvioCTRL = require('../controllers/envio-ctrl')

const router = express.Router()


router.post('/crearenvio', EnvioCTRL.createEnvio)
router.put('/envio/:id', EnvioCTRL.updateEnvio)
router.delete('/envio/:id', EnvioCTRL.deleteEnvio)
router.get('/listaPedidos', EnvioCTRL.getEnvios)
router.get('/envio/:id', EnvioCTRL.getEnvioById)

module.exports = router

