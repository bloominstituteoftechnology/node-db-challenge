
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments(); // unique id
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects');
        tbl.string('description', 255).notNullable(); // desription, i.e. title or name of the action
        tbl.string('notes', 255).notNullable(); // additional notes
        tbl.boolean('isComplete', 255).defaultTo(false); // completed flag
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
