const constants = require('./constants')

module.exports = {
    mongo: {
      development: {
        connectionString: constants.mongo_development
      },
      production: {
        connectionString: constants.mongo_production
      }
    }
  };