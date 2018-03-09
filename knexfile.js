// Update with your config settings.
/* eslint-disable */

module.exports = {
  development: { // renamed from production to development
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'projects_db',
      user: 'holly',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds',
    }
  } 
};
