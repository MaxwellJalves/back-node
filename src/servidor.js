import express from 'express'
import rotas from './rotas'

const servidor = express()
const porta = process.env.PORT || 3000

servidor.use(express.json())
servidor.use(rotas)

servidor.listen(porta, () => console.log(`Servidor online ${porta}`))
