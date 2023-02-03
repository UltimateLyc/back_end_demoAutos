/* Llamado de dependencias */
const asyncHandler = require('express-async-handler')

/* Exportacion de modelos */

const auto = require('../models/autoModel')

/* Funciones para endpoints */

// Funcion get
const getAutos = asyncHandler (async (req, res) => {
    const autos = await auto.find()
    res.status(200).json(autos)
})

// Funcion post
const setAuto = asyncHandler (async (req, res) => {
    if(!req.body.brand || !req.body.model || !req.body.year || !req.body.color ) {
        res.status(400)
        throw new Error ('Por favor ingrese todos los datos solicitados')
    }

    const nuevoAuto =  await auto.create({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    })

    res.status(201).json(nuevoAuto)
})

// Funcion put
const updateAuto = asyncHandler (async (req, res) => {

    const modAuto = await auto.findById(req.params.id)

    if(!modAuto) {
        res.status(400)
        throw new Error('Car not found')
    }

    const updatedAuto = await auto.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedAuto)
})

// Funcion delete
const deleteAuto = asyncHandler (async (req, res) => {

    const delAuto = await auto.findById(req.params.id)

    if(!delAuto) {
        res.status(400)
        throw new Error('Car not found')
    }

    await delAuto.remove()

    res.status(200).json(delAuto)
})

module.exports = {
    getAutos,
    setAuto,
    updateAuto,
    deleteAuto
}
