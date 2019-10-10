module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('modules', [
      {
        name: 'home',
        created_at: new Date(),
      },
      {
        name: 'stock',
        created_at: new Date(),
      },
      {
        name: 'users',
        created_at: new Date(),
      },
      {
        name: 'userProfiles',
        created_at: new Date(),
      },
      {
        name: 'reports',
        created_at: new Date(),
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('modules', [
      {
        name: 'home',
        created_at: new Date(),
      },
      {
        name: 'stock',
        created_at: new Date(),
      },
      {
        name: 'users',
        created_at: new Date(),
      },
      {
        name: 'userProfiles',
        created_at: new Date(),
      },
      {
        name: 'reports',
        created_at: new Date(),
      }      
    ])
  }
};
