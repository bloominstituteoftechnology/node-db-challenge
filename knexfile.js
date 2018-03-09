// Update with your config settings.

module.exports = {
  development: {
    client: 'MySQL',
    connection: {
      database: 'gtd_db',
      user:     'user',
      password: 'password'
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
