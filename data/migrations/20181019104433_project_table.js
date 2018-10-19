
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments().primary();
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.boolean('complete');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('projects');
  
};
