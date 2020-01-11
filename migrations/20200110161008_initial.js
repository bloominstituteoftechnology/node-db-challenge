
exports.up = async function(knex) {
    await knex.schema.createTable('projects', (table)=>{
        table.increments()
        table.string('name')
          .notNullable()
        table.string('description')
        table.boolean('completed')
          .notNullable()
          .defaultTo(0)
    })
  
    await knex.schema.createTable('resources', (table)=>{
        table.increments()
        table.string('name')
          .notNullable()
          .unique()
        table.string('description')
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
    })
  
    await knex.schema.createTable('task', (table)=>{
        table.increments()
        table.string('description')
            .notNullable()
        table.string('notes')
        table.boolean('completed')
            .defaultTo(0)
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
    })

    await knex.schema.createTable('project_resources', (table)=>{
        table.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        table.integer('resource_id')
            .notNullable()
            .references('id')
            .inTable('resources')
        table.primary(['project_id', 'resource_id'])
      })

      await knex.schema.createTable('project_tasks', (table)=>{
        table.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        table.integer('task_id')
            .notNullable()
            .references('id')
            .inTable('tasks')
        table.primary(['project_id', 'task_id'])
      })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_tasks')
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  };
  