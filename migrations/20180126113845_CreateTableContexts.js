
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Contexts', function(tb) {
      tb
          .primary()
          .increments('id');
      tb
          .string('context', 255)
          .notNullable();
    }) 
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('Contexts')
  };