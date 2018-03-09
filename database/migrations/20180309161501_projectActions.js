
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projectActions', function(table) {
    table.increments();

    table
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');

    table
      .integer('action_id')
      .unsigned()
      .references('id')
      .inTable('actions');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projectActions');
};
