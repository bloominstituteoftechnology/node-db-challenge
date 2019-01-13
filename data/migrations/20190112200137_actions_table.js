
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.isBoolean(0)('flag').notNullable();
    table.foreign('project_id').references('id').on('project');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
