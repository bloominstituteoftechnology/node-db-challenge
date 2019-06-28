
exports.up = function(knex) {
  return knex.schema.createTable('datachallenge',function(tbl){
    tbl.increments();
    tbl.string('name',128).notNullable().unique();
  })
};

exports.down = function(knex,promise) {
  return knex.schema.dropTableIfExists('datachallenge');
};
