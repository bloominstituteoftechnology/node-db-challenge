exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        
      tbl.increments();
  
      tbl
        .string('description')
        .notNullable()

      tbl
        .string('notes')  
        .notNullable()

      tbl
        .integer('project_id') 
        .notNullable() 
        .references('id')
        .inTable('projects') 

      tbl
        .boolean('completed').defaultTo('false');  
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions')
  };
  