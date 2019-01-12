// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './project_tracker.sqlite3'
    }
  },
  useNullAsDefault: true,
  migration: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  }

  
};
