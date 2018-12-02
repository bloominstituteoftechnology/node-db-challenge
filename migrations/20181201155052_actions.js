exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(table) {
      table.increments();
      table.string('description', 255).notNullable();
      table.string('notes').notNullable();
      table.boolean('completed').defaultTo(false);
      table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
  };
  