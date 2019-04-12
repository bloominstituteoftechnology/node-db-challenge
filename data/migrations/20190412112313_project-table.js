
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        
      tbl.increments();
  
      tbl
        .string('name', 128)
        .notNullable()
  
      tbl
        .string('description')
        .notNullable()

      tbl
        .integer('project_id') 
        .unsigned()
        .notNullable() 
        .references('id')
        .inTable('actions') 

      tbl
        .boolean('completed').defaultTo(false);  
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('projects')
  };
  