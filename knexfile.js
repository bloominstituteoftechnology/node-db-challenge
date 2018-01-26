// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/RDBMS.sqlite3/'
  },
},

  migrations: {
    tableName: 'knex_migrations',
  },
  production: {
    client: 'Lambda',
    connection: {
      host:'localhost',
      database: 'my_db',
      user:     'Jax',
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
