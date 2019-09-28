const { Module } = require('../models')

const findAndFilter = async (filters) => {
    const modules = await Module.findAll({
        where: filters,
    })

    return modules;
}

module.exports = {
    findAndFilter,
};