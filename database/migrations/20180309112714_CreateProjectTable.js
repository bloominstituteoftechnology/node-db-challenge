exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable();

    tbl
      .text('description')
      .notNullable();

    tbl
      .integer('context_id')
      .unsigned()
      .references('id')
      .inTable('context')

    tbl
      .boolean('complete')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
