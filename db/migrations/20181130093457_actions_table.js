exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions_table', function(actions) {
      actions.increments();
  
      actions
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects_table');
  
      actions.string('description', 133).notNullable();
      actions.text('notes').notNullable();
      actions.boolean('completed').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions_table');
  };