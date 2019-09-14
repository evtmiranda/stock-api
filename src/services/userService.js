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

const delete = async (id) => {
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

module.exports = {
    findAndFilter,
    delete
};