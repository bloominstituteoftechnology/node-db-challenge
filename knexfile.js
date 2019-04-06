module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/sprintproj.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    debug: true,
  },
};