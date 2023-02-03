/* Llamado de dependencias */
const express = require('express')
const router = express.Router()

/* importacion de funciones */
const { getAutos, setAuto, updateAuto, deleteAuto } = require('../controllers/autosControllers')

/* Rutas */

router.route('/').get(getAutos).post(setAuto)
router.route('/:id').put(updateAuto).delete(deleteAuto)

module.exports = router