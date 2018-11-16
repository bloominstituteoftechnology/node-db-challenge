exports.up = function(knex, Promise){
    return knex.schema.createTable('projects', table => {
        table.increments()
        table.string('name', 128).notNullable()
        table.string('description').notNullable()
        table.boolean('project_completed').notNullable()
 
    })
}

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists('projects')
}
