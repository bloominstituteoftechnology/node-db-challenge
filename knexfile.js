// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/development.sqlite3'
    },
      useNullAsDefault: true,  // required only for sqlite 3
      debug:true,
    
  },
};