exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments()
    table.string('name', 128).notNullable()
    table.text('description')
    table.boolean('completed').defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
}
