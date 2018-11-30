exports.up = function(knex, Promise) {
  return knex.shema.createTable('action', function(table) {
    table.increments();
    table.string('description').notNullable();
    table.string('notes');
    table.boolean('completed').defaultTo(false);
    table
      .integar('id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('action');
};
