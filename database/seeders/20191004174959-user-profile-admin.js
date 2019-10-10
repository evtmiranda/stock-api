'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('profiles', [
      {
        name: 'Admin',
        description: 'Usuário com todas as permissões possíveis.',
        created_at: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('profiles', [
      {
        name: 'Admin',
        description: 'Usuário com todas as permissões possíveis.',
        created_at: new Date()
      }
    ])
  }
};
