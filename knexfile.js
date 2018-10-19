module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    pool: {
    afterCreate: (conn, cb) =>
       conn.run('PRAGMA foreign_keys = ON', cb) },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  }
};
