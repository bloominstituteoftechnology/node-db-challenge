// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true,
    migrations : {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // debug: true,
  },
};
