exports.up = function (knex, Promise) {
  return knex.schema.createTable('project', function (table) {
    table.increments();
    table.string('name', 128).notNullable();
    table.string('description').notNullable();
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};

