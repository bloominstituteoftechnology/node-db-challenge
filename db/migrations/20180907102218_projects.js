
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects',function(tbl){
      tbl.increments('id');
      tbl.string('description');
      tbl.string('notes');
      tbl.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
