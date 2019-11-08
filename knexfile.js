module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, // needed for sqlite
      connection: {
        filename: './data/projects.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
    },
  };
  