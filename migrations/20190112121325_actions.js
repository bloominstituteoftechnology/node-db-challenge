
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table   =>  {
      table.increments();
      table.string('action_name').notNullable();
      table.string('description');
      table.boolean('action_complete');
      table.integer('project_id').notNullable().unsigned();
      table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
