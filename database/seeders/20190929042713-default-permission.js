module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('permissions', [
      {
        name: 'create',
        created_at: new Date(),
      },
      {
        name: 'delete',
        created_at: new Date(),
      },
      {
        name: 'edit',
        created_at: new Date(),
      },
      {
        name: 'view',
        created_at: new Date(),
      }
    ])    
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('permissions', [
      {
        name: 'create',
        created_at: new Date(),
      },
      {
        name: 'delete',
        created_at: new Date(),
      },
      {
        name: 'edit',
        created_at: new Date(),
      },
      {
        name: 'view',
        created_at: new Date(),
      }
    ])   
  }
};
