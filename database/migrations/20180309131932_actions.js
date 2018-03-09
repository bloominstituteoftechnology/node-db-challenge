exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
    table.increments();

    table
      .string('description', 64)
      .notNullable();

    table
      .text('notes');

    table
      .boolean('flag')
      .notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
