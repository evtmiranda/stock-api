const { Stock } = require('../models')

const findAndFilter = async (filters) => {
    const stocks = await Stock.findAll({
        where: filters,
    })

    return stocks;
}

module.exports = {
    findAndFilter,
};