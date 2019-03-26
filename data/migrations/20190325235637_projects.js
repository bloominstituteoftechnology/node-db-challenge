exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments();

        projects.string('project_name', 128)
                .notNullable();
        projects.string('description')
        projects.boolean('completed')
                .defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};