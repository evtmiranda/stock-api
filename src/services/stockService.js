const { Stock } = require('../models')
const Serializer  = require('../serializer/stock')

const create = async (params) => {
    params.entryDate = params.entry.date

    const stock = await Stock.create(params)

    return Serializer.serialize(stock) 
}

const findAndFilter = async (filters) => {
    const stocks = await Stock.findAll({
        where: filters,
    })

    return stocks.map((stock) => { return Serializer.serialize(stock) })
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
    update,
    create
};
