const { Profile } = require('../models')

const findAndFilter = async (filters) => {
    const profiles = await Profile.findAll({
        where: filters,
        order: [
            ['id', 'DESC']
        ]
    })

    return profiles;
}

module.exports = {
    findAndFilter
};