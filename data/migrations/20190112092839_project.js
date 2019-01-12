
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table => {
        table.increments();
        table.string('name');
        table.string('description');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
