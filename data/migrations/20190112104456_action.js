
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
    table.increments();
    table.string('description').notNullable();
    table.text('notes').notNullable();
    table.boolean('completed').defaultTo(false);
    table.integer('project_id').unsigned().notNullable().references('id').inTable('project');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action');
};
