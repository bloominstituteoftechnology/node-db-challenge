
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments();
        projects
            .text('name', 128)
            .notNullable();
        projects.text('Description');
        projects.boolean('Completed').defaultTo('Not Provided');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
