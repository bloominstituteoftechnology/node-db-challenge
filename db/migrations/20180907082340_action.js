
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
    table.increments()
    table.integer('project_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('project')
    table.text('description')
         .notNullable()
    table.text('notes')
         .notNullable()
    table.boolean('completed')
         .defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action');
};
