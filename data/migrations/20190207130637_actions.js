exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('actionDescription');
        table.string('actionNotes');

        table.integer('projectId').unsigned();
        table.foreign('projectId').references('id').on('projects');
        table.boolean('completed').defaultTo(0);
        
        
    })
  };
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
