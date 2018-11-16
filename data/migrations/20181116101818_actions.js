exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', function (table) {
      table.increments();
      table.string('description', 255).notNullable();
      table.string('notes', 255).notNullable();
      table.boolean('completed').defaultTo(false);
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project');
    });
  };
   exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
  }; 