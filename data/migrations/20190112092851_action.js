
exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.string('description');
        table.string('notes');
        table.boolean('complete');
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('project');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
