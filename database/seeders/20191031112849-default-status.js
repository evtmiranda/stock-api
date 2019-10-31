'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('status', [
      {
        description: 'aviamento',
        created_at: new Date()
      },
      {
        description: 'preparação',
        created_at: new Date()
      },
      {
        description: 'mesa',
        created_at: new Date()
      },
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
