exports.up = function(knex) {
  return (
    knex.schema
      // a project can have multiple tasks and multiple resources
      .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('desc')
        tbl.boolean('completed')
      })
      // a resource can be used in multiple projects
      .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('desc')
      })
      // a task belongs only to one project
      .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_desc').notNullable()
        tbl.string('notes')
        tbl.boolean('completed')
        // foreign key
        tbl
          .integer('proj_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
      })
      // intermediary table
      .createTable('projects_resources', tbl => {
        tbl
          .integer('proj_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
        tbl
          .integer('res_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
        tbl.primary(['proj_id', 'res_id'])
      })
  )
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(
    'projects_resources',
    'tasks',
    'resources',
    'projects'
  )
}
