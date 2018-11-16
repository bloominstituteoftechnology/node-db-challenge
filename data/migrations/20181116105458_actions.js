exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (table) => {
    table.increments();
    table.string('description').notNullable('');
    table.string('notes');
    table.boolean('completed').notNullable();
    table
      .integer('project_id')
      .unsigned()
      .references('projects.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
