exports.up = function(knex, Promise){
    return knex.schema.createTable('actions', table => {
        table.increments('')
        table.string('action_description').notNullable()
        table.string('notes').notNullable()
        table.boolean('action_completed').notNullable()
        table.integer('project_id').references('projects.id')
     
    })
}

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists('actions')
}
