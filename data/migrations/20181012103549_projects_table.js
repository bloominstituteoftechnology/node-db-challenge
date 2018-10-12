
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', function(tbl){
    tbl.increments();
    tbl.string('name', 63).notNullable();;
    tbl.string('description', 255).notNullable();;
    tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Projects')
};
