/* Llamado de dependencias */
const express = require('express')
const router = express.Router()

/* importacion de funciones */
const { getAutos, setAuto, updateAuto, deleteAuto } = require('../controllers/autosControllers')
const { protect } = require('../middleware/authMiddleware')

/* Rutas */
// Protejemos las rutas para que otros usuarios no puedan modificar los datos de otros usuarios
router.route('/').get(protect, getAutos).post(protect, setAuto)
router.route('/:id').put(protect, updateAuto).delete(protect, deleteAuto)

module.exports = router