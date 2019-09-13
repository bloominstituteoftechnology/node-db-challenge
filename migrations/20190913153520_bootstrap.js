exports.up = function(knex) {
    return (
      knex.schema
        // Projects - id, name, description, completed
        .createTable('projects', table => {
          table.increments();
  
          table.string('name', 255).notNullable();
          table.string('description', 255).nullable();
          table.boolean('completed').defaultTo(false);
        })
        // Tasks - id, project_id, description, notes, completed
        .createTable('tasks', table => {
          table.increments();
  
          table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
  
          table.string('description', 255).notNullable();
          table.string('notes', 255).nullable();
          table.boolean('completed').defaultTo(false);
        })
        // Resources - id, name, description
        .createTable('resources', table => {
          table.increments();
  
          table
            .string('name', 255)
            .unique()
            .notNullable();
          table.string('description', 255).nullable();
        })
        // Project-Resources - project_id, resource_id
        .createTable('project-resources', table => {
          table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
          table
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
  
          table.primary(['project_id', 'resource_id']);
        })
    );
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project-resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects');
  };