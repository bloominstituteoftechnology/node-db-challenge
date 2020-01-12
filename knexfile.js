// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/planner.db3'
    }
  },
  migrations: {
    filename: './data/migrations'
  },
  seeds: {
    filename: './data/migrations'
  }
};