// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { 
      filename: './database/dev.sqlite3',
      database: 'This_db',
      user: 'username',
      password: 'password'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  }

};
