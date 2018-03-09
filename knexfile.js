// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/project_tracker_db.sqlite3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'project_tracker_db'
    },
    seeds: { directory: './database/seeds' }
    // debug: true,
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'cgroov',
      password: 'lambda',
      database: 'project_tracker_db'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './database/seeds' }
  }
};
