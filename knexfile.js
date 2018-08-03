// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/jungle.sqlite3'
    },
    useNullAsDefault: true // otherwise we get a warning
  }
};
