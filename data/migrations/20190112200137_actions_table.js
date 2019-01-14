
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments('action_id');
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('complete').notNullable();
    table.timestamps(); // use to compare age
    // table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
