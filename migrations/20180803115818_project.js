
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', function(tbl) {
        tbl.increments();
        tbl
            .string('name')
            .notNullable();
        tbl
            .string('description')
            .notNullable();
        tbl
            .boolean('completed')
            .defaultTo(false);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  
};
