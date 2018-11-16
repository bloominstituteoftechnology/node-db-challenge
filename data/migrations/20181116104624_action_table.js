
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', tbl => {
        tbl.increments();
        tbl.string('description', 256);
        tbl.string('notes', 500);
        tbl.boolean('completed');
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('dish');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
