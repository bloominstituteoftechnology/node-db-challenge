
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl
      .increments()

      tbl
      .integer('projectId')
      .unsigned()
      .references('id')
      .inTable('projects')
      
      tbl
      .string('description', 1000)
      .notNullable()

      tbl
      .string('notes', 1000)
      
      tbl
      .boolean('completed')
      .defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
