// Llamado de dependencias
const asyncHandler = require ('express-async-handler')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')

// Funcion post "Resgistrar usuario"
const resgistarUser = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Se registro usuario'})
})

const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Se logeo usuario'})
})

const dataUser = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Data usuario'})
})

module.exports = {
    resgistarUser,
    loginUser,
    dataUser
}
