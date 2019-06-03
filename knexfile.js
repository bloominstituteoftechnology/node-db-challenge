// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/lambda.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },

      useNullAsDefault: true // needed for sqlite
    }
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  }
};
