exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects' , table =>{
        table.increments();
        table.string('projectName').notNullable().unique();
        //description
        table.string('projectDescription').notNullable();
        //flag
        table.boolean('completed').defaultTo(0);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
  };
