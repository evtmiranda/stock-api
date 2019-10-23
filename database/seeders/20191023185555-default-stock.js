'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('stocks', [
      {
        lot: '123',
        description: 'Calças masculinas',
        reference: '1266f',
        quantity: 100,
        entry_date: new Date(),
        tag: true,
        store: 'Besni',
        unit_value: 1.1,
        output_date: new Date(),
        output_quantity: 100,
        created_at: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stocks', [
      {
        [Sequelize.Op.gt]: 0
      }
    ])
  }
};
