
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
    tbl.increments();
    tbl.string('name', 128).notNullable().unique()
    tbl.string('description',500)
    tbl.string('notes',500)
    tbl.boolean("completed")
    tbl.integer('actions_id')
    tbl.foreign('actions_id').references('projects.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
