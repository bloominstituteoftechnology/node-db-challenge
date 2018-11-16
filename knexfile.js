// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/project_tracker.sqlite3'
    },
    useNullAsDefault: true
  }

};
