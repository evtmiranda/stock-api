const serialize = (entity) => {
    return {
        id: entity.id,
        lot: entity.lot,
        description: entity.description,
        reference: entity.reference,
        quantity: entity.quantity,
        tag: entity.tag,
        store: entity.store,
        unit_value: entity.unitValue,
        entry: {
            date: entity.entryDate
        },
        output: {
            date: entity.outputDate,
            quantity: entity.outputQuantity
        },
        payment: {
            date: entity.paymentDate,
            amount: entity.paymentAmount
        },
        updated_at: entity.updatedAt,
        created_at: entity.createdAt,
        deleted_at: entity.deletedAt
    }
}

module.exports = {
    serialize
}
