
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
    
        tbl 
            .string('name', 128)
            .notNullable()
            .unique('unique_project');    
        
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
