const moduleService = require('./moduleService')
const permissionService = require('./permissionService')
const permissionProfileService = require('./permissionProfileService')
const profileService = require('./profileService')
const convertArrayToJson = require('../utils/convertArrayToJson')

const getPermissions = async () => {
    const query = JSON.parse('{"deleted_at": null}');

    const permissions = await permissionService.findAndFilter(query);
    const modules = await moduleService.findAndFilter(query);

    let permissionsName = permissions.map(p => permissionService.translatePermissions(p.name));

    let modulesAndPermissionsName = modules.map(p => new permissionProfileService.createObjectmodulesAndPermissionsName(moduleService.translateModules(p.name), permissionsName));

    filterPermissions(modulesAndPermissionsName);

    return convertArrayToJson(modulesAndPermissionsName);
}

const getProfileAndPermissions = async () => {
    const query = { deletedAt: null };
    let permission = [];
    let module = [];
    let modulesAndPermissionsName = [];
    let profileAndPermissions = [];
    let profilesAndPermissions = [];

    const profiles = await profileService.findAndFilter(query);

    for (const profile of profiles) {
        const profileId = profile.id;
        const permissionsProfile = await permissionProfileService.findAndFilter({ deletedAt: null, profileId: profileId });

        for (const permissionProfile of permissionsProfile) {
            permission = await permissionService.findOne({ id: permissionProfile.permissionId });
            module = await moduleService.findOne({ id: permissionProfile.moduleId });

            modulesAndPermissionsName.push(moduleService.translateModules(module.name) + "|" + permissionService.translatePermissions(permission.name))
        }

        profileAndPermissions = {
            id: profile.id,
            name: profile.name,
            description: profile.description,
            permissions: modulesAndPermissionsName
        }

        profilesAndPermissions.push(profileAndPermissions)

        modulesAndPermissionsName = []
    }

    return profilesAndPermissions;
}

const filterPermissions = modulesAndPermissionsName => {
    modulesAndPermissionsName.map(p => {
        if (p.moduleName === "Tela Inicial" || p.moduleName === "Relatórios") {
            p.permissions = ['Visualizar']
        }
    })
}

module.exports = {
    getPermissions,
    getProfileAndPermissions
};


