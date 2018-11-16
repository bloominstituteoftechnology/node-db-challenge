
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', t => {
      t.increments();
      t.string('name', 180).notNullable().unique()
      t.text('description')
      t.boolean('complete').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
