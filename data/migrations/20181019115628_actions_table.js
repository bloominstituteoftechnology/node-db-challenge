exports.up = function(knex, Promise) {
    //unique id, description, notes,flag completed
      return knex.schema.createTable('actions', function(table) {
          table.increments();
          table.string('action_description').notNullable();
          table.text('action_notes').notNullable();
          table.boolean('action_completed').notNullable();
          table.integer('projects_id').notNullable().unsigned().references('id').inTable('projects');
      });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions');
  };