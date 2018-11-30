exports.up = function(knex, Promise) {
  return knex.shema.createTable('project', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
