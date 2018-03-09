// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './database/zoodb.sqlite3' },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'guelmis',
      password: 'pass'
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
