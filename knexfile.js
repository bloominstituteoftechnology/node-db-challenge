// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/projectTracker.db'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'projectTracker.db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
