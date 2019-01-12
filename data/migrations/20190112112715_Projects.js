
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects', table => {
        table.increments().unique();
        table.string('name');
        table.string('description');
        table.timestamp('created_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects');
};
