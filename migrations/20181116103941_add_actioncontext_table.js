exports.up = function(knex, Promise){
    return knex.schema.createTable('actioncontext', table => {
        table.increments()
        table.integer('action_id').references('actions.id')
        table.integer('context_id').references('contexts.id')
    })
}

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists('actioncontext')
}
