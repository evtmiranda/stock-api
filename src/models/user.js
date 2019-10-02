module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
        },
        username: {
            field: 'username',
            type: DataTypes.STRING,
        },
        password: {
            field: 'password',
            type: DataTypes.STRING,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
        },
    }, {
            sequelize,
            freezeTableName: true,
            tableName: 'users'
        })

    return User
}