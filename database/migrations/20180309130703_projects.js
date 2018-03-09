exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();

    table
      .string('name', 32)
      .notNullable();

    table
      .string('description', 64)
      .notNullable();

    table
      .boolean('flag')
      .notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
