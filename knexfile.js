// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/data.db3',
    },
    useNullAsDefault: true, // needed for sqlite
  },
};
