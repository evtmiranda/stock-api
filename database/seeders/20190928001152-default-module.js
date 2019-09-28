module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modules', [
      {
        module_name: 'home',
        created_at: new Date(),
      },
      {
        module_name: 'stock',
        created_at: new Date(),
      },
      {
        module_name: 'users',
        created_at: new Date(),
      },
      {
        module_name: 'reports',
        created_at: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('modules', [
      {
        module_name: 'home',
        created_at: new Date(),
      },
      {
        module_name: 'stock',
        created_at: new Date(),
      },
      {
        module_name: 'users',
        created_at: new Date(),
      },
      {
        module_name: 'reports',
        created_at: new Date(),
      }      
    ])
  }
};
