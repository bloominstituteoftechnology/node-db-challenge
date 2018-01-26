
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions', function(tb) {
      tb
          .primary()
          .increments('id');
      tb
          .string('description', 255)
          .notNullable();
      tb
          .string('notes')
      tb
          .boolean('completed')
          .notNullable()
          .defaultTo(false)
    }) 
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('Actions')
  };