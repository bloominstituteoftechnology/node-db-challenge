
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',function(tbl){
    tbl.increments()
    tbl.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
