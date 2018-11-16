
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){

    tbl.increments();
    tbl.string('name').unique().notNullable()
    tbl.string('description')
    tbl.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
