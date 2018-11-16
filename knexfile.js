module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/database.sqlite3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'datamigrations',
    },
    seeds: { directory: './data/seeds' },
  },
};