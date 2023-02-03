/* Llamado de dependencias */
const express = require('express') // Mandamos llamar a express
const colors = require('colors') // Mandamos a llamar a colors
const dotenv = require('dotenv').config() // mandamos llamar a dotenv y usamos para poder leer el .env

/* importacion de componentes */


/* conexion del puerto */
const port = process.env.PORT 

/* Conexion a mongo atlas */


/* Creacion de la aplicacion */ 
const app = express() // Indica a la aplicacion que usaremos JS

app.use(express.urlencoded({extended: false})) // Sirve para que pueda recibir datos y su forma de encriptacion
app.use(express.json())

app.listen(port, ()=> console.log(`Server started on port ${port}`)) // Decimos que escucha el puerto indicado