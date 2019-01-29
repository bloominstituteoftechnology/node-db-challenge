
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',
    table => {
      table.increments()
      table.string('action_description').notNullable()
      table.string('notes')
      table.boolean('action_complete').defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
  
};
