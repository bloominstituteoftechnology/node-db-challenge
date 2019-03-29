module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './salesforce.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }

    }
  },
    
};