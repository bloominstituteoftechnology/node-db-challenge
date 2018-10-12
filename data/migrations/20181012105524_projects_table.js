
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.unique('name');
    tbl.string('description', 400);
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
