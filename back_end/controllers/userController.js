// Llamado de dependencias
const asyncHandler = require ('express-async-handler')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')

// Importacion de modelos 
const User = require('../models/userModel')

// Generacion de token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d' // Tiempo de expiracion
    })
}

// Funcion post "Resgistrar usuario"
const resgistarUser = asyncHandler(async(req, res) => {

    const {name, email, password} = req.body  // Desestructuracion para no usar (req.body.name || req.body.email || req.body.password)

    // Validacion si algun campo esta vacio
    if(!name || !email || !password){
        res.status(400)
        throw new Error (' Faltan datos, favor de ingresar la informacion completa')
    }

    // Validacion di un correo ya existe
    const userExist = await User.findOne({email})
    // console.log("userExist:", userExist) //Test
    if(userExist){
        res.status(400)
        throw new Error ('Este correo ya esta registrado')
    }

    // Hasheo del password
    const salt = await bcrypt.genSalt(10) // El parametro 10 es las veces que se ejecutara
    // console.log("salt:", salt) // test
    const hashedPassword = await bcrypt.hash(password,salt) // Combina el password con el salt para hashear el password

    // Creacion del usuario
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    // Validacion de usuario creado con exito
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            message: 'Usuario creado con exito'
        })
    } else {
        res.status(400)
        throw new Error ('El usuario no pudo ser creado')
    }

    // test //  res.status(200).json({message:'Se registro usuario'})
})

// Funcion para logear usuario
const loginUser = asyncHandler(async(req, res) => {

    const {email, password} = req.body // Desestructuracion para no usar (req.body.email || req.body.password)

    //Validacion de que los datos sean bien ingresados
    const user = await User.findOne({email})
    // console.log("user: ", user) // test

    if(user && (await bcrypt.compare(password,user.password))) { // Validamos el password con el password generado con hash gracias a compare
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            message:'Usuario validado'
        })
    } else {
        res.status(400)
        throw new Error ('Credenciales incorrectas ')
    }

    // test // res.status(200).json({message:'Se logeo usuario'})
})

// Funcion para mostrar datos 
const dataUser = asyncHandler(async(req, res) => {

    const {_id, name, email} = req.user // Desestructuracion

    res.status(200).json({
        id: _id,
        name,
        email,
        message: 'Datos del usuario'
    })
})

module.exports = {
    resgistarUser,
    loginUser,
    dataUser
}
