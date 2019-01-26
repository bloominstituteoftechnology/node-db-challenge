
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table => {
        table.increments();
        table.string('name');
        table.string('project_description');
        table.boolean('completed');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
