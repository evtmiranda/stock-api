const config = require('dotenv')
config.config()

const secretKey = process.env.SECRET_KEY
const milliSecondsTokenDuration = process.env.MILLISECONDS_TOKEN_DURATION
const port = process.env.PORT
const env = process.env.ENV
const mongo_development = process.env.MONGO_DEVELOPMENT
const mongo_production = process.env.MONGO_PRODUCTION

module.exports = {
    secretKey,
    milliSecondsTokenDuration,
    port,
    env,
    mongo_development,
    mongo_production
};