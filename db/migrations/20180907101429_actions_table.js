
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
    tbl.increments()
    tbl
      .string('description')
      .notNullable()
    tbl
      .string('notes')
    tbl
      .boolean('completed')
      .notNullable()
    tbl
      .integer('projects_id')
      .unsigned()
      .notNullable()
      .references('id')
      .InTable('projects')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions')
};
