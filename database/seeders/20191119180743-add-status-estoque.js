module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('status', [
      {
        description: 'estoque',
        created_at: new Date()
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
