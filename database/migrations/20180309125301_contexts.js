exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(table) {
    table.increments();
    
    table
      .string('context', 32)
      .notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
