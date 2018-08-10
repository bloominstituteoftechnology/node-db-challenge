
exports.up = function(knex, Promise) {
    knex.schema.createTable('actions', function(actions) {
        actions.increments('id');
        actions
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');

        actions.string('description').notNullable();
        actions.text('notes').notNullable();
        actions.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
   knex.schema.dropTableIfExists('actions');
};
