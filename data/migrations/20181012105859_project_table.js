
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
      table.increments();

      table.string('name', 22).notNullable();

      table.string('description', 255).notNullable();

      table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist('projects')
};
