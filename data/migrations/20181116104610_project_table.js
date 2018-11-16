
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.string('name', 128);
        tbl.string('description', 500);
        tbl.boolean('completed');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
