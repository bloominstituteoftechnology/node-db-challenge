module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/projects.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },

    //afterCreate callback (rawDriverConnection, done) is
    // called when the pool aquires a new connection from
    // the database server. done(err, connection) callback
    // must be called for knex to be able to decide if the
    // connection is ok or if it should be discarded right
    // away from the pool.
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};
