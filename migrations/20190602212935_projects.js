exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable().unique();
        tbl.string('description').notNullable();
        tbl.boolean('flag').notNullable()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};