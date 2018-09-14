
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
    
        tbl 
         .integer('projects_id')
         .unsigned()
         .references('projects.id')
         

         tbl
         .string('action description')
        
         

         tbl
         .boolean('project complete').defaultTo(false);
    });
};
      

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
