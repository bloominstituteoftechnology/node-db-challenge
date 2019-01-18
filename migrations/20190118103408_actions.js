
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
        tbl.string('notes')
        tbl.integer('project_id').notNullable().unsigned().references('id').inTable('projects')
        tbl.boolean('flag').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
