exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl
            .string('description')
            .notNullable();
        tbl 
            .string('notes');
        tbl
            .boolean('completed')
            .defaultTo('false');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions')
  };  