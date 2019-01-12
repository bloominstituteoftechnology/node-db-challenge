
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.boolean('completed').defaultTo(false);
        table.integer('projectId').references('projects.id').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
