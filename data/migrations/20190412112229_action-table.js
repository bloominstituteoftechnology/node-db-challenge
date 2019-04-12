exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        
      tbl.increments()
      .unique()
  
      tbl
        .string('description')
        .notNullable()

      tbl
        .string('notes')   
        
      tbl
        .integer('project_id') 
        .unsigned()
        .notNullable() 
        .references('id')
        .inTable('projects') 
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  
      tbl
        .boolean('completed')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions')
  };
  