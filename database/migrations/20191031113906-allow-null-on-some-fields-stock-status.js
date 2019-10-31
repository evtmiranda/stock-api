'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'stock_status',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'stock_status',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  }
};
