
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes').notNullable();
        tbl.boolean('completed').notNullable();
        tbl.integer('project_id').unsigned().references('id').inTable('project')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};
