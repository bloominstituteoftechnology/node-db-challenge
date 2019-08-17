
exports.up = function(knex) {
    return knex.schema.createTable('projects-tasks-resources', table => {

        table.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
    
        table.integer('task_id')
          .unsigned()
          .notNullable()
          .references('tasks.id')
    
        table.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resources.id')
    
        table.primary(['project_id', 'task_id', 'resource_id'])
      })
    
    }
    
 

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects-tasks-resources')

};
