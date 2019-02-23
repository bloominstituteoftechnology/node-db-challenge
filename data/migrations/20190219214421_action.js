
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments('id')
        table.string('description', 128).notNullable()
        table.text('notes').notNullable()
        table.boolean('is_complete').notNullable()
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };