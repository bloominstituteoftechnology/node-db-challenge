exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects_table', function(projects) {
      projects.increments();
  
      projects.string('name', 133).notNullable();
      projects.text('description').notNullable();
      projects.boolean('completed').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects_table');
  };