exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable().unique();
        tbl.string('notes').notNullable();
        tbl.boolean('flag').notNullable()
        tbl.integer('project_id').references('id').inTable('projects')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};