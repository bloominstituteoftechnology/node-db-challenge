
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tracker', function (table) {
    // PK
    table.increments()  
    // project_id
    table.integer('project_id')
    table.foreign('project_id').references('project.id')
    // action_id
    table.integer('action_id')
    table.foreign('action_id').references('action.id')
    // flag
    table.boolean('flag').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tracker')
};