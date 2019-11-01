const s3 = require('s3-client')
const { accessKeyId, secretAccessKey, bucketName, s3Region } = require('../../config/constants')

const build = () => {
    return s3.createClient({
        s3Options: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: s3Region
        }
    })
}

const buildUploadParams = (path, filename) => {
    return {
        localFile: path,
        s3Params: {
            Bucket: bucketName,
            Key: filename
        }
    }
}

const getPublicUrlHttp = (filename) => {
    return s3.getPublicUrlHttp(bucketName, filename)
}

module.exports = {
    build,
    buildUploadParams,
    getPublicUrlHttp
}