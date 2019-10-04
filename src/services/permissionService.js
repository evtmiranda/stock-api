const { Permission } = require('../models')

const findAndFilter = async (filters) => {
    const permissions = await Permission.findAll({
        where: filters,
    })

    return permissions;
}

module.exports = {
    findAndFilter,
};