
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table
      .increments('id');
    table
      .string('name', 128)
      .notNullable()
      .unique('name');
    table
      .string('description')
      .notNullable();
    table
      .boolean('complete')
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
