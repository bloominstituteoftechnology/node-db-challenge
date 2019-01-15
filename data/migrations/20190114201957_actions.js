
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('proj_ID').unsigned().unique();
    table.foreign('proj_ID').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
