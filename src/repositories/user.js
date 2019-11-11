const { User } = require('../models')

const getById = async (id) => {
    return User.findOne({
        where: {
            id: id,
            deletedAt: null
        }
    })
}

module.exports = {
    getById
}