module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/database.sqlite3' },
    pool: { afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb) },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'datamigrations',
    },
    seeds: { directory: './data/seeds' },
  },
};