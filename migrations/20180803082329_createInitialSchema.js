
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('project', table => {
      table.increments()
      table.string('name').notNull().defaultTo('name not provided')
      table.string('description')
      table.boolean('completed').defaultTo(false)
    })
    .createTable('action', table => {
      table.increments()
      table.integer('projectId').references('id').inTable('project')
      table.string('name').notNull().defaultTo('name not provided')
      table.string('description')
      table.boolean('completed').defaultTo(false)
    })
    .createTable('context', table => {
      table.increments()
      table.string('context').notNull().unique()
    })
    .createTable('action_context', table => {
      table.integer('actionId').references('action.id').notNull()
      table.integer('contextId').references('context.id').notNull()
      table.primary(['actionId', 'contextId'])
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('action')
    .dropTableIfExists('context')
    .dropTableIfExists('action_context')
}
