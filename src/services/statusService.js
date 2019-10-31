const { Status } = require('../models')
const Serializer  = require('../serializer/status')

const findOrCreate = async (status) => {
    const [statusCreated, created] = await Status.findOrCreate({
        where: {
            description: status.description,
            deletedAt: null
        },
        defaults: {
            description: status.description,
        }
    })

    return [statusCreated, created]
}

const findAndFilter = async (filters) => {
    const status = await Status.findAll({
        where: filters,
    })

    return status.map((status) => { return Serializer.serialize(status) })
}

const remove = async (id) => {
    const result = await Status.update({
        deletedAt: new Date()
    },
        {
            where: {
                id: id
            }
        })

    return result;
}

// const update = async (stock) => {
//     const [numberOfAffectedRows, affectedRows] = await Stock.update({
//         lot: stock.lot,
//         description: stock.description,
//         refenrece: stock.reference, 
//         quantity: stock.quantity, 
//         tag: stock.tag, 
//         store: stock.store, 
//         unitValue: stock.unitValue, 
//         outputDate: stock.outputDate, 
//         outputQuantity: stock.outputQuantity, 
//         updatedAt: new Date()
//     },
//         {
//             where: { id: stock.id },
//             returning: true
//         })

//     return [numberOfAffectedRows, affectedRows];
// }


module.exports = {
    findAndFilter,
    remove,
    // update,
    findOrCreate
};
