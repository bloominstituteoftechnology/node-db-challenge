
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments()
  
        tbl
            .string('description', 256)
            .notNullable()
            .unique()
        tbl 
            .string('notes')
            .notNullable()
        tbl
            .integer('completed')
        
        tbl
            .integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('SET NULL')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('actions');
  };
  