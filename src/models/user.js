module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        secretKey: {
            field: 'secret_key',
            type: DataTypes.STRING(50),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: 'TIMESTAMP'
        },
        updatedAt: {
            field: 'updated_at',
            type: 'TIMESTAMP'
        },
        deletedAt: {
            field: 'deleted_at',
            type: 'TIMESTAMP'
        },
    }, {
            sequelize,
            freezeTableName: true,
            tableName: 'users'
        })

    return User
}