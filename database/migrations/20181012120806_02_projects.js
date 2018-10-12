
exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(table) {
        table.dropColumn('name-project');
        table.dropColumn('description-project');
        table.dropColumn('completed-project');

        table
            .string('name_project')
            .notNullable()
            .defaultTo('blank');
        table
            .string('description_project');
        table
            .boolean('completed_project');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};