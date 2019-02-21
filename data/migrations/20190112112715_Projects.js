
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects', table => {
        table.increments();
        table.string('name').unique().notNullable();
        table.string('description',200).notNullable();
        table.boolean('completed');
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects');
};
