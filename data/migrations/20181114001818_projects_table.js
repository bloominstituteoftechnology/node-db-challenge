
exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(tbl) {
        tbl.increments();

        tbl
        .string('name')
        .notNullable();
        
        tbl.string('description');
        tbl.boolean('completed');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
  
};
