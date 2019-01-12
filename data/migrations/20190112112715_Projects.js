
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects', table => {
        table.increments();
        table.string('name');
        table.string('description');
        table.boolean('completed');
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects');
};
