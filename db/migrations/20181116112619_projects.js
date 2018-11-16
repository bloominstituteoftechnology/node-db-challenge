exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
      projects.increments();
  
     

      projects.string('name', 128).notNullable();
      projects.text('description').notNullable();
      projects.boolean('completed').defaultTo(false);
      projects.blob('actions').defaultTo('No actions yet...');

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
  