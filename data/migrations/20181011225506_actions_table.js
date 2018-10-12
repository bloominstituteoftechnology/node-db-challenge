
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
      table.increments();
      table.string('description', 280).notNullable();
      table.string('notes', 500);
      table.boolean('completed');
      table.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
