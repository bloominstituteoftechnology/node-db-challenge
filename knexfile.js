module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './projects.db3'
    }
  },

    migrations: {
      directory: './migrations'
    },
  
    seeds: {
      directory: './seeds'
    },

    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    }
  }
};
