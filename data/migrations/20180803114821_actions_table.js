
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(actions) {
        actions.increments();
        actions
            .text('name', 128)
            .notNullable()
            .references('id')
            .inTable('projects');
        actions.text('Description');
        actions.boolean('Completed').defaultTo(false);  
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
