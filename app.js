import express from 'express'

const app = express()
const port = 3000

app.get('/usuarios', function (req, resp, next) {
  next('sucesso')
})

app.listen(port, () =>
  console.log(`API sendo executada na rota :  localhost:${port}`)
)
