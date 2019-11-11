const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/constants')
const Sequelize = require('sequelize')
const { User } = require('../models')
const Serializer = require('../serializer/login')

const generateUserJWT = async (username, password) => {
    const user = await User.findOne({
        where: {
            username: username,
            password: password,
            deletedAt: null
        }
    })

    if (!user) {
        return false;
    }

    const userJwt = jwt.sign(
        {
            userId: user.id,
            username: user.username,
            profileId: user.profileId
        },
        jwtSecret
    )

    return Serializer.serialize(user, userJwt)
}

module.exports = {
    generateUserJWT
}