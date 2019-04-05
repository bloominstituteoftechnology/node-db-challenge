
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        // primary key called id, data-type: integer, auto-increments
      tbl.increments()
      tbl.string('name', 128).notNullable().unique()
});
}

exports.down = function(knex, Promise) {
    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
}
}
