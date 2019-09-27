module.exports = (sequelize, DataTypes) => {
    const Module = sequelize.define('Module', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            field: 'module_name',
            type: DataTypes.STRING,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        createdBy: {
            field: 'created_by',
            type: DataTypes.INTEGER
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        updatedBy: {
            field: 'updated_by',
            type: DataTypes.INTEGER,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        },
        deletedBy: {
            field: 'deleted_by',
            type: DataTypes.INTEGER,
        },
    }, {
            sequelize,
            freezeTableName: true,
            tableName: 'modules'
        })

    return Module
}