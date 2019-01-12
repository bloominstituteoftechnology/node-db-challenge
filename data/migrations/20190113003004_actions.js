
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments();
      table.text('description').notNullable();
      table.text('notes').notNullable();
      table.boolean('completed').notNullable();
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
