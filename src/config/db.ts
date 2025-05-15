import mongoose from "mongoose";
import colors from "colors" // Sirve para que los mensajes al deployar los puedas decorar

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`MongoDB Connectado en ${url}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }
}