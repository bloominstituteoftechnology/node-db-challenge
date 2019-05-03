// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    
    seeds: {
      directory: './data/seeds'
    },
    
    // SQLITE DOes not enforce FKs
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },


};
