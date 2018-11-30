
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
    table
      .increments('id');
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects');
    table
      .string('description')
      .notNullable();
    table
      .text('notes')
      .notNullable();
    table
      .boolean('complete')
      .defaultsTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
