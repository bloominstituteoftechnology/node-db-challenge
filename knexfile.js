// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/projects.db'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'projects',
      user: 'username',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
