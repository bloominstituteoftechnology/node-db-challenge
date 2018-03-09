/*
1) replace lines 11 and 12 with user/pw respectively,
2) rename this file to knexfile.js
*/

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'gtd_db',
      user: 'USER_HERE',
      password: 'PASS_HERE',
      typeCast: function(field, next) {
        if (field.type == 'TINY' && field.length == 1) {
          return field.string() == '1'; // 1 = true, 0 = false
        }
        return next();
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
