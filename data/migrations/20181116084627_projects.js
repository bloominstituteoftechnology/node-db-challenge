exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', function (table) {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('description', 255).notNullable();
      table.boolean('completed').defaultTo(false);
    });
  };
   exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  };
  