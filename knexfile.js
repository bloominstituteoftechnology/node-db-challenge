// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3',
    },
    pool: {
      afterCreate: function(conn, cb) {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
    useNullAsDefault: true,
  },
};
