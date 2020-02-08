// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/project-data/master-projects.db"
    }
  },
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./data/seeds"
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  }
};
