// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/tracker.sqlite3'
    }
  },
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  }
};
