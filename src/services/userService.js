const { User } = require('../models')

const findAndFilter = async (filters) => {
    const users = await User.findAll({
        where: filters,
        order: [
            ['id', 'DESC']
        ]
    })

    return users;
}

module.exports = {
    findAndFilter
};