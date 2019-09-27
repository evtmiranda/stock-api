module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('modules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            module_name: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            created_by: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            updated_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            updated_by: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            deleted_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            deleted_by: {
                allowNull: true,
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('modules');
    }
};
