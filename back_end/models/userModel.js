// Llamado de dependencia 
const mongoose = require('mongoose')

// Schema 
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, ' Favor de ingresar le nombre del usuario']
    },
    email:{
        type: String,
        required: [true, 'Favor de ingresar el correo electronico'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Favor de ingresar un password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
