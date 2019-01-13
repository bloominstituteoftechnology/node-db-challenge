
exports.up = function(knex, Promise) {
  return  knex.schema.createTable('actions', table => {
      table.increments();
      table.integer('action_id').unsigned().unique();
      table.foreign('action_id').references('project_id').on('projects');
      table.text('action_desc').notNullable()
      table.text('action_notes')
      table.boolean('action_completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('actions')
};
