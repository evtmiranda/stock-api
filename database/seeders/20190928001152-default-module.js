module.exports = {
  up: (queryInterface) => {
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
        module_name: 'userProfiles',
        created_at: new Date(),
      },
      {
        module_name: 'reports',
        created_at: new Date(),
      }
    ])
  },

  down: (queryInterface) => {
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
        module_name: 'userProfiles',
        created_at: new Date(),
      },
      {
        module_name: 'reports',
        created_at: new Date(),
      }      
    ])
  }
};
