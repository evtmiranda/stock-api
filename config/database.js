const development = {
  username: 'wmzdkasxaaomna',
  password: 'f30db65259a2720c0971fc453f59bdeac810b1220e30f8c494e08f0e70068e29',
  database: 'd8fu4u6tff61rc',
  host: 'ec2-50-19-254-63.compute-1.amazonaws.com',
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