
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', t => {
      t.increments()
      t.text('description')
      t.text('notes')
      t.boolean('complete').defaultTo(false)

      t
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
