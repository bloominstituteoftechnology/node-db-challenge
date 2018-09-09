// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },
  seeds: {
    directory: "./db/seeds"
  },
  UseNullAsDefault: true
};
