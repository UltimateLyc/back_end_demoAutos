// Llamado de dependencias
const express = require('express')
const router = express.Router()

// Importacion de funciones
const { resgistarUser, loginUser, dataUser } = require('../controllers/userController')

// Rutas 
router.post('/', resgistarUser)
router.post('/login', loginUser)
router.post('/data', dataUser)

module.exports = router
