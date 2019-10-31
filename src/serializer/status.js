const serialize = (entity) => {
    return {
        id: entity.id,
        description: entity.description,
        updatedAt: entity.updatedAt,
        createdAt: entity.createdAt,
        deletedAt: entity.deletedAt
    }
}

module.exports = {
    serialize
}
