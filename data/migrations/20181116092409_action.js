
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments('id')
        table.string('description', 128)
        table.string('notes', 500)
        table.boolean('completed')
        table.integer('projectID').unsigned().references('id').inTable('project')
    }) 
}

exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('action')
}