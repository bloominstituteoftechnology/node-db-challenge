module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/project.db3',
      },
      useNullAsDefault: true, // needed for sqlite
      migrations: {
        directory: './data/migrations'
      }
    }
    
  
  };