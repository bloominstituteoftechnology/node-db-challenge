// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migration: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  }

};
