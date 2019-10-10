'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('permission_profile', [
      {
        permission_id: 1,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('permission_profile', [
      {
        permission_id: 1,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 1,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 2,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 3,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 4,
        profile_id: 1,
        created_at: new Date()
      },

      {
        permission_id: 1,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 2,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 3,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
      {
        permission_id: 4,
        module_id: 5,
        profile_id: 1,
        created_at: new Date()
      },
    ])
  }
};
