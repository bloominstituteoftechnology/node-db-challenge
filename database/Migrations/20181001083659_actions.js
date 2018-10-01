
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
         .string('action description', 128)
         .notNullable()
        
         tbl
         .string('notes')
         .notNullable
         

         tbl
         .boolean('project complete').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
