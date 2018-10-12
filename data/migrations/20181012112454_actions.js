exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        tbl.integer('project_id').notNullable().unsigned().references('id').inTable('projects')
        tbl.string('notes').notNullable()
        tbl.string('description').notNullable()
        tbl.boolean('completed').defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions')
};