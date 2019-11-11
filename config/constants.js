const config = require('dotenv')
config.config()

const port = process.env.PORT
const environment = process.env.ENVIRONMENT
const jwtSecret = 'itiban-secret-jwt'

module.exports = {
    port,
    environment,
    jwtSecret
};