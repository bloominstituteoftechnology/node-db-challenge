
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', (table) => {
        table.increments('id');
        table.string('context', 128).notNullable();
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('contexts');
};
