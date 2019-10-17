module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stock_status', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stock_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'stocks',
          key: 'id'
        }
      },
      status_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'status',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stock_status');
  }
};