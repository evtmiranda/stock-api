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
            type: DataTypes.STRING(50),
        },
        username: {
            field: 'username',
            type: DataTypes.STRING(30),
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(8),
        },
        profileId: {
            field: 'profile_id',
            type: DataTypes.INTEGER,
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

    User.associate = function (models) {
        User.belongsTo(models.Profile, { foreignKey: 'profileId', as: 'profile' })
    };

    return User
}