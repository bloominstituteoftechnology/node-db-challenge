
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table => {
        table.increments('id')
        table.string('name', 128)
        table.string('description', 500)
        table.boolean('completed')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project')
}