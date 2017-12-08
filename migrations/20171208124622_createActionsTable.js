
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments('id');

        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completedAction');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
