'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('stock_status', [
      {
        stock_id: 1,
        status_id: 2,
        created_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stock_status', [
      {
        [Sequelize.Op.gt]: 0
      }
    ])
  }
};
