// // Update with your config settings.

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './data/list.db3'
  },
  useNullAsDefault: true // needed for sqlite
};
