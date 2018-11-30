// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './projecttracker.sqlite3'
    }
  },
  useNullAsDefault: true, 
    migrations: {
      tableName: './data/migrations'
    }
  

};
