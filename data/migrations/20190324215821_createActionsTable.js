exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions', table => {
        table.increments();
        table.string('description', 200).notNullable();
        table.string('notes', 200);
        table.boolean('completed');
        table.integer('project_id').unsigned().notNullable();
        table.foreign('project_id').references('id').inTable('Projects');
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Actions');
};