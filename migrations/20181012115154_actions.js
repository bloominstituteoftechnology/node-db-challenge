
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments();
        
        tbl
        .string('description')
        .notNullable();
        
        tbl
        .integer('project_id')
        .notNullable();
        
        tbl
        .boolean('completed')
        .defaultTo(false);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
