
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    //   ,
    //   typeCast: function(field, next) {
    //     if (field.type == 'TINY' && field.length == 1) {
    //         return (field.string() == '1'); // 1 = true, 0 = false
    //     }
    //     return next();
    // }
    },
  useNullAsDefault: true,
  migrations: {
    directory: './migrations/'
    },
  },
};