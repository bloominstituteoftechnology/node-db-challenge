module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'gitterdun_db',
      user: 'root',
      password: 'Password'
    }
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },

};
