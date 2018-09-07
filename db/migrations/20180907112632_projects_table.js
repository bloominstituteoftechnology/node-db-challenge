
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments();

        tbl.string('name', 128)
        .notNullable();

        tbl.string('description', 1024)
        .notNullable();

        tbl.boolean('completed')
        .defaultsTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
