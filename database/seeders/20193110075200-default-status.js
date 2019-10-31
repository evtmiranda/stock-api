'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('status', [
      {
        description: 'Status Padrão',
        created_at: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status', [
      {
        [Sequelize.Op.gt]: 0
      }
    ])
  }
};
