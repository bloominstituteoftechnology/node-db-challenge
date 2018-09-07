// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/GTD.sqlite3'
    },
    useNullAsDefault: true,
    migration: {
      directory: "./migrations"
    }
  },
};
