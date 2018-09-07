
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', function(tbl){
      tbl.json('actions')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', function(tbl){
      tbl.dropColumn('actions')
  })
};
