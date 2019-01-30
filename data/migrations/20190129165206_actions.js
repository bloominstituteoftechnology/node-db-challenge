
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',
    table => {
      table.increments()
      table.string('action_description').notNullable()
      table.string('notes')
      table.boolean('action_complete').defaultTo(false)
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
