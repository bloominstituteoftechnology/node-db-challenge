module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/rolex.db3',
      },
      useNullAsDefault: true, // needed for sqlite
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done) // enforces foreign keys
        }
      }
    }
    
  
  };