module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './database/projectdb'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds : {
      directory: './database/seeds'
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'chris',
      password: 'pass',
      database: 'projectdb',
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory : './database/seeds' },
  },
};
