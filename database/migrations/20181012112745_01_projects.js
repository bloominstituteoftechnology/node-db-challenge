
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments();
        projects.string('name-project').notNullable();
        projects.string('description-project').notNullable();
        projects.bool('completed-project').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};