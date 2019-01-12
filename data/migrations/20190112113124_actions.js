
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments()
      table.string('description', 255).notNullable()
      table.string('notes', 255)
      table.boolean('complete').defaultTo(false)
      table.integer('project_id').unsigned().references('id').inTable('projects')
  })
};

exports.down = function(knex, Promise) {
  
};
