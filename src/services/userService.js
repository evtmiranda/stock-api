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

const remove = async (id) => {
    const result = await User.update({
        deletedAt: new Date()
    },
        {
            where: {
                id: id
            }
        })

    return result;
}

const findOrCreate = async (user) => {
    const [userCreated, created] = await User.findOrCreate({
        where: { username: user.username },
        defaults: {
            username: user.username,
            name: user.name,
            password: user.password
        }
      })

    return [userCreated, created]
}

const update = async (user) => {
    const [numberOfAffectedRows, affectedRows] = await User.update({
        name: user.name,
        username: user.username,
        password: user.password,
        profileId: user.profileId
    },
        {
            where: { id: user.id },
            returning: true
        })

    return [numberOfAffectedRows, affectedRows];
}

module.exports = {
    findAndFilter,
    remove,
    findOrCreate,
    update
};