
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {
        tbl.increments();
        tbl.text('description').notNullable().defaultTo('Not provided');
        tbl.text('notes').notNullable().defaultTo('Not provided');
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id').unsigned().references('id').inTable('project')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};
