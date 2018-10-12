
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects
            .increments();
        projects
            .string('name-project')
            .notNullable();
        projects
            .string('description-project');
        projects
            .boolean('completed-project');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};