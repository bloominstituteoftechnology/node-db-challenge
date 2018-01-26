// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'project',
      user:     'root',
      password: 'Wangting5211314?'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seed: {
      directory: './database/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
