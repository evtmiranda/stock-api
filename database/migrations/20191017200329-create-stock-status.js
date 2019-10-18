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
        type: Sequelize.INTEGER,
        references: {
          model: 'stocks',
          key: 'id'
        }
      },
      status_id: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface) => {
    return queryInterface.dropTable('stock_status');
  }
};