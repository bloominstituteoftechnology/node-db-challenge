// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/lambda.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
