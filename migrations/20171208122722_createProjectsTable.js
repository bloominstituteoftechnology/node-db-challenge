
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments('id');
        tbl.string('name').unique();
        tbl.text('description').notNullable();
        tbl.boolean('completedProject');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};