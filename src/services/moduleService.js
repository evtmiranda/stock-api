const { Module } = require('../models')

const findAndFilter = async (filters) => {
    const modules = await Module.findAll({
        where: filters,
    })

    return modules;
}

const findOne = async (filters) => {
    const module = await Module.findOne({
        where: filters,
    })

    return module;
}

const findByName = async name => {
    const filter = {
        name: name
    }

    const module = await findOne(filter);

    return module;
}

const translateModules = (name, ptToEn = false) => {
    if (ptToEn) {
        switch (name) {
            case "Tela Inicial":
                return "home"
            case "Estoque":
                return "stock"
            case "Usuários":
                return "users"
            case "Perfis de Usuário":
                return "userProfiles"
            case "Relatórios":
                return "reports"
            default:
                return new Error("Tradução não configurada para o name: " + name);
        }
    }
    else {
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
}

module.exports = {
    findAndFilter,
    findOne,
    translateModules,
    findByName
};