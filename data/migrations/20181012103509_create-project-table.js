
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments();

        projects.string('name', 125).notNullable();
        projects.unique('name');

        projects.text('discription').notNullable();
        
        projects.boolean('completed').default(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
