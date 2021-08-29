const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, resp, next) {
  return next('ok')
})

app.listen(port)
