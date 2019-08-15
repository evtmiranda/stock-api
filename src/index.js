import express, { json } from 'express'
import cors from 'cors'
import { port, env } from '../config/constants'
const mongoose = require('mongoose')
const credentials = require('../config/credentials')

var opts = {
    keepAlive: 1
};

switch (env) {
    case 'development':
        mongoose.connect(credentials.mongo.
            development.connectionString, opts);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.
            production.connectionString, opts);
        break;
    default:
        throw new Error('Unknown execution environment: ' +
            app.get('env'));
}

const app = express()
app.use(json())

app.use(cors())

app.use('/api', require('./routes'))

app.listen(port, () => { console.log(`The server is running on the port ${port}`) })