
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
    .boolean('completed')
    .notNullable()

    tbl
    .string('actions')
    .join('projects', 'projects', '=', 'actions.relationship')
    .select('actions.id','actions.description', 'actions.notes', 'actions.completed');



});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};