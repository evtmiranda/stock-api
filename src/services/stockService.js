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

const update = async (stock) => {
    const [numberOfAffectedRows, affectedRows] = await Stock.update({
        lot: stock.lot,
        description: stock.description,
        refenrece: stock.reference, 
        quantity: stock.quantity, 
        tag: stock.tag, 
        store: stock.store, 
        unitValue: stock.unitValue, 
        outputDate: stock.outputDate, 
        outputQuantity: stock.outputQuantity, 
        updatedAt: new Date()
    },
        {
            where: { id: stock.id },
            returning: true
        })

    return [numberOfAffectedRows, affectedRows];
}


module.exports = {
    findAndFilter,
    remove,
    update
};