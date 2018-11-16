exports.up = function(knex, Promise){
    return knex.schema.createTable('contexts', table => {
        table.increments()
        table.string('name', 256).notNullable()
        table.integer('action_id').references('actions.id')
    })
}

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists('contexts')
}
