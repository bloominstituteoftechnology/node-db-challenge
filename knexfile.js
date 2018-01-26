const {
  HOST,
  USERNAME,
  PASSCODE
} = require('./database/auth.js');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: HOST,
      user:     USERNAME,
      password: PASSCODE,
      database: 'GTD', // GTD = Getting Things Done
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations/',
      tableName: 'knex_migrations'
    }
  }

};
