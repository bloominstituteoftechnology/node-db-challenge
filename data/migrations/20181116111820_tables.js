
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', projects => {
            projects.increments('id').primary();
            projects.string('name', 100).notNullable();
            projects.string('description', 400).notNullable();
            projects.boolean('completed?').notNullable();
        })
        .createTable('actions', actions => {
            actions.increments('id').primary();
            actions.string('description', 100).notNullable();
            actions.string('notes', 400).notNullable();
            actions.boolean('completed?').notNullable();
            actions.integer('projectId').unsigned().references('id').inTable('projects');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('actions')
};
