
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments('id')
      table.string('todo_description')
      table.text('notes')
      table.boolean('is_completed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
