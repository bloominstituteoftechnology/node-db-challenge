module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/lambda.sqlite3'
  },
 useNullasDefault: true,
 migrations: {
   directory: './database/migrations'
  }
 },
};