'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'status',
      'delete_at',
      {
        type: Sequelize.DATE,
        allowNull: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'status',
      'delete_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  }
};
