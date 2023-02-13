// Llamado de dependencias
const express = require('express')
const router = express.Router()

// Importacion de funciones
const { resgistarUser, loginUser, dataUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// Rutas 
router.post('/', resgistarUser)
router.post('/login', loginUser)
router.post('/data',protect, dataUser)

module.exports = router
