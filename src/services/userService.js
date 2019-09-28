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

    console.log(result)

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

    console.log(created)
    return [userCreated, created]
}

module.exports = {
    findAndFilter,
    remove,
    findOrCreate
};