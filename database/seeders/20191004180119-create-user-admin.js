module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        username: 'admin',
        password: 'admin',
        profile_id: 1,
        created_at: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', [
      {
        name: 'Admin',
        username: 'admin',
        password: 'admin',
        profile_id: 1,
        created_at: new Date()
      }
    ])
  }
};
