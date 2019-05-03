// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  },
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
};
