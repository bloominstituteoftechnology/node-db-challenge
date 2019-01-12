
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table => {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.boolean('complete');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
