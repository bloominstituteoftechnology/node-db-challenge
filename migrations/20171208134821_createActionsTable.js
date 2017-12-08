
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments('id'); // primary key
        // foreign key
        tbl
            .integer('projectID')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE') // if a project's id is updated update this value
            .onDelete('CASCADE'); // if a project is deleted, delete corresponding actions

        tbl.string('description', 128).notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
