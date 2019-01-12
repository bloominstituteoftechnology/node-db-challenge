exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('description').notNullable();
        table.integer('project_id').unsigned().notNullable();
        table.foreign('project_id').references('id').on('projects')
        table.string('notes').notNullable();
        table.boolean('completed').defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
