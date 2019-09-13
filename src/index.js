const express = require('express')
const cors = require('cors')
const { port } = require('../config/constants')
const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/v1/', require('./routes'))

app.listen(port, () => { console.log(`The server is running on the port ${port}`) })