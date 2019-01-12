
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
      table.increments();
      table.string('action_description').notNullable();
      table.string('action_notes');
      table.boolean('action_completed').notNullable();
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').on('project');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action')
};
