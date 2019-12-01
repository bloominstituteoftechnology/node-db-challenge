module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, 
      connection: {
        filename: './data/project.db3',
      },
     
    }
};
