module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        description: 'create',
        created_at: new Date(),
      },
      {
        description: 'delete',
        created_at: new Date(),
      },
      {
        description: 'edit',
        created_at: new Date(),
      },
      {
        description: 'view',
        created_at: new Date(),
      }
    ])    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', [
      {
        description: 'create',
        created_at: new Date(),
      },
      {
        description: 'delete',
        created_at: new Date(),
      },
      {
        description: 'edit',
        created_at: new Date(),
      },
      {
        description: 'view',
        created_at: new Date(),
      }
    ])   
  }
};
