module.exports = {
  development: {
      client: 'sqlite3',
      connection: {
          filename: './database/projects.sqlite3',
      },
      useNullAsDefault: true,
      migrations: {
          tableName: 'dbmigrations',
      },
      seeds: {
          directory: './database/seeds',
      },
  },

  production: {
      client: 'mysql',
      connection: {
          database: 'projectsdb',
          user: 'cassidy',
          password: 'pass',
      },
      pool: {
          min: 2,
          max: 10,
      },
      migrations: {
          tableName: 'dbmigrations',
      },
      seeds: {
          directory: './database/seeds',
      },
  },
};
