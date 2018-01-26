// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/tracker.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'tracker_migrate',
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'tracker',
      user: 'root',
      password: 'armin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'tracker_migrate'
    },
    seeds: { directory: './database/seeds' },
  },
};
