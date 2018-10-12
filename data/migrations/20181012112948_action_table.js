
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', tbl => {
        tbl.increments();
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project');
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.DropTableIfExists('action');
};
