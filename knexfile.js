// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/base.db4'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },
};
