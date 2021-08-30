import * as express from 'express'
import routes from './routes/routes'
import {createConnection} from 'typeorm'


const app = express()

app.use(express.json())

app.use(routes)

app.listen(3001)