// Importacion de dependencia
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// importacion de modelos
const User = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {
    let token

    // Validamos si nos mandan el token
    // // console.log('firt validation: ', req.headers.authorization)
    // // console.log('Second validation: ', req.headers.authorization.startsWith('Bearer'))
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        
        try {
            // Obtenemos el token
            token = req.headers.authorization.split(' ')[1] // Dado que el token esta dado en un string, se separa con split para hacer un arreglo y de ahi obtener el token 
            // // console.log("token:", token)

            // Verificamos el token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // // console.log("decoded:", decoded)

            // Obtenemos los datos del usuario del mismo token
            req.user = await User.findById(decoded.id).select('-password') // -password => lo usamos para que no nos muestre esta informacion
            console.log('user: ', await User.findById(decoded.id).select('-password'))

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('token Incorrecto')
        }
    }

    if (!token){
        res.status(401)
        throw new Error('Sin token')
    }
})

module.exports = {
    protect
}
