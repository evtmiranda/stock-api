'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.removeConstraint('users', 'users_username_key')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('users', ['username'], {
      type: 'unique',
      name: 'users_username_key'
    });
  }
};
