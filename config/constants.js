import { config } from 'dotenv'
config()

export const secretKey = process.env.SECRET_KEY
export const milliSecondsTokenDuration = process.env.MILLISECONDS_TOKEN_DURATION
export const port = process.env.PORT
export const env = process.env.ENV
export const mongo_development = process.env.MONGO_DEVELOPMENT
export const mongo_production = process.env.MONGO_PRODUCTION