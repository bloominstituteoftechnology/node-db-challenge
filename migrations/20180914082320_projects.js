
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){

    tbl
    .increments();

    tbl
    .string('name', 128)
    .notNullable()

    tbl
    .string('description')

    tbl
    .string('flag', 128)
    .notNullable()

    tbl
    .join('projects', 'projects.id', '=', 'actions.id')
    .select('actions.name');



});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};