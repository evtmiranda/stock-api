'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('status', 'delete_at', 'deleted_at');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('status', 'deleted_at', 'delete_at');
  }
};
