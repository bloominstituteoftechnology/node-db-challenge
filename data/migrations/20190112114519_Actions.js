
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions', table => {
        table.increments().unique();
        table.string('description');
        table.string('notes');
        table.boolean('completed');
        table.integer('project_id').unsigned().unique();
        table.foreign('project_id').references('id').inTable('Projects');
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Actions');
};
