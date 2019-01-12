
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('completed').notNullable();
    table.integer('project_id').unsigned().references('id').inTable('project');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action');
};
