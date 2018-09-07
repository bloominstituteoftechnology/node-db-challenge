// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/gtd.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    },
    pool: {
      afterCreate: function(conn, done) {
        conn.run(`PRAGMA foreign_keys = ON`, done);
      }
    }
  }
};
