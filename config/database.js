const development = {
  username: 'itiban',
  password: 'itiban',
  database: 'itiban',
  host: 'postgres',
  dialect: 'postgres',
  dialectOptions: {
      useUTC: false,
      ssl: true
  },
  timezone: '-03:00'
};

const homologation = {
  username: '',
  password: '',
  database: '',
  host: '',
  dialect: 'postgres'
};

const production = {
  username: '',
  password: '',
  database: '',
  host: '',
  dialect: 'postgres'
};

module.exports = {
  development,
  homologation,
  production
}
