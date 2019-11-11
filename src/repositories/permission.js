const { Permission } = require('../models')

const getByName = async (permissionName) => {
    return Permission.findOne({
        where: {
            name: permissionName,
            deletedAt: null
        }
    })
}

module.exports = {
    getByName
}