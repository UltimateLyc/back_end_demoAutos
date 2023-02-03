/* Llamado de dependencias */
const asyncHandler = require('express-async-handler')

const getAutos = asyncHandler (async (req, res) => {
    res.status(200).json('Autos obtenidos')
})

const setAuto = asyncHandler (async (req, res) => {
    res.status(201).json('Auto agregado')
})

const updateAuto = asyncHandler (async (req, res) => {
    res.status(200).json('Auto modificado')
})

const deleteAuto = asyncHandler (async (req, res) => {
    res.status(200).json('Auto Eliminado')
})

module.exports = {
    getAutos,
    setAuto,
    updateAuto,
    deleteAuto
}