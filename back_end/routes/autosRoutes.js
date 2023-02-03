/* Llamado de dependencias */
const express = require('express')
const router = express.Router()

/* Rutas */

router.route('/').get().post()
router.route('/:id').put().delete()

module.exports = router