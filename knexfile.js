// Update with your config settings.

module.exports = {

  lambdaProject: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    }, 
    useNullAsDefault: true
  }

};
