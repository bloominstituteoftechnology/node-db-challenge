
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function (tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
        tbl.boolean('flag').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
