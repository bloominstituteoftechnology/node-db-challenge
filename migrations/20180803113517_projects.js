
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(projects) {
        //primary key
        projects.increments();
//other fields
        projects.string('name', 128).notNullable();//.unique();//check if this unique makes sense
        projects.text('description').notNullable();
    projects.boolean('completed').defaultTo(false);
});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
