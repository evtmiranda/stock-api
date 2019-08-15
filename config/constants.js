import { config } from 'dotenv'
config()

export const secretKey = process.env.SECRET_KEY
export const milliSecondsTokenDuration = process.env.MILLISECONDS_TOKEN_DURATION
export const port = process.env.PORT
export const env = process.env.ENV