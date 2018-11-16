// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/project_tracker.sqlite3'
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys =ON',cb)
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  

};
