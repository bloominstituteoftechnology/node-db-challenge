
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', function (projects) {
        projects
            .increments()
            .primary();

        projects
            .text('name')
            .notNullable()

        projects
            .text('description')
            .notNullable()

        projects
            .boolean('completed')
            .defaultTo(false);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
