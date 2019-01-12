
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.text('desc').notNullable();
    table.text('notes');
    table.boolean('completed').notNullable().defaultTo(0);
    table.integer('proj_id').unsigned();
    table.foreign('proj_id').references('id').on('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
