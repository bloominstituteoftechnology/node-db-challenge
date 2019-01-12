
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments();
        table.string('project_name').notNullable();
        table.text('project_description');
        table.boolean('project_completed').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
