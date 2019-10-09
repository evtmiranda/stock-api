const { PermissionProfile } = require('../models')
const convertArrayToJson = require('../utils/convertArrayToJson')
const moduleService = require('../services/moduleService')
const permissionService = require('../services/permissionService')

const findAndFilter = async (filters) => {
    const permissionProfiles = await PermissionProfile.findAll({
        where: filters,
        order: [
            ['id', 'DESC']
        ]
    })

    return permissionProfiles;
}

const create = permissionProfiles => {
    const permissionProfile = PermissionProfile.create(permissionProfiles);

    return permissionProfile;
}

const createPermissionProfilesObjectByModuleAndPermissionsName = (permissions, profileId) => {
    permissions = ['Estoque|Visualizar']
    permissionProfileObjectArray = []

    permissionsSplit = permissions.split('|')

    for (const permissionSplit of permissionsSplit) {
        permissionProfiles = [
            moduleService.translateModules(permissionSplit[0]),
            permissionService.translatePermissions(permissionSplit[1])
        ];

        let permissionProfileObject = {
            permissionId: permissionService.findByName(permissionProfiles[1].id),
            moduleId: moduleService.findByName(permissionProfiles[0].id),
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
    create,
    createPermissionProfilesObjectByModuleAndPermissionsName,
    createObjectmodulesAndPermissionsName
}