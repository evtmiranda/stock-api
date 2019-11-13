const { User } = require('../models')

const getById = async (id) => {
    return User.findOne({
        where: {
            id: id,
            deletedAt: null
        }
    })
}

const getByCredentials = async (username, password) => {
    return User.findOne({
        where: {
            username: username,
            password: password,
            deletedAt: null
        }
    })
}

module.exports = {
    getById,
    getByCredentials
}