import express, { json } from 'express'
import cors from 'cors'
import { port } from '../config/constants'

const app = express()
app.use(json())

app.use(cors())

app.use('/api', require('./routes').default)

app.listen(port, () => { console.log(`The server is running on the port ${port}`) })