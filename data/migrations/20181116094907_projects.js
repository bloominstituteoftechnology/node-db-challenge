
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl =>{
      tbl.increments()
      tbl.string('name', 128).unique().notNullable()
      tbl.string('description', 500).notNullable()
      tbl.boolean('complete').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
