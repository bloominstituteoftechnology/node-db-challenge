
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
    tbl.increments()
    tbl
      .string('name')
      .notNullable()
    tbl 
      .string('description')
    tbl
      .boolean('completed')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
