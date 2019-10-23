const express = require('express')
const cors = require('cors')
const { port } = require('../config/constants')
const YAML = require('yamljs')
const app = express()

const convertNullStringToNullType = function (req, _res, next) {
    req.queryString = JSON.parse(JSON.stringify(req.query).replace("\"null\"", null));
    next();
};

app.use(express.json())

app.use(cors())

app.use(convertNullStringToNullType)

app.use('/api/v1/', require('./routes'))

app.listen(port, () => { console.log(`The server is running on the port ${port}`) })