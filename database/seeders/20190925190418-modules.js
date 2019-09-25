const brazilianDate = require('../../src/utils/getBrazilianCurrentDate')

module.exports = {
  up: (queryInterface) => {
    console.log(brazilianDate())
    return queryInterface.bulkInsert('modules', [
      {
        module_name: 'home',
        created_at: brazilianDate()
      },
      {
        module_name: 'stock',
        created_at: brazilianDate()
      },
      {
        module_name: 'users',
        created_at: brazilianDate()
      },
      {
        module_name: 'reports',
        created_at: brazilianDate()
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('modules', null, {});
  }
};
