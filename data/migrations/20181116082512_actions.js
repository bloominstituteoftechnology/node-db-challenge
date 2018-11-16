
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', t => {
      t.increments()
      t.text('description')
      t.text('notes')
      t.boolean('complete')

      t
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
