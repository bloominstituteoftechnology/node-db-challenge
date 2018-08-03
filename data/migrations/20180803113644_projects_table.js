
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('Description');
        tbl.boolean('Completed').defaultTo('Not Provided');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
