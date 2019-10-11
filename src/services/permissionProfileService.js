const { PermissionProfile } = require('../models')
const convertArrayToJson = require('../utils/convertArrayToJson')
const moduleService = require('../services/moduleService')
const permissionService = require('../services/permissionService')
const Sequelize = require('sequelize')

const findAndFilter = async (filters) => {
    const permissionProfiles = await PermissionProfile.findAll({
        where: filters,
        order: [
            ['id', 'DESC']
        ]
    })

    return permissionProfiles;
}

const findOrCreate = async (permissionProfile) => {
    const [permissionProfileCreated, created] = await PermissionProfile.findOrCreate({
        where: {
            permissionId: permissionProfile.permissionId,
            moduleId: permissionProfile.moduleId,
            profileId: permissionProfile.profileId,
            deletedAt: null
        },
        defaults: {
            permissionId: permissionProfile.permissionId,
            moduleId: permissionProfile.moduleId,
            profileId: permissionProfile.profileId,
        }
    })

    return [permissionProfileCreated, created]
}

const bulkCreate = async permissionProfiles => {
    for (const permissionProfile of permissionProfiles) {
        await findOrCreate(permissionProfile)
    }
}

const bulkDelete = async profileId => {
    const result = await PermissionProfile.update({
        deletedAt: new Date()
    },
        {
            where: {
                profileId
            }
        })

    return result;
}

const createPermissionProfilesObjectByModuleAndPermissionsName = async (permissionProfiles, profileId) => {
    let permissionProfileObjectArray = []
    let permissionProfileSplit = []

    let permissionProfileObject = {}

    for (const permissionProfile of permissionProfiles) {
        permissionProfileSplit = permissionProfile.split('|')

        permissionProfilesTranslated = [
            moduleService.translateModules(permissionProfileSplit[0], true),
            permissionService.translatePermissions(permissionProfileSplit[1], true)
        ];

        const permission = await permissionService.findByName(permissionProfilesTranslated[1]);
        const module = await moduleService.findByName(permissionProfilesTranslated[0]);

        permissionProfileObject = {
            permissionId: permission.id,
            moduleId: module.id,
            profileId: profileId
        }

        permissionProfileObjectArray.push(permissionProfileObject)
    }

    return permissionProfileObjectArray;
}

const createObjectmodulesAndPermissionsName = function (moduleName, permissionsName) {
    this.moduleName = moduleName;
    this.permissions = convertArrayToJson(permissionsName);
}

module.exports = {
    findAndFilter,
    findOrCreate,
    bulkCreate,
    bulkDelete,
    createPermissionProfilesObjectByModuleAndPermissionsName,
    createObjectmodulesAndPermissionsName
}