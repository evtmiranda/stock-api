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
            updated_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            deleted_at: {
                allowNull: true,
                type: DataTypes.DATE,
            },            
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('modules');
    }
};
