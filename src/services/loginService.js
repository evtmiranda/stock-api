const JwtService = require('./jwtService')
const Serializer = require('../serializer/login')
const UserRepository = require('../repositories/user')

const generateUserJWT = async (username, password) => {
    const user = await UserRepository.getByCredentials(username, password)

    if (!user) {
        return false;
    }

    const userJwt = JwtService.generateToken(
        {
            userId: user.id,
            username: user.username,
            profileId: user.profileId
        }
    )

    return Serializer.serialize(user, userJwt)
}

module.exports = {
    generateUserJWT
}