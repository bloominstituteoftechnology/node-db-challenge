
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects_table', table => {
        table.increments();
        table.string('project_name');
        table.string('project_description');
        table.boolean('project_completed');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects_table');
};
