// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    }, 
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  }
};