
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.unique('name');
        tbl.text('description');
        tbl.text('notes');
        tbl.boolean('complete').defaultTo(false);

        tbl
            .integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects');
    })
};

// a unique id.
// a description of what needs to be done.
// a notes column to add additional information.
// a flag that indicates if the action has been completed.

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
