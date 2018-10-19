
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.unique('name');
        tbl.text('description');
        tbl.boolean('complete').defaultTo(false);
    })
};
// a unique Id.
// a name.
// a description.
// a flag that indicates if the project is complete or not.

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
