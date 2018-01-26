// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './dev.sqlite3'
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },
};
