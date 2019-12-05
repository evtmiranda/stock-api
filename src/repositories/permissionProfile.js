const { PermissionProfile } = require('../models')

const getProfilePermissionByModule = async (profileId, permissionId, moduleId) => {
    return PermissionProfile.findOne({
        where: {
            profileId: profileId,
            permissionId: permissionId,
            moduleId: moduleId,
            deletedAt: null
        }
    })
}

module.exports = {
    getProfilePermissionByModule
}