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
            date: entity.entryDate
        },
        output: {
            date: entity.outputDate ? moment(entity.outputDate).format('YYYY-MM-DD') : entity.outputDate,
            quantity: entity.outputQuantity
        },
        payment: {
            date: entity.paymentDate,
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
