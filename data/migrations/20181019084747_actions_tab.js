
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments();
        tbl.string('description').notNullable();
        tbl.string('notes');
        tbl.boolean('completed').defaultTo('false');
        tbl.integer('project_id').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
