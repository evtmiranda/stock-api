const serialize = (entity, jwt) => {
    return {
        user: {
            jwt: jwt
        }
    }
}

module.exports = {
    serialize
}
