/* Llamado de dependencias */
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const Connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${Connection.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error.red.underline)
        process.exit(1)
    }
}

module.exports = connectDB