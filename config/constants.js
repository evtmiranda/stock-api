const config = require('dotenv')

config.config()

const port = process.env.PORT
const environment = process.env.ENVIRONMENT
const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY
const bucketName = process.env.BUCKET_NAME
const s3Region = process.env.S3_REGION

module.exports = {
    port,
    environment,
    accessKeyId,
    secretAccessKey,
    bucketName,
    s3Region
};