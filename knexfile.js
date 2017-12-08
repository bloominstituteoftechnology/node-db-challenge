// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/projectdb',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'migrations',
    },
    //useNullasDefault: true,
  }
};
