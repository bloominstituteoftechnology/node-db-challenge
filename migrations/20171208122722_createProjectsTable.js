
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments('id');
        tbl.string('name').unique();
        tbl.text('description').notNullable();
        tbl.boolean('completedProject').defaultTo('false');

        tbl
            .integer('actionId')
            .references('id')
            .inTable('actions');

        tbl
            .integer('contextId')
            .references('id')
            .inTable('contexts');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};