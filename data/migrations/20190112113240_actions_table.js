
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('action_description',500).notNullable();
    table.string('action_notes', 1000).notNullable();
    table.boolean('action_completed').defaultTo(false);
    table.integer('project_id').unsigned().notNullable();
    table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
