
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments();
      table.string('action_description').notNullable();
      table.string('notes');
      table.boolean('action_completed').notNullable();
      table.integer('proj_ID').unsigned();
      table.foreign('proj_ID').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
