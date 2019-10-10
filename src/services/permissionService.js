const { Permission } = require('../models')

const findAndFilter = async (filters) => {
    const permissions = await Permission.findAll({
        where: filters
    })

    return permissions;
}

const findOne = async (filters) => {
    const permission = await Permission.findOne({
        where: filters
    })

    return permission;
}

const findByName = async name => {
    const filter = {
        name: name
    }

    const permission = await findOne(filter);

    return permission;
}

const translatePermissions = (name, ptToEn = false) => {
    if (ptToEn) {
        switch (name) {
            case "Adicionar":
                return "create"
            case "Excluir":
                return "delete"
            case "Editar":
                return "edit"
            case "Visualizar":
                return "view"
            default:
                return new Error("Tradução não configurada para o name: " + name);
        }
    }
    else {
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
}

module.exports = {
    findAndFilter,
    findOne,
    translatePermissions,
    findByName
};