
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects',
    table => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('project_description').notNullable()
      table.boolean('project_complete').defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
