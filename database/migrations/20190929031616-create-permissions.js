module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('permissions');
  }
};