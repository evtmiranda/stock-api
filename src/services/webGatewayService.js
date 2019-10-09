const moduleService = require('./moduleService')
const permissionService = require('./permissionService')
const convertArrayToJson = require('../utils/convertArrayToJson')

const getPermissions = async () => {
    const query = JSON.parse('{"deleted_at": null}');

    const permissions = await permissionService.findAndFilter(query);
    const modules = await moduleService.findAndFilter(query);

    let permissionsName = permissions.map(p => translatePermissions(p.name));

    let modulesAndPermissionsName = modules.map(p => new createObjectmodulesAndPermissionsName(translateModules(p.name), permissionsName));

    filterPermissions(modulesAndPermissionsName);

    return convertArrayToJson(modulesAndPermissionsName);
}

const translatePermissions = name => {
    switch (name) {
        case "create":
            return "Adicionar"
        case "delete":
            return "Excluir"
        case "edit":
            return "Editar"
        case "view":
            return "Visualizar"
        default:
            return new Error("Tradução não configurada para o name: " + name);
    }

}

const translateModules = name => {
    switch (name) {
        case "home":
            return "Tela Inicial"
        case "stock":
            return "Estoque"
        case "users":
            return "Usuários"
        case "userProfiles":
            return "Perfis de Usuário"
        case "reports":
            return "Relatórios"
        default:
            return new Error("Tradução não configurada para o name: " + name);
    }
}

const filterPermissions = modulesAndPermissionsName => {
    modulesAndPermissionsName.map(p => {
        if (p.moduleName === "Tela Inicial" || p.moduleName === "Relatórios") {
            p.permissions = ['Visualizar']
        }
    })
}

const createObjectmodulesAndPermissionsName = function (moduleName, permissionsName) {
    this.moduleName = moduleName;
    this.permissions = convertArrayToJson(permissionsName);
}

module.exports = {
    getPermissions
};


