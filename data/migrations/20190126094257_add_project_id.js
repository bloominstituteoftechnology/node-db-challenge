
exports.up = function(knex, Promise) {
    return knex.schema.table('actions', table => {
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('id').on('projects')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };