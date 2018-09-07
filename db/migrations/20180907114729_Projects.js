
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
        tbl
            .string('name')
            .notNullable()
            .unique('project_name')
        tbl
            .string('description')
            .notNullable()
        tbl
            .boolean('completed')
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes')
};
