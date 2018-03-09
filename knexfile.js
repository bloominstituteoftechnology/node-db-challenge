// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      connection: {
        host: 'localhost',
        database: 'projects_db',
        user: 'root',
        password: '',
      }
    },

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

};

