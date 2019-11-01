const moment = require('moment')

const serialize = (entity) => {
    return {
        id: entity.id,
        lot: entity.lot,
        description: entity.description,
        reference: entity.reference,
        quantity: entity.quantity,
        tag: entity.tag,
        store: entity.store,
        unitValue: entity.unitValue,
        entry: {
            date: moment(entity.entryDate).format('YYYY-MM-DD')
        },
        output: {
            date: entity.outputDate ? moment(entity.outputDate).format('YYYY-MM-DD') : entity.outputDate,
            quantity: entity.outputQuantity
        },
        payment: {
            date: moment(entity.paymentDate).format('YYYY-MM-DD'),
            amount: entity.paymentAmount
        },
        stockStatus: entity.stockStatus,
        updatedAt: entity.updatedAt,
        createdAt: entity.createdAt,
        deletedAt: entity.deletedAt
    }
}

module.exports = {
    serialize
}
