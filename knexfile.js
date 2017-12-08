// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.sqlite3'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true,
  },
  
  production: {
    client: 'nysql',
    connection: {
      host: 'localhost',
      database: 'db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },
};
