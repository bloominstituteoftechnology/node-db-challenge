
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(actions) {
        actions.increments('id').primary();
        actions.integer('project_Id').references('id').inTable('projects');
        actions.string('name', 256)
        actions.string('description').notNullable();
        actions.text('notes').notNullable();
        actions.boolean('completed').defaultTo(false);
        actions.timestamp('createdAt').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
