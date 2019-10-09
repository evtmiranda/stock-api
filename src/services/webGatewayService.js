const moduleService = require('./moduleService')
const permissionService = require('./permissionService')
const permissionProfileService = require('./permissionProfileService')
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

const filterPermissions = modulesAndPermissionsName => {
    modulesAndPermissionsName.map(p => {
        if (p.moduleName === "Tela Inicial" || p.moduleName === "Relatórios") {
            p.permissions = ['Visualizar']
        }
    })
}

module.exports = {
    getPermissions
};


