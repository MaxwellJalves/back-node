import express from 'express'

const rotas = express.Router()

rotas.get('/', (request, response) => {
  response.status(200).json({ message: 'comunição ativa' })
})

export default rotas
