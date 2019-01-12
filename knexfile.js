module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: ''
      },
      useNullAsDefault: true,
      migrations: {
          directory: ''
        },
        seeds: {
            directory: ''
          }
    }
  };