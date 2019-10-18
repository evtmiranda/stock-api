const { Stock } = require('../models')

const findAndFilter = async (filters) => {
    const stocks = await Stock.findAll({
        where: filters,
    })

    return stocks;
}

const remove = async (id) => {
    const result = await Stock.update({
        deletedAt: new Date()
    },
        {
            where: {
                id: id
            }
        })

    return result;
}

module.exports = {
    findAndFilter,
    remove
};