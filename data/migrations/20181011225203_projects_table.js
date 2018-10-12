
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
      table.increments();
      table.string('name', 280).notNullable();
      table.string('description', 280);
      table.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
