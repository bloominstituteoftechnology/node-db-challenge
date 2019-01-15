exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
      // Creates an ID that auto increments
      table.increments();
  
      table
        .string('name')
        .notNullable()
        .unique();
      table.string('description');
      table.boolean('completed');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };