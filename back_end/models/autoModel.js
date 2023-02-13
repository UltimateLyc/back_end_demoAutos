/* Llamado de dependencias */
const mongoose = require('mongoose')

/* Schemas */ 
const  autoSchema = mongoose.Schema({
    // Ligamos como Foreign Key al usuario
    user: {
        type: mongoose.Schema.Types.ObjectId, // De esta manera ligamos los usuarios a nuestro modelo de tareas
        required: true,
        ref: 'User' // referenciamos el documento
    },
    // Continuamos con el esquema
    brand: {
        type: String,
        required: [true, ' Favor de ingresar la marca']
    }, 
    model: {
        type: String,
        required: [true, ' Favor de ingresar un modelo']
    }, 
    year: {
        type: Number,
        required: [true, ' Favor de ingresar un año']
    }, 
    color: {
        type: String,
        required: [true, ' Favor de ingresar un color']
    }
}, {
    timestamps: true // Nos crea la fecha y hora de cuando fue creado y otra de cada que se modifique
})

module.exports = mongoose.model('AUTOS', autoSchema)
