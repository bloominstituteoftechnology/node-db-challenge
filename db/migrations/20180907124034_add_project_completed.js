
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', function(tbl){
      tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', function(tbl){
      tbl.dropColumn('completed');
  })
};
