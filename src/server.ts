// const express = require('express') // sintaxis CommonJS
import express from 'express' // ECMAScript Modules (ESM) soporta TypeScrip
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express()

connectDB()

// Middleware global para analizar (parsear) cuerpos de solicitudes JSON
// Permite acceder a req.body con los datos enviados desde formularios o APIs en formato JSON
app.use(express.json())

// Middleware para registrar todas las rutas definidas en el router principal
// Delegamos el manejo de rutas específicas a un módulo externo
app.use('/', router)

export default app