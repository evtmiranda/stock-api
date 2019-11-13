const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/constants')

const validateToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret)
    }
    catch(error) {
        throw "Invalid token"
    }
}

const generateToken = (data) => {
    try {
        return jwt.sign(data, jwtSecret)
    }
    catch (error) {
        throw "Error signing token"
    }
}

module.exports = {
    validateToken,
    generateToken
}