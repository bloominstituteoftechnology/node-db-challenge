
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments('id').primary();
        projects.string('name', 256);
        projects.string('description');
        projects.boolean('completed').defaultTo('Not Provided');
        projects.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
