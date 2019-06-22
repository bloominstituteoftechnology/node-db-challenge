
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', action => {
            action.increments();
            action.string('description', 128).notNullable();
            action.text('notes');
            action.boolean('completed').defaultTo(false);
            action.integer('project_id').unsigned().references('id').inTable('projects');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
